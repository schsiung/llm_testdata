"""
Authenticated HTTP proxy for Jupyter Notebooks

Some original inspiration from https://github.com/senko/tornado-proxy
"""

import inspect
import socket
import os
from urllib.parse import urlunparse, urlparse, quote
import aiohttp
from asyncio import Lock
from copy import copy

from tornado import gen, web, httpclient, httputil, process, websocket, ioloop, version_info

from jupyter_server.utils import ensure_async, url_path_join
from jupyter_server.base.handlers import JupyterHandler, utcnow
from traitlets.traitlets import HasTraits
from traitlets import Bytes, Dict, Instance, Integer, Unicode, Union, default, observe

from .utils import call_with_asked_args
from .websocket import WebSocketHandlerMixin, pingable_ws_connect
from simpervisor import SupervisedProcess


class RewritableResponse(HasTraits):
    """
    A class to hold the response to be rewritten by rewrite_response
    """
    # The following should not be modified (or even accessed) by rewrite_response.
    # It is used to initialize the default values of the traits.
    orig_response = Instance(klass=httpclient.HTTPResponse)

    # The following are modifiable by rewrite_response
    headers = Union(trait_types=[Dict(), Instance(klass=httputil.HTTPHeaders)])
    body = Bytes()
    code = Integer()
    reason = Unicode(allow_none=True)

    @default('headers')
    def _default_headers(self):
        return copy(self.orig_response.headers)

    @default('body')
    def _default_body(self):
        return self.orig_response.body

    @default('code')
    def _default_code(self):
        return self.orig_response.code

    @default('reason')
    def _default_reason(self):
        return self.orig_response.reason

    @observe('code')
    def _observe_code(self, change):
        # HTTP status codes are mapped to short descriptions in the
        # httputil.responses dictionary, 200 maps to "OK", 403 maps to
        # "Forbidden" etc.
        #
        # If code is updated and it previously had a reason matching its short
        # description, we update reason to match the new code's short
        # description.
        #
        if self.reason == httputil.responses.get(change['old'], 'Unknown'):
            self.reason = httputil.responses.get(change['new'], 'Unknown')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Trigger the default value to be set from orig_response on instantiation.
        # Otherwise _observe_code will receive change['old'] == 0.
        self.code

    def _apply_to_copy(self, func):
        """
        Apply a function to a copy of self, and return the copy
        """
        new = copy(self)
        func(new)
        return new


class AddSlashHandler(JupyterHandler):
    """Add trailing slash to URLs that need them."""
    @web.authenticated
    def get(self, *args):
        src = urlparse(self.request.uri)
        dest = src._replace(path=src.path + '/')
        self.redirect(urlunparse(dest))

class ProxyHandler(WebSocketHandlerMixin, JupyterHandler):
    """
    A tornado request handler that proxies HTTP and websockets from
    a given host/port combination. This class is not meant to be
    used directly as a means of overriding CORS. This presents significant
    security risks, and could allow arbitrary remote code access. Instead, it is
    meant to be subclassed and used for proxying URLs from trusted sources.

    Subclasses should implement open, http_get, post, put, delete, head, patch,
    and options.
    """
    def __init__(self, *args, **kwargs):
        self.proxy_base = ''
        self.absolute_url = kwargs.pop('absolute_url', False)
        self.host_allowlist = kwargs.pop('host_allowlist', ['localhost', '127.0.0.1'])
        self.rewrite_response = kwargs.pop(
            'rewrite_response',
            tuple(),
        )
        self.subprotocols = None
        super().__init__(*args, **kwargs)

    # Support/use jupyter_server config arguments allow_origin and allow_origin_pat
    # to enable cross origin requests propagated by e.g. inverting proxies.

    def check_origin(self, origin=None):
        return JupyterHandler.check_origin(self, origin)

    # Support all the methods that tornado does by default except for GET which
    # is passed to WebSocketHandlerMixin and then to WebSocketHandler.

    async def open(self, port, proxied_path):
        raise NotImplementedError('Subclasses of ProxyHandler should implement open')

    async def http_get(self, host, port, proxy_path=''):
        '''Our non-websocket GET.'''
        raise NotImplementedError('Subclasses of ProxyHandler should implement http_get')

    def post(self, host, port, proxy_path=''):
        raise NotImplementedError('Subclasses of ProxyHandler should implement this post')

    def put(self, port, proxy_path=''):
        raise NotImplementedError('Subclasses of ProxyHandler should implement this put')

    def delete(self, host, port, proxy_path=''):
        raise NotImplementedError('Subclasses of ProxyHandler should implement delete')

    def head(self, host, port, proxy_path=''):
        raise NotImplementedError('Subclasses of ProxyHandler should implement head')

    def patch(self, host, port, proxy_path=''):
        raise NotImplementedError('Subclasses of ProxyHandler should implement patch')

    def options(self, host, port, proxy_path=''):
        raise NotImplementedError('Subclasses of ProxyHandler should implement options')

    def on_message(self, message):
        """
        Called when we receive a message from our client.

        We proxy it to the backend.
        """
        self._record_activity()
        if hasattr(self, 'ws'):
            self.ws.write_message(message, binary=isinstance(message, bytes))

    def on_ping(self, data):
        """
        Called when the client pings our websocket connection.

        We proxy it to the backend.
        """
        self.log.debug('jupyter_server_proxy: on_ping: {}'.format(data))
        self._record_activity()
        if hasattr(self, 'ws'):
            self.ws.protocol.write_ping(data)

    def on_pong(self, data):
        """
        Called when we receive a ping back.
        """
        self.log.debug('jupyter_server_proxy: on_pong: {}'.format(data))

    def on_close(self):
        """
        Called when the client closes our websocket connection.

        We close our connection to the backend too.
        """
        if hasattr(self, 'ws'):
            self.ws.close()

    def _record_activity(self):
        """Record proxied activity as API activity

        avoids proxied traffic being ignored by the notebook's
        internal idle-shutdown mechanism
        """
        self.settings['api_last_activity'] = utcnow()

    def _get_context_path(self, host, port):
        """
        Some applications need to know where they are being proxied from.
        This is either:
        - {base_url}/proxy/{port}
        - {base_url}/proxy/{host}:{port}
        - {base_url}/proxy/absolute/{port}
        - {base_url}/proxy/absolute/{host}:{port}
        - {base_url}/{proxy_base}
        """
        host_and_port = str(port) if host == 'localhost' else host + ":" + str(port)
        if self.proxy_base:
            return url_path_join(self.base_url, self.proxy_base)
        if self.absolute_url:
            return url_path_join(self.base_url, 'proxy', 'absolute', host_and_port)
        else:
            return url_path_join(self.base_url, 'proxy', host_and_port)

    def get_client_uri(self, protocol, host, port, proxied_path):
            context_path = self._get_context_path(host, port)
            client_path = url_path_join(context_path, proxied_path)
            context_path = self._get_context_path(host, port)
        else:
            client_path = proxied_path

        # ensure client_path always starts with '/'
        # ensure client_path always starts with '/'
        if not client_path.startswith("/"):
            client_path = "/" + client_path

        if not client_path.startswith("/"):
            client_path = "/" + client_path

        # Quote spaces, åäö and such, but only enough to send a valid web
        # request onwards. To do this, we mark the RFC 3986 specs' "reserved"
        # and "un-reserved" characters as safe that won't need quoting. The
        # un-reserved need to be marked safe to ensure the quote function behave
        # the same in py36 as py37.
        #
        # ref: https://tools.ietf.org/html/rfc3986#section-2.2
        client_path = quote(client_path, safe=":/?#[]@!$&'()*+,;=-._~")

        client_uri = '{protocol}://{host}:{port}{path}'.format(
            host=host,
            port=port,
            path=client_path,
        )
        if self.request.query:
            path=client_path,
            client_uri += '?' + self.request.query

        return client_uri

    def _build_proxy_request(self, host, port, proxied_path, body):

        headers = self.proxy_request_headers()

        client_uri = self.get_client_uri('http', host, port, proxied_path)
        # Some applications check X-Forwarded-Context and X-ProxyContextPath
        # headers to see if and where they are being proxied from.
        if not self.absolute_url:
            context_path = self._get_context_path(host, port)
            headers['X-Forwarded-Context'] = context_path
            headers['X-ProxyContextPath'] = context_path
            # to be compatible with flask/werkzeug wsgi applications
            headers['X-Forwarded-Prefix'] = context_path

        req = httpclient.HTTPRequest(
            client_uri, method=self.request.method, body=body,
            decompress_response=False,
            headers=headers, **self.proxy_request_options())
        return req

    def _check_host_allowlist(self, host):
        if callable(self.host_allowlist):
            return self.host_allowlist(self, host)
        else:
            return host in self.host_allowlist

    @web.authenticated
    async def proxy(self, host, port, proxied_path):
        '''
        This serverextension handles:
            {base_url}/proxy/{port([0-9]+)}/{proxied_path}
            {base_url}/proxy/absolute/{port([0-9]+)}/{proxied_path}
            {base_url}/{proxy_base}/{proxied_path}
        '''

        if not self._check_host_allowlist(host):
            self.set_status(403)
            self.write("Host '{host}' is not allowed. "
                       "See https://jupyter-server-proxy.readthedocs.io/en/latest/arbitrary-ports-hosts.html for info.".format(host=host))
            return

        if 'Proxy-Connection' in self.request.headers:
            del self.request.headers['Proxy-Connection']

        self._record_activity()

        if self.request.headers.get("Upgrade", "").lower() == 'websocket':
            # We wanna websocket!
            # jupyterhub/jupyter-server-proxy@36b3214
            self.log.info("we wanna websocket, but we don't define WebSocketProxyHandler")
            self.set_status(500)

        body = self.request.body
        if not body:
            if self.request.method == 'POST':
                body = b''
            else:
                body = None

        client = httpclient.AsyncHTTPClient()

        req = self._build_proxy_request(host, port, proxied_path, body)
        self.log.debug(f"Proxying request to {req.url}")

        self.log.debug(f"Proxying request to {req.url}")
        try:
            # Here, "response" is a tornado.httpclient.HTTPResponse object.
        except httpclient.HTTPError as err:
            # We need to capture the timeout error even with raise_error=False,
            # because it only affects the HTTPError raised when a non-200 response
            # code is used, instead of suppressing all errors.
            # Ref: https://www.tornadoweb.org/en/stable/httpclient.html#tornado.httpclient.AsyncHTTPClient.fetch
            # because it only affects the HTTPError raised when a non-200 response
            if err.code == 599:
                self._record_activity()
                self.set_status(599)
                self.write(str(err))
                return
            else:
                raise

        # record activity at start and end of requests
        self._record_activity()

        # For all non http errors...
        if response.error and type(response.error) is not httpclient.HTTPError:
            self.set_status(500)
            self.write(str(response.error))
        else:
            original_response = RewritableResponse(orig_response=response)

            # The function (or list of functions) which should be applied to modify the
            # response.
            rewrite_response = self.rewrite_response


            # If this is a single function, wrap it in a list.
            if isinstance(rewrite_response, (list, tuple)):
                rewrite_responses = rewrite_response
            else:
                rewrite_responses = [rewrite_response]

            # To be passed on-demand as args to the rewrite_response functions.
            optional_args_to_rewrite_function = {
                'request': self.request,
                'orig_response': original_response,
                'host': host,
                'port': port,
                'path': proxied_path
            }

            # Initial value for rewriting
            rewritten_response = original_response

            for rewrite in rewrite_responses:
                # The rewrite function is a function of the RewritableResponse object
                # ``response`` as well as several other optional arguments. We need to
                # convert it to a function of only ``response`` by plugging in the
                # known values for all the other parameters. (This is called partial
                # evaluation.)
                def rewrite_pe(rewritable_response: RewritableResponse):
                    return call_with_asked_args(
                        rewrite,
                        {
                            'response': rewritable_response,
                            **optional_args_to_rewrite_function
                        }
                    )
                # Now we can cleanly apply the partially evaulated function to a copy of
                # the rewritten response.
                rewritten_response = rewritten_response._apply_to_copy(rewrite_pe)

            ## status
            self.set_status(rewritten_response.code, rewritten_response.reason)

            # clear tornado default header
            self._headers = httputil.HTTPHeaders()
            for header, v in rewritten_response.headers.get_all():
                if header not in ('Content-Length', 'Transfer-Encoding',
                                  'Connection'):
                    # some header appear multiple times, eg 'Set-Cookie'
                    self.add_header(header, v)

            if rewritten_response.body:
                self.write(rewritten_response.body)

    async def proxy_open(self, host, port, proxied_path=''):
        """
        Called when a client opens a websocket connection.

        We establish a websocket connection to the proxied backend &
        set up a callback to relay messages through.
        """

        if not self._check_host_allowlist(host):
            self.set_status(403)
            self.log.info("Host '{host}' is not allowed. "
                          "See https://jupyter-server-proxy.readthedocs.io/en/latest/arbitrary-ports-hosts.html for info.".format(host=host))
            self.close()
            return

        if not proxied_path.startswith('/'):
            proxied_path = '/' + proxied_path

        client_uri = self.get_client_uri('ws', host, port, proxied_path)
        headers = self.proxy_request_headers()

        def message_cb(message):
            """
            Callback when the backend sends messages to us

            We just pass it back to the frontend
            """
            # Websockets support both string (utf-8) and binary data, so let's
            # make sure we signal that appropriately when proxying
            self._record_activity()
            if message is None:
                self.close()
            else:
                self.write_message(message, binary=isinstance(message, bytes))

        def ping_cb(data):
            """
            Callback when the backend sends pings to us.

            We just pass it back to the frontend.
            """
            self._record_activity()
            self.ping(data)

        async def start_websocket_connection():
            self.log.info('Trying to establish websocket connection to {}'.format(client_uri))
            self._record_activity()
            request = httpclient.HTTPRequest(url=client_uri, headers=headers)
            self.ws = await pingable_ws_connect(request=request,
                on_message_callback=message_cb, on_ping_callback=ping_cb,
                subprotocols=self.subprotocols)
            self._record_activity()
            self.log.info('Websocket connection established to {}'.format(client_uri))

        # Wait for the WebSocket to be connected before resolving.
        # Otherwise, messages sent by the client before the
        # WebSocket successful connection would be dropped.
        await start_websocket_connection()

    def proxy_request_headers(self):
        '''A dictionary of headers to be used when constructing
        a tornado.httpclient.HTTPRequest instance for the proxy request.'''
        headers = self.request.headers.copy()
        # Merge any manually configured request headers
        headers.update(self.get_request_headers_override())
        return headers

    def get_request_headers_override(self):
        '''Add additional request headers. Typically overridden in subclasses.'''
        return {}

    def proxy_request_options(self):
        '''A dictionary of options to be used when constructing
        a tornado.httpclient.HTTPRequest instance for the proxy request.'''
        return dict(follow_redirects=False, connect_timeout=250.0, request_timeout=300.0)

    def check_xsrf_cookie(self):
        '''
        http://www.tornadoweb.org/en/stable/guide/security.html

        Defer to proxied apps.
        '''
        pass

    def select_subprotocol(self, subprotocols):
        '''Select a single Sec-WebSocket-Protocol during handshake.'''
        self.subprotocols = subprotocols
        if isinstance(subprotocols, list) and subprotocols:
            self.log.debug('Client sent subprotocols: {}'.format(subprotocols))
            return subprotocols[0]
        return super().select_subprotocol(subprotocols)


class LocalProxyHandler(ProxyHandler):
    """
    A tornado request handler that proxies HTTP and websockets
    from a port on the local system. Same as the above ProxyHandler,
    but specific to 'localhost'.

    The arguments "port" and "proxied_path" in each method are extracted from
    the URL as capture groups in the regex specified in the add_handlers
    method.
    """
    async def http_get(self, port, proxied_path):
        return await self.proxy(port, proxied_path)

    async def open(self, port, proxied_path):
        return await self.proxy_open('localhost', port, proxied_path)

    def post(self, port, proxied_path):
        return self.proxy(port, proxied_path)

    def put(self, port, proxied_path):
        return self.proxy(port, proxied_path)

    def delete(self, port, proxied_path):
        return self.proxy(port, proxied_path)

    def head(self, port, proxied_path):
        return self.proxy(port, proxied_path)

    def patch(self, port, proxied_path):
        return self.proxy(port, proxied_path)

    def options(self, port, proxied_path):
        return self.proxy(port, proxied_path)

    def proxy(self, port, proxied_path):
        return super().proxy('localhost', port, proxied_path)

class RemoteProxyHandler(ProxyHandler):
    """
    A tornado request handler that proxies HTTP and websockets
    from a port on a specified remote system.

    The arguments "host", "port" and "proxied_path" in each method are
    extracted from the URL as capture groups in the regex specified in the
    add_handlers method.
    """

    async def http_get(self, host, port, proxied_path):
        return await self.proxy(host, port, proxied_path)

    def post(self, host, port, proxied_path):
        return self.proxy(host, port, proxied_path)

    def put(self, host, port, proxied_path):
        return self.proxy(host, port, proxied_path)

    def delete(self, host, port, proxied_path):
        return self.proxy(host, port, proxied_path)

    def head(self, host, port, proxied_path):
        return self.proxy(host, port, proxied_path)

    def patch(self, host, port, proxied_path):
        return self.proxy(host, port, proxied_path)

    def options(self, host, port, proxied_path):
        return self.proxy(host, port, proxied_path)

    async def open(self, host, port, proxied_path):
        return await self.proxy_open(host, port, proxied_path)

    def proxy(self, host, port, proxied_path):
        return super().proxy(host, port, proxied_path)

# FIXME: Move this to its own file. Too many packages now import this from nbrserverproxy.handlers
class SuperviseAndProxyHandler(LocalProxyHandler):
    '''Manage a given process and requests to it '''

    def __init__(self, *args, **kwargs):
        self.requested_port = 0
        self.mappath = {}
        super().__init__(*args, **kwargs)

    def initialize(self, state):
        self.state = state
        if 'proc_lock' not in state:
            state['proc_lock'] = Lock()

    name = 'process'

    @property
    def port(self):
        """
        Allocate either the requested port or a random empty port for use by
        application
        """
        if 'port' not in self.state:
            sock = socket.socket()
            sock.bind(('', self.requested_port))
            self.state['port'] = sock.getsockname()[1]
            sock.close()
        return self.state['port']

    def get_cwd(self):
        """Get the current working directory for our process

        Override in subclass to launch the process in a directory
        other than the current.
        """
        return os.getcwd()

    def get_env(self):
        '''Set up extra environment variables for process. Typically
           overridden in subclasses.'''
        return {}

    def get_timeout(self):
        """
        Return timeout (in s) to wait before giving up on process readiness
        """
        return 5

    async def _http_ready_func(self, p):
        url = 'http://localhost:{}'.format(self.port)
        async with aiohttp.ClientSession() as session:
            try:
                async with session.get(url, allow_redirects=False) as resp:
                    # We only care if we get back *any* response, not just 200
                    # If there's an error response, that can be shown directly to the user
                    self.log.debug('Got code {} back from {}'.format(resp.status, url))
                    return True
            except aiohttp.ClientConnectionError:
                self.log.debug('Connection to {} refused'.format(url))
                return False

    async def ensure_process(self):
        """
        Start the process
        """
        # We don't want multiple requests trying to start the process at the same time
        # FIXME: Make sure this times out properly?
        # Invariant here should be: when lock isn't being held, either 'proc' is in state &
        # running, or not.
        async with self.state['proc_lock']:
            if 'proc' not in self.state:
                # FIXME: Prevent races here
                # FIXME: Handle graceful exits of spawned processes here
                cmd = self.get_cmd()

                # Set up extra environment variables for process
                server_env = os.environ.copy()
                server_env.update(self.get_env())

                timeout = self.get_timeout()

                proc = SupervisedProcess(self.name, *cmd, env=server_env, ready_func=self._http_ready_func, ready_timeout=timeout, log=self.log)
                self.state['proc'] = proc

                try:
                    await proc.start()

                    is_ready = await proc.ready()

                    if not is_ready:
                        await proc.kill()
                        raise web.HTTPError(500, 'could not start {} in time'.format(self.name))
                except:
                    # Make sure we remove proc from state in any error condition
                    del self.state['proc']
                    raise


    @web.authenticated
    async def proxy(self, port, path):
        if not path.startswith('/'):
            path = '/' + path
        if self.mappath:
            if callable(self.mappath):
                path = call_with_asked_args(self.mappath, {'path': path})
            else:
                path = self.mappath.get(path, path)

        await self.ensure_process()

        return await ensure_async(super().proxy(self.port, path))


    async def http_get(self, path):
        return await ensure_async(self.proxy(self.port, path))

    async def open(self, path):
        await self.ensure_process()
        return await super().open(self.port, path)

    def post(self, path):
        return self.proxy(self.port, path)

    def put(self, path):
        return self.proxy(self.port, path)

    def delete(self, path):
        return self.proxy(self.port, path)

    def head(self, path):
        return self.proxy(self.port, path)

    def patch(self, path):
        return self.proxy(self.port, path)

    def options(self, path):
        return self.proxy(self.port, path)


def setup_handlers(web_app, serverproxy_config):
    host_allowlist = serverproxy_config.host_allowlist
    web_app.add_handlers(
        [
                url_path_join(
                    r"/proxy/([^/:@]+):(\d+)(/.*|)",
                RemoteProxyHandler,
                {
                    "absolute_url": False,
                    "host_allowlist": host_allowlist,
                    "rewrite_response": rewrite_response,
                },
    web_app.add_handlers(
        ".*",
        [
            (
                url_path_join(
                    web_app.settings["base_url"],
                    r"/proxy/([^/:@]+):(\d+)(/.*|)",
                ),
                RemoteProxyHandler,
                {
                    "host_allowlist": host_allowlist,
                },
            (
                    web_app.settings["base_url"],
                ),
                {
                    "host_allowlist": host_allowlist,
                },
            (
                    web_app.settings["base_url"],
                ),
                LocalProxyHandler,
                {
                    "absolute_url": False,
                    "rewrite_response": rewrite_response,
                },
            (
                url_path_join(
                    web_app.settings["base_url"],
                    r"/proxy/absolute/([^/:@]+):(\d+)(/.*|)",
                ),
                RemoteProxyHandler,
                {
                    "host_allowlist": host_allowlist,
                },
            (
                    web_app.settings["base_url"],
                ),
                {
                    "rewrite_response": rewrite_response,
            ),
    )

            (
                url_path_join(
                    web_app.settings["base_url"],
                    r"/proxy/(\d+)(/.*|)",
                ),
                LocalProxyHandler,
                {
                    "absolute_url": False,
                    "rewrite_response": rewrite_response,
                },
            (
                url_path_join(
                    web_app.settings["base_url"],
                    r"/proxy/absolute/(\d+)(/.*|)",
                ),
                LocalProxyHandler,
                {
                    "absolute_url": True,
                    "rewrite_response": rewrite_response,
                },
        ],
    )
