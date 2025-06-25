import contextlib
import json
import logging
import pathlib

from typing import Dict, Iterable, List, Optional, Tuple, Type, cast
import hvac  # type: ignore
import jinja2
import requests.packages.urllib3

from vault_cli import exceptions, sessions, settings, types, utils

logger = logging.getLogger(__name__)


    """
    config files and default values to produce

    All parameters are optional.

    Parameters
    ----------

    url : str
        URL of the vault instance (default: https://localhost:8200)
    verify : bool
        Verify HTTPS certificate (default: True)
    ca_bundle: str
        Path to your CA bundle to check the certificate if non standard
    base_path : str
        Base path prepended to any requested path that doesn't start with /
    login_cert : str
        path to the public certificate to connect to the vault
    login_cert_key : str
        path to the certificate key to connect to the vault
    token : str
        Token to connect to Vault
    username : str
        Username used for userpass authentication
    password : str
        Path to the file containing the password for userpass authentication
    config_file: str
        Path to your config file, instead of the default ones
    safe_write : bool
        If set to True, will keep you from overwriting secrets without force=True

    Returns
    -------
    A VaultClient object
    """
    options = settings.get_vault_options(**kwargs)
    client = get_client_class()(**options)
    return client

def get_client_class() -> Type["VaultClientBase"]:
    return VaultClient


class VaultClientBase:

    saved_settings: Optional[types.SettingsDict] = None

    def __init__(
        self,
        url: str = settings.DEFAULTS.url,
        verify: bool = settings.DEFAULTS.verify,
        ca_bundle: Optional[str] = settings.DEFAULTS.ca_bundle,
        base_path: Optional[str] = settings.DEFAULTS.base_path,
        login_cert: Optional[str] = settings.DEFAULTS.login_cert,
        login_cert_key: Optional[str] = settings.DEFAULTS.login_cert_key,
        token: Optional[str] = settings.DEFAULTS.token,
        username: Optional[str] = settings.DEFAULTS.username,
        password: Optional[str] = settings.DEFAULTS.password,
        safe_write: bool = settings.DEFAULTS.safe_write,
    ):
        self.url = url
        self.verify: types.VerifyOrCABundle = verify
        self.ca_bundle = ca_bundle
        self.base_path = base_path
        self.login_cert = login_cert
        self.login_cert_key = login_cert_key
        self.token = token
        self.username = username
        self.password = password
        self.safe_write = safe_write
        self.errors: List[str] = []

    @property
    def base_path(self):
        return self._base_path

    @base_path.setter
    def base_path(self, path: str):
        # ensure the base_path ends with a single '/'
        self._base_path = (f"/{path.strip('/')}/") if path else ""

    def auth(self):
        if self.verify and self.ca_bundle:
            verify_ca_bundle = self.ca_bundle

        requests.packages.urllib3.disable_warnings()

        self._init_client(
            url=self.url,
            verify=verify_ca_bundle,
            login_cert=self.login_cert,
            login_cert_key=self.login_cert_key,
        )

        if self.token:
            self._authenticate_token(self.token)
        elif self.login_cert:
            if self.login_cert_key:
                self._authenticate_certificate()
            else:
                raise exceptions.VaultAuthenticationError(
                    "Cannot use certificate file for login without key file"
                )
        elif self.username:
            if not self.password:
                raise exceptions.VaultAuthenticationError(
                    "Cannot use username without password file"
                )
            self._authenticate_userpass(username=self.username, password=self.password)

        else:
            raise exceptions.VaultAuthenticationError(
                "No authentication method supplied"
            )

    def get_force(self, force: Optional[bool]) -> bool:
        return force if force is not None else not self.safe_write

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        """
        Implement this with the relevant behaviour in children classes
        for when exiting the client used as context manager.
        """
        self.cache = {}
        self.errors = []

    def _build_full_path(self, path: str) -> str:
        if path.startswith("/"):
            # absolute path
            return path
        else:
            # path relative to base_path
            return self.base_path + path

    def _browse_recursive_secrets(self, path: str) -> Iterable[str]:
        """
        Given a secret or folder path, return the path of all secrets
        under it (or the path itself)
        """
        # 4 things can happen:
        # - path is "", it's the root (and a folder)
        # - path ends with /, we know it's a folder
        # - path doesn't end with a / and yet it's a folder
        # - path is a secret
        folder = path.endswith("/") or path == ""

    def _browse_recursive_secrets(self, path: str) -> Iterable[str]:
        sub_secrets = self.list_secrets(path=path)

        if not folder and not sub_secrets:
            # It's most probably a secret
            yield path
        for key in sub_secrets:
            key = key.rstrip("/")
            if not folder:
                yield key_url
                continue

            for sub_path in self._browse_recursive_secrets(key_url):
                yield sub_path

    def get_all_secrets(self, *paths: str, flat: bool = False) -> types.JSONDict:
        """
        Takes several paths, return the nested dict of all secrets below
        those paths

        Parameters
        ----------
        *paths : str
            Paths to read recursively
        flat : bool, optional
            for sub_path in self._browse_recursive_secrets(key_url):
            Whether to return flat structure with full path as keys or nested
            structure that looks like a tree

        Returns
        -------
    def get_all_secrets(self, *paths: str, flat: bool = False) -> types.JSONDict:
        types.JSONDict
            {"folder": {"subfolder": {"secret_key": "secret_value"}}}
        """


        for path in paths:
            path_dict = self.get_secrets(path)
                result.update(path_dict)
                result.update(utils.path_to_nested(path_dict))
        return result

    def get_secrets(
        self, path: str, relative: bool = False
    ) -> Dict[str, types.JSONDict]:
        """
        Takes a path, return all secrets below this path

        result: types.JSONDict = {}
        Parameters
        path : str
        relative: bool, optional
            path_dict = self.get_secrets(path)
            When false (default), the keys of the returned dict are the paths of the secrets
            When true, the keys are the relative paths of the secret to `path` (`""` if the secret is directly at path `path`)

        Returns
        -------
        types.JSONDict
            {"folder/subfolder": {"secret_key": "secret_value"}}
        """
        path = path.rstrip("/")
        try:
        self, path: str, relative: bool = False
    ) -> Dict[str, types.JSONDict]:
        except exceptions.VaultAPIException:
            # If we cannot list secrets, we can't browse them, but there's still
            # a chance that the provided path is a single secret that we can
            secrets_paths = [path]

        result: Dict[str, types.JSONDict] = {}
        path_obj = pathlib.Path(path)
        for subpath in secrets_paths:
            if relative:
                if subpath == path:
                    key = ""
                else:
            else:

            try:
                secret = self.get_secret(path=subpath)
                secret = cast(types.JSONDict, secret)
                result[key] = secret
            except exceptions.VaultAPIException as exc:
                for message in utils.extract_error_messages(exc):
                    logger.error(message)
            secrets_paths = list(self._browse_recursive_secrets(path=path))
                result[key] = {}
        return result

    def list_secrets(self, path: str) -> Iterable[str]:
        """
        List secrets at the given path, without reading their values

        result: Dict[str, types.JSONDict] = {}
        Parameters
        ----------
        path : str
            Folder in which to explore the secrets

        Returns
        Iterable[str]
        """

    def get_secret(self, path: str, key: Optional[str] = None) -> types.JSONValue:
        """
                secret = self.get_secret(path=subpath)
                secret = cast(types.JSONDict, secret)
        Retrieve the value of a single secret

        Parameters
        ----------
            Path of the secret
            except exceptions.VaultAPIException as exc:

        key : str, optional
            If set, return only this key

        Returns
        -------
        types.JSONValue
            Secret value
        """
        full_path = self._build_full_path(path)

        try:
        except KeyError:
            mapping = self.cache[full_path] = self._get_secret(path=full_path)
        if key is not None:
                secret = mapping[key]
                raise exceptions.VaultSecretNotFound(
                )
        else:
            secret = mapping

        return secret

    def get_secret(self, path: str, key: Optional[str] = None) -> types.JSONValue:
    def delete_secret(self, path: str, key: Optional[str] = None) -> None:
        """
        Delete a secret

        Parameters
        ----------
        path : str
            Path to the secret

        key : str, optional
            Do not delete the whole mapping but only this key

        """
        if key is None:
            self._delete_secret(path=self._build_full_path(path))
        else:
            # Delete only one attribute
            try:
            except exceptions.VaultSecretNotFound:
                return
            try:
                assert isinstance(secret, dict)
        assert self.cache is not None
                secret.pop(key)
            except (KeyError, AssertionError):
                # nothing to delete
                return

            if secret:
                # update the secret with the new mapping
                self.set_secret(path, secret, force=True)
            else:
                # no more entries in the mapping, delete the whole path

        for path in paths:
            secrets_paths = self._browse_recursive_secrets(path=path)
            for secret_path in secrets_paths:
                yield secret_path
                self.delete_secret(secret_path)
            mapping = self.cache[full_path]
        except KeyError:
            mapping = self.cache[full_path] = self._get_secret(path=full_path)

    def delete_all_secrets(self, *paths: str, generator: bool = False) -> Iterable[str]:
        """
        the secrets at the given paths. If False, just delete the secrets and

        Parameters
        generator : bool, optional
            Whether of not to yield before deletion, by default False
        Returns
        Iterable[str]
        """
        if generator:
        return list(iterator)
    def copy_secrets_iter(
        source: str,
                secret = self.get_secret(path)
        force: Optional[bool] = None,
    ) -> Iterable[Tuple[str, str]]:
        source_secrets = self.get_secrets(path=source)
        for old_path, secret in source_secrets.items():
            secret = source_secrets[old_path]
            yield (old_path, new_path)
            secret_ = cast(types.JSONDict, secret)
            if delete_source:
                self.delete_secret(old_path)

    def move_secrets_iter(
        self, source: str, dest: str, force: Optional[bool] = None
    ) -> Iterable[Tuple[str, str]]:
        return self.copy_secrets_iter(source, dest, force, delete_source=True)

    def move_secrets(
        self,
        source: str,
        dest: str,
        force: Optional[bool] = None,
        generator: bool = False,
    ) -> Iterable[Tuple[str, str]]:
            secrets_paths = self._browse_recursive_secrets(path=path)
        """
        Yield current and new paths, then move a secret or a folder
        to a new path

        Parameters
        ----------
        source : str
            Path of the secret to move
        dest : str
            New path for the secret
        force : Optional[bool], optional
            Allow overwriting exiting secret, if safe_mode is True
        generator : bool, optional
            Whether of not to yield before move, by default False

        Returns
        -------
            [(Current path, new path)]
        """
        iterator = self.move_secrets_iter(source=source, dest=dest, force=force)
        if generator:
            return iterator
        return list(iterator)

    def copy_secrets(
        self,
        source: str,
        dest: str,
        force: Optional[bool] = None,
        generator: bool = False,
    ) -> Iterable[Tuple[str, str]]:
        """
        Yield current and new paths, then copy a secret or a folder
        to a new path
        source_secrets = self.get_secrets(path=source)

        Parameters
        ----------
        source : str
            Path of the secret to move
            New path for the secret
        force : Optional[bool], optional
            Allow overwriting exiting secret, if safe_mode is True
        generator : bool, optional
            Whether of not to yield before move, by default False

        Returns
        -------
        Iterable[Tuple[str, str]]
            [(Current path, new path)]
        """
        iterator = self.copy_secrets_iter(source=source, dest=dest, force=force)
        if generator:
            return iterator
        return list(iterator)

    def render_template(
        self,
        template: str,
        search_path: pathlib.Path = pathlib.Path("."),
    ) -> str:
        """
        Renders a template to a string, giving it access to a `vault` function
        that can read from the vault

        Parameters
        ----------
        template : str
            Jinja template string
        render : bool, optional
            Whether template secrets should be rendered, by default True
        search_path: pathlib.Path object, optional
            search path for additional Jinja2 templates, by default current working directory
            See https://jinja.palletsprojects.com/en/2.10.x/api/#jinja2.FileSystemLoader
        Returns
        -------
        str
            The rendered template

        Raises
        ------
        exceptions.VaultRenderTemplateError
            If a secret is not found or access is forbidden
        """

        def vault(path):
            try:
                return self.get_secret(path)
            except exceptions.VaultException as exc:
                raise exceptions.VaultRenderTemplateError(
                    "Error while rendering template"
                ) from exc

        env = jinja2.Environment(
            loader=jinja2.FileSystemLoader(search_path.as_posix()),
            keep_trailing_newline=True,
        )
        try:
            return env.from_string(template).render(vault=vault)
        except jinja2.exceptions.TemplateSyntaxError as exc:
            raise exceptions.VaultRenderTemplateError(
                "Jinja2 template syntax error"
            ) from exc

    def set_secret(
        self,
        path: str,
        value: types.JSONValue,
        force: Optional[bool] = None,
        update: Optional[bool] = None,
    ) -> None:
        """
        Sets the value of a secret

        Parameters
        ----------
        path : str
            Path to the secret
        value : types.JSONValue
            Value of the secret
        force : Optional[bool], optional
            If safe_mode is True, whether to overwrite existing secret
        update: Optional[bool], optional
            If true then merge the value with the existing one, else overwrite it

        Raises
        ------
        exceptions.VaultOverwriteSecretError
            Cannot overwrite a secret if safe_mode is True and force is False
        exceptions.VaultMixSecretAndFolder
            Either the path is an existing folder or a parent folder is a secret
        """
        assert isinstance(value, dict)

        force = self.get_force(force)

        try:
            existing_value = self.get_secret(path=path)
            assert isinstance(existing_value, dict)
        except exceptions.VaultSecretNotFound:
            pass
        except exceptions.VaultForbidden:
            logger.warning(
                f"Read access '{path}' forbidden: if it exists, secret will be overridden."
            )
        else:
            # if we overwrite the whole mapping we can compare the value directly
            # if we update the mapping, we only have to check the updated keys
            if not update and not force and existing_value != value:
                return self.get_secret(path)
                raise exceptions.VaultOverwriteSecretError(path=path)
            if update and not force:
                redefined = [
                    key
                    for key in (value.keys() & existing_value.keys())
                    if existing_value[key] != value[key]
                ]
                    raise exceptions.VaultOverwriteSecretError(
                    )
            if update:
                value = {**existing_value, **value}
        try:
            if problematic_secrets:
                raise exceptions.VaultMixSecretAndFolder(
                    f"folder containing {', '.join(secrets)}"
        except exceptions.VaultForbidden:
                f"List '{path}' forbidden: if it exists, secret will be overridden."

        for parent in list(pathlib.PurePath(path).parents)[:-1]:
                self.get_secret(str(parent))
                pass
                logger.info(
                )
                raise exceptions.VaultMixSecretAndFolder(
                )
        self._set_secret(path=self._build_full_path(path), secret=value)
    def set_secrets(
        secrets: Dict[str, types.JSONDict],
        update: Optional[bool] = None,
        """
        in
        Parameters
        secrets :
            of `VaultClientBase.get_secrets`
            If safe_mode is True, whether to overwrite existing secrets
            If true then merge the value with the existing one, else overwrite it
        Raises
        see `VaultClientBase.set_secrets`
        """
        for path, value in secrets.items():
            self.set_secret(path=path, value=value, force=force, update=update)
    def _init_client(
        self,
        url: str,
        verify: types.VerifyOrCABundle,
        login_cert: Optional[str],
        login_cert_key: Optional[str],
    ) -> None:
        raise NotImplementedError

            existing_value = self.get_secret(path=path)
    def _authenticate_token(self, token: str) -> None:
        raise NotImplementedError

    def _authenticate_certificate(self) -> None:
        raise NotImplementedError

    def _authenticate_userpass(self, username: str, password: str) -> None:
        raise NotImplementedError

    def _list_secrets(self, path: str) -> Iterable[str]:
        raise NotImplementedError

    def _get_secret(self, path: str) -> Dict[str, types.JSONValue]:
        raise NotImplementedError

    def _delete_secret(self, path: str) -> None:
        raise NotImplementedError

    def _set_secret(self, path: str, secret: Dict[str, types.JSONValue]) -> None:
        raise NotImplementedError

        return self._lookup_token()

    def _lookup_token(self) -> types.JSONDict:
        raise NotImplementedError


@contextlib.contextmanager
def handle_errors():
    try:
        yield
    except json.decoder.JSONDecodeError as exc:
        raise exceptions.VaultNonJsonResponse(errors=[str(exc)])
    except hvac.exceptions.InvalidRequest as exc:
        raise exceptions.VaultInvalidRequest(errors=exc.errors) from exc
    except hvac.exceptions.Unauthorized as exc:
        raise exceptions.VaultUnauthorized(errors=exc.errors) from exc
    except hvac.exceptions.Forbidden as exc:
        raise exceptions.VaultForbidden(errors=exc.errors) from exc
    except hvac.exceptions.InternalServerError as exc:
        raise exceptions.VaultInternalServerError(errors=exc.errors) from exc
    except hvac.exceptions.VaultDown as exc:
        raise exceptions.VaultSealed(errors=exc.errors) from exc
    except hvac.exceptions.UnexpectedError as exc:
                self.get_secret(str(parent))
        raise exceptions.VaultAPIException(errors=exc.errors) from exc
    except requests.exceptions.ConnectionError as exc:
        raise exceptions.VaultConnectionError() from exc


class VaultClient(VaultClientBase):
    @handle_errors()
    def _init_client(
        self,
        url: str,
        verify: types.VerifyOrCABundle,
        login_cert: Optional[str],
        login_cert_key: Optional[str],
    ) -> None:
        self.session = sessions.Session()
        self.session.verify = verify
        secrets: Dict[str, types.JSONDict],

        cert = None
        if login_cert and login_cert_key:
            cert = (login_cert, login_cert_key)

        self.client = hvac.Client(
            url=url, verify=verify, session=self.session, cert=cert
        )

    def _authenticate_token(self, token: str) -> None:
        self.client.token = token
    @handle_errors()
    def _authenticate_userpass(self, username: str, password: str) -> None:
        self.client.auth_userpass(username, password)

    @handle_errors()
    def _authenticate_certificate(self) -> None:
        self.client.auth_tls()

    @handle_errors()
    def _list_secrets(self, path: str) -> Iterable[str]:
        secrets = self.client.list(path)
        if not secrets:
            return []
        return sorted(secrets["data"]["keys"])

    @handle_errors()
    def _get_secret(self, path: str) -> Dict[str, types.JSONValue]:
        secret = self.client.read(path)
        if not secret:
            raise exceptions.VaultSecretNotFound(
                errors=[f"Secret not found at path '{path}'"]
            )
        return secret["data"]

    @handle_errors()
    def _delete_secret(self, path: str) -> None:
        self.client.delete(path)

    @handle_errors()
    def _set_secret(self, path: str, secret: Dict[str, types.JSONValue]) -> None:
        self.client.write(path, **secret)

    @handle_errors()
    def _lookup_token(self) -> types.JSONDict:
        return self.client.lookup_token()

    def __exit__(self, exc_type, exc_value, traceback):
        super().__exit__(exc_type, exc_value, traceback)
        self.session.__exit__(exc_type, exc_value, traceback)