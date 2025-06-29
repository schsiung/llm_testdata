import threading

from collections import defaultdict
from http import HTTPStatus
from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import urlparse

import pytest


class TestHandler(BaseHTTPRequestHandler):
    handlers = defaultdict(dict)

    @classmethod
    def handler(cls, method, path):
        def inner(func):
            cls.handlers[method][path] = func
            return func
        return inner

    def do_generic(self):
        parse_result = urlparse(self.path)
        func = self.handlers[self.command].get(parse_result.path)
        if func is None:
            return self.send_error(HTTPStatus.NOT_FOUND)

        return func(self)

    do_GET = do_generic
    do_POST = do_generic


@TestHandler.handler('GET', '/headers')
def get_headers(handler):
    handler.send_response(200)
    for key, value in handler.headers.items():
        handler.send_header(key, value)
    handler.send_header('Content-Length', 0)
    handler.end_headers()


@TestHandler.handler('GET', '/drip')
def chunked_drip(handler):
    handler.send_response(200)
    accept = handler.headers.get('Accept')
    if accept is not None:
        handler.send_header('Content-Type', accept)
    handler.send_header('Transfer-Encoding', 'chunked')
    handler.end_headers()

    for _ in range(3):
        body = 'test\n'
        handler.wfile.write(f'{len(body):X}\r\n{body}\r\n'.encode('utf-8'))

    handler.wfile.write('0\r\n\r\n'.encode('utf-8'))


@TestHandler.handler('GET', '/stream/encoding/random')
def random_encoding(handler):
    from tests.fixtures import ASCII_FILE_CONTENT, FILE_CONTENT as UNICODE_FILE_CONTENT

    handler.send_response(200)
    handler.send_header('Transfer-Encoding', 'chunked')
    handler.end_headers()

    for body in [
        ASCII_FILE_CONTENT,
        ASCII_FILE_CONTENT,
        UNICODE_FILE_CONTENT,
        UNICODE_FILE_CONTENT,
        UNICODE_FILE_CONTENT,
    ]:
        body += "\n"
        handler.wfile.write(f'{len(body.encode()):X}\r\n{body}\r\n'.encode())

    handler.wfile.write('0\r\n\r\n'.encode('utf-8'))


@TestHandler.handler('POST', '/status/msg')
def status_custom_msg(handler):
    content_len = int(handler.headers.get('content-length', 0))
    post_body = handler.rfile.read(content_len).decode()

    handler.send_response(200, post_body)
    handler.end_headers()


@TestHandler.handler('GET', '/cookies/set-and-redirect')
def set_cookie_and_redirect(handler):
    handler.send_response(302)

    redirect_to = handler.headers.get('X-Redirect-To', '/headers')
    handler.send_header('Location', redirect_to)

    raw_cookies = handler.headers.get('X-Cookies', 'a=b')
    for cookie in raw_cookies.split(', '):
        handler.send_header('Set-Cookie', cookie)
    handler.end_headers()


@pytest.fixture(scope="function")
def http_server():
    """A custom HTTP server implementation for our tests, that is
    built on top of the http.server module. Handy when we need to
    deal with details which httpbin can not capture."""

    server = HTTPServer(('localhost', 0), TestHandler)
    thread = threading.Thread(target=server.serve_forever)
    thread.start()
    yield '{}:{}'.format(*server.socket.getsockname())
    server.shutdown()
    thread.join(timeout=0.5)