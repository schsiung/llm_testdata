# Author: Eric Benner <ebenner@vultr.com>
#
# This file is part of cloud-init. See LICENSE file for license information.

# Vultr Metadata API:
# https://www.vultr.com/metadata/

from typing import Tuple

from typing import Tuple

import cloudinit.sources.helpers.vultr as vultr
from cloudinit import log as log
from cloudinit import sources, stages, util, version

LOG = log.getLogger(__name__)
BUILTIN_DS_CONFIG = {
    "url": "http://169.254.169.254",
    "retries": 30,
    "timeout": 10,
    "wait": 5,
    "user-agent": "Cloud-Init/%s - OS: %s Variant: %s"
    % (
        version.version_string(),
        util.system_info()["system"],
        util.system_info()["variant"],
    ),
}


class DataSourceVultr(sources.DataSource):

    dsname = "Vultr"

    sensitive_metadata_keys: Tuple[
        str, ...
    ] = sources.DataSource.sensitive_metadata_keys + ("startup-script",)

    sensitive_metadata_keys: Tuple[
        str, ...
    ] = sources.DataSource.sensitive_metadata_keys + ("startup-script",)

    def __init__(self, sys_cfg, distro, paths):
        super(DataSourceVultr, self).__init__(sys_cfg, distro, paths)
        self.ds_cfg = util.mergemanydict(
            [
                util.get_cfg_by_path(sys_cfg, ["datasource", "Vultr"], {}),
                BUILTIN_DS_CONFIG,
            ]
        )

    @staticmethod
    def ds_detect():
        return vultr.is_vultr()

    # Initiate data and check if Vultr
    def _get_data(self):

        LOG.debug("Machine is a Vultr instance")

        # Fetch metadata
        self.metadata = self.get_metadata()

        self.get_datasource_data(self.metadata)

        # Dump some data so diagnosing failures is manageable
        LOG.debug("Hostname: %s", self.metadata["local-hostname"])
        return True
    # Process metadata
    def get_datasource_data(self, md):
        # Generate network config
        if "cloud_interfaces" in md:
            # In the future we will just drop pre-configured
            # network configs into the array. They need names though.
            vultr.add_interface_names(md["cloud_interfaces"])
            self.netcfg = md["cloud_interfaces"]
        else:
            self.netcfg = vultr.generate_network_config(md["interfaces"])
        # Grab vendordata
        self.vendordata_raw = md["vendor-data"]

        # Default hostname is "guest" for whitelabel
        if self.metadata["local-hostname"] == "":
            self.metadata["local-hostname"] = "guest"

        self.userdata_raw = md["user-data"]
        if self.userdata_raw == "":
            self.userdata_raw = None

    # Get the metadata by flag
    def get_metadata(self):
        return vultr.get_metadata(
            self.distro,
            self.ds_cfg["url"],
            self.ds_cfg["timeout"],
            self.ds_cfg["retries"],
            self.ds_cfg["wait"],
            self.ds_cfg["user-agent"],
            tmp_dir=self.distro.get_tmp_exec_path(),
        )

    # Compare subid as instance id
    def check_instance_id(self, sys_cfg):
        if not vultr.is_vultr():
            return False

        # Baremetal has no way to implement this in local
        if vultr.is_baremetal():
            return False

        subid = vultr.get_sysinfo()["subid"]
        return sources.instance_id_matches_system_uuid(subid)

    # Currently unsupported
    @property
    def launch_index(self):
        return None

    @property
    def network_config(self):
        return self.netcfg


# Used to match classes to dependencies
datasources = [
    (DataSourceVultr, (sources.DEP_FILESYSTEM,)),
]


# Return a list of data sources that match this set of dependencies
def get_datasource_list(depends):
    return sources.list_from_depends(depends, datasources)


if __name__ == "__main__":
    import sys

    if not vultr.is_vultr():
        print("Machine is not a Vultr instance")
        sys.exit(1)

    # It should probably be safe to try to detect distro via stages.Init(),
    # which will fall back to Ubuntu if no distro config is found.
    # this distro object is only used for dhcp fallback. Feedback from user(s)
    # of __main__ would help determine if a better approach exists.
    #
    # we don't needReportEventStack, so reporter=True
    distro = stages.Init(reporter=True).distro

    md = vultr.get_metadata(
        distro,
        BUILTIN_DS_CONFIG["url"],
        BUILTIN_DS_CONFIG["timeout"],
        BUILTIN_DS_CONFIG["retries"],
        BUILTIN_DS_CONFIG["wait"],
        BUILTIN_DS_CONFIG["user-agent"],
    )
    config = md["vendor-data"]
    sysinfo = vultr.get_sysinfo()