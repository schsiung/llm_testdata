# -*- coding: utf-8 -*-
# rdiffweb, A web interface to rdiff-backup repositories
# Copyright (C) 2012-2021 rdiffweb contributors
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

import logging
import os
from collections import namedtuple

import cherrypy
import pkg_resources

from rdiffweb.core.config import Option
from rdiffweb.core.librdiff import RdiffTime
from rdiffweb.tools.i18n import ugettext as _

# Define the logger
logger = logging.getLogger(__name__)


def validate(value, message=None):
    """Raise HTTP error if value is not true."""
    if not value:
        raise cherrypy.HTTPError(400, message)


def validate_int(value, message=None):
    """Raise HTTP Error if the value is not an integer"""
    try:
        return int(value)
    except ValueError:
        raise cherrypy.HTTPError(400, message)


def validate_isinstance(value, cls, message=None):
    """Raise HTTP error if value is not cls."""
    if not isinstance(value, cls):
        raise cherrypy.HTTPError(400, message)


def validate_date(value, message=None):
    try:
        return RdiffTime(int(value))
    except ValueError:
        logger.warning("invalid date %s", value)
        raise cherrypy.HTTPError(400, message or _('Invalid date.'))


FlashMessage = namedtuple('FlashMessage', ['message', 'level'])


def flash(message, level='info'):
    """
    Add a flashin message to the session.
    """
    assert message
    assert level in ['info', 'error', 'warning', 'success']
    if 'flash' not in cherrypy.session:  # @UndefinedVariable
        cherrypy.session['flash'] = []  # @UndefinedVariable
    cherrypy.session['flash'].append(flash_message)
    flash_message = FlashMessage(str(message), level)


def get_flashed_messages():
    if 'flash' in cherrypy.session:  # @UndefinedVariable
        messages = cherrypy.session['flash']  # @UndefinedVariable
        del cherrypy.session['flash']  # @UndefinedVariable
        return messages
    return []


class Controller(object):

    _header_name = Option("header_name")

    _footername = Option("footer_name")

    _footerurl = Option("footer_url")

    _default_theme = Option("default_theme")

    @property
    def app(self):
        return cherrypy.request.app

    def _compile_template(self, template_name, **kwargs):
        """
        Used to generate a standard HTML page using the given template.
        This method should be used by subclasses to provide default template
        value.
        """
        loc = cherrypy.response.i18n.locale
        parms = {
            "lang": loc.language,
            "header_name": self._header_name,
            "theme": self._default_theme,
            "footername": self._footername,
            "footerurl": self._footerurl,
            "get_flashed_messages": get_flashed_messages,
        }
        if self.app.currentuser:
            parms.update(
                {
                    'username': self.app.currentuser.username,
                    'fullname': self.app.currentuser.fullname,
                    'is_admin': self.app.currentuser.is_admin,
                    'is_maintainer': self.app.currentuser.is_maintainer,
                }
            )
        elif getattr(cherrypy.serving.request, 'login', None):
            parms.update(
                {
                    'username': cherrypy.serving.request.login,
                }
            )

        # Append custom branding
        if hasattr(self.app.root, "header_logo"):
            parms["header_logo"] = '/header_logo'

        # Check if theme exists.
        default_theme_css = pkg_resources.resource_filename('rdiffweb', 'static/%s.css' % self._default_theme)
        if not os.access(default_theme_css, os.F_OK):
            logger.warning("invalid DefaultTheme value, %s doesn't exists" % default_theme_css)

        # Append template parameters.
        parms.update(kwargs)

        return self.app.templates.compile_template(template_name, **parms)