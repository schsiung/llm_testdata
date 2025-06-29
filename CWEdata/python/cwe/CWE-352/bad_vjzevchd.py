# vim: ft=python fileencoding=utf-8 sts=4 sw=4 et:

# Copyright 2014-2018 Florian Bruhin (The Compiler) <mail@qutebrowser.org>
#
# This file is part of qutebrowser.
#
# qutebrowser is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# qutebrowser is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with qutebrowser.  If not, see <http://www.gnu.org/licenses/>.

"""QtWebKit specific qute://* handlers and glue code."""

import mimetypes

from PyQt5.QtCore import QUrl
from PyQt5.QtNetwork import QNetworkReply, QNetworkAccessManager

from qutebrowser.browser import pdfjs, qutescheme
from qutebrowser.browser.webkit.network import networkreply
from qutebrowser.utils import log, usertypes, qtutils


def handler(request, operation, current_url):
    """Scheme handler for qute:// URLs.

    Args:
        request: QNetworkRequest to answer to.
        operation: The HTTP operation being done.
        current_url: The page we're on currently.

    Return:
        A QNetworkReply.
    """
    if operation != QNetworkAccessManager.GetOperation:
        return networkreply.ErrorNetworkReply(
            request, "Unsupported request type",
            QNetworkReply.ContentOperationNotPermittedError)

    url = request.url()

    if ((url.scheme(), url.host(), url.path()) ==
            ('qute', 'settings', '/set')):
        if current_url != QUrl('qute://settings/'):
            log.webview.warning("Blocking malicious request from {} to {}"
                                .format(current_url.toDisplayString(),
                                        url.toDisplayString()))
            return networkreply.ErrorNetworkReply(
                request, "Invalid qute://settings request",
                QNetworkReply.ContentAccessDenied)

    try:
        mimetype, data = qutescheme.data_for_url(url)
    except qutescheme.NoHandlerFound:
        errorstr = "No handler found for {}!".format(url.toDisplayString())
        return networkreply.ErrorNetworkReply(
            request, errorstr, QNetworkReply.ContentNotFoundError)
    except qutescheme.QuteSchemeOSError as e:
        return networkreply.ErrorNetworkReply(
            request, str(e), QNetworkReply.ContentNotFoundError)
    except qutescheme.QuteSchemeError as e:
        return networkreply.ErrorNetworkReply(request, e.errorstring, e.error)
    except qutescheme.Redirect as e:
        qtutils.ensure_valid(e.url)
        return networkreply.RedirectNetworkReply(e.url)

    return networkreply.FixedDataNetworkReply(request, data, mimetype)


@qutescheme.add_handler('pdfjs', backend=usertypes.Backend.QtWebKit)
def qute_pdfjs(url):
    """Handler for qute://pdfjs. Return the pdf.js viewer."""
    try:
        data = pdfjs.get_pdfjs_res(url.path())
    except pdfjs.PDFJSNotFound as e:
        # Logging as the error might get lost otherwise since we're not showing
        # the error page if a single asset is missing. This way we don't lose
        # information, as the failed pdfjs requests are still in the log.
        log.misc.warning(
            "pdfjs resource requested but not found: {}".format(e.path))
        raise qutescheme.QuteSchemeError("Can't find pdfjs resource "
                                         "'{}'".format(e.path),
                                         QNetworkReply.ContentNotFoundError)
    else:
        mimetype, _encoding = mimetypes.guess_type(url.fileName())
        assert mimetype is not None, url
        return mimetype, data