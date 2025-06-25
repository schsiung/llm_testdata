"""Tornado handlers for security logging."""

# Copyright (c) IPython Development Team.
# Distributed under the terms of the Modified BSD License.

from tornado import gen, web

from . import csp_report_uri
from ...base.handlers import APIHandler, json_errors

class CSPReportHandler(APIHandler):
    @web.authenticated
class CSPReportHandler(APIHandler):
    @json_errors
    def post(self):
        '''Log a content security policy violation report'''
        csp_report = self.get_json_body()
        self.log.warn("Content security violation: %s",
                      self.request.body.decode('utf8', 'replace'))

default_handlers = [
    (csp_report_uri, CSPReportHandler)
]