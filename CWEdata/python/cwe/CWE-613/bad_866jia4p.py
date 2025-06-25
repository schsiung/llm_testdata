"""
This module provides a client interface for the node to communicate with the
central server.
"""
import jwt
import datetime
import time

from typing import Dict, Tuple
from threading import Thread

from vantage6.common import WhoAmI
from vantage6.client import ClientBase
from vantage6.node.globals import REFRESH_BEFORE_EXPIRES_SECONDS


class NodeClient(ClientBase):
    """ Node interface to the central server."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        # self.name = None
        self.collaboration_id = None
        self.whoami = None

    def authenticate(self, api_key: str):
        """ Nodes authentication at the central server.

            It also identifies itself by retrieving the collaboration
            and organization to which this node belongs. The server
            returns a JWT-token that is used in all succeeding requests.

            :param api_key: api-key used to authenticate to the central
                server
        """
        super().authenticate({"api_key": api_key}, path="token/node")

        # obtain the server authenticatable id
        jwt_payload = jwt.decode(self.token,
                                 options={"verify_signature": False})

        # FIXME: 'identity' is no longer needed in version 4+. So this if
        # statement can be removed
        if 'sub' in jwt_payload:
            id_ = jwt_payload['sub']
        elif 'identity' in jwt_payload:
            id_ = jwt_payload['identity']

        # get info on how the server sees me
        node = self.request(f"node/{id_}")

        name = node.get("name")
        self.collaboration_id = node.get("collaboration").get("id")

        organization_id = node.get("organization").get("id")
        organization = self.request(f"organization/{organization_id}")
        organization_name = organization.get("name")

        self.whoami = WhoAmI(
            type_="node",
            id_=id_,
            name=name,
            organization_id=organization_id,
            organization_name=organization_name
        )

    def auto_refresh_token(self) -> None:
        """ Start a thread that refreshes token before it expires. """
        # set up thread to refresh token
        t = Thread(target=self.__refresh_token_worker, daemon=True)
        t.start()

    def __refresh_token_worker(self) -> None:
        """ Keep refreshing token to prevent it from expiring. """
        while True:
            # get the time until the token expires
            expiry_time = jwt.decode(
                self.token, options={"verify_signature": False})["exp"]
            time_until_expiry = expiry_time - time.time()
            if time_until_expiry < REFRESH_BEFORE_EXPIRES_SECONDS:
                self.refresh_token()
            else:
                time.sleep(
                    int(time_until_expiry - REFRESH_BEFORE_EXPIRES_SECONDS + 1)
                )

    def request_token_for_container(self, task_id: int, image: str):
        """ Request a container-token at the central server.

            This token is used by algorithm containers that run on this
            node. These algorithms can then post tasks and retrieve
            child-results (usually refered to as a master container).
            The server performs a few checks (e.g. if the task you
            request the key for is still open) before handing out this
            token.

            :param task_id: id from the task, which is going to use this
                container-token (a task results in a algorithm-
                container at the node)
            :param image: image-name of the task
        """
        self.log.debug(
            f"requesting container token for task_id={task_id} "
            f"and image={image}"
        )
        return self.request('/token/container', method="post", json={
            "task_id": task_id,
            "image": image
        })

    def get_results(self, id=None, state=None, include_task=False,
                    task_id=None):
        """ Obtain the results for a specific task.

            Overload the definition of the parent by entering the
            task_id automatically.
        """
        return super().get_results(
            id=id,
            state=state,
            include_task=include_task,
            task_id=task_id,
            node_id=self.whoami.id_
        )

    def is_encrypted_collaboration(self):
        """ Boolean whenever the encryption is enabled.

            End-to-end encryption is per collaboration managed at the
            central server. It is important to note that the local
            configuration-file should allow explicitly for unencrpyted
            messages. This function returns the setting from the server.
        """
        response = self.request(f"collaboration/{self.collaboration_id}")
        return response.get("encrypted") == 1

    def set_task_start_time(self, id: int):
        """ Sets the start time of the task at the central server.

            This is important as this will note that the task has been
            started, and is waiting for restuls.

            :param id: id of the task to set the start-time of

            TODO the initiator_id does not make sens here...
        """
        self.patch_results(id, result={
            "started_at": datetime.datetime.now().isoformat()
        })

    def patch_results(self, id: int, result: Dict,
                      init_org_id: int = None) -> None:
        """
        Update the results at the central server.

        Typically used when to algorithm container is finished or
        when a status-update is posted (started, finished)

        Parameters
        ----------
        id: int
            ID of the result to patch
        result: Dict
            Dictionary of fields that are to be patched
        init_org_id: int, optional
            Organization id of the origin of the task. This is required
            when the result dict includes results, because then results have
            to be encrypted specifically for them
        """
        # TODO: the key `result` is not always present, e.g. when
        #     only the timestamps are updated
        # FIXME: public keys should be cached
        if "result" in result:
            if not init_org_id:
                self.log.critical(
                    "Organization id is not provided: cannot send results to "
                    "server as they cannot be encrypted")
            msg = f"Retrieving public key from organization={init_org_id}"
            self.log.debug(msg)

            org = self.request(f"organization/{init_org_id}")
            public_key = None
            try:
                public_key = org["public_key"]
            except KeyError:
                self.log.critical('Public key could not be retrieved...')
                self.log.critical('Does the initiating organization belong to '
                                  'your organization?')

            result["result"] = self.cryptor.encrypt_bytes_to_str(
                result["result"],
                public_key
            )

            self.log.debug("Sending results to server")
        else:
            self.log.debug("Just patchin'")

        return self.request(f"result/{id}", json=result, method='patch')

    def get_vpn_config(self) -> Tuple[bool, str]:
        """
        Obtain VPN configuration from the server

        Returns
        -------
        bool
            Whether or not obtaining VPN config was successful
        str
            OVPN configuration file content
        """
        response = self.request("vpn")

        ovpn_config = response.get("ovpn_config")
        if ovpn_config is None:
            return False, ''

        # replace windows line endings to linux style to prevent extra
        # whitespace in writing the file
        ovpn_config = ovpn_config.replace("\r\n", "\n")

        return True, ovpn_config

    def refresh_vpn_keypair(self, ovpn_file: str) -> bool:
        """
        Refresh the client's keypair in an ovpn configuration file

        Parameters
        ----------
        ovpn_file: str
            The path to the current ovpn configuration on disk
        """
        # Extract the contents of the VPN file
        with open(ovpn_file, 'r') as file:
            ovpn_config = file.read()

        response = self.request(
            "vpn/update",
            method="POST",
            json={'vpn_config': ovpn_config},
        )
        ovpn_config = response.get("ovpn_config")
        if not ovpn_config:
            self.log.warn("Refreshing VPN keypair not successful!")
            self.log.warn("Disabling node-to-node communication via VPN")
            return False

        # write new configuration back to file
        with open(ovpn_file, 'w') as f:
            f.write(ovpn_config)
        return True
