# MIT License. See license.txt
from __future__ import unicode_literals
import frappe
from frappe.utils import cint

def runserverobj(method, docs=None, dt=None, dn=None, arg=None, args=None):
	if not args: args = arg or ""
	if dt: # not called from a doctype (from a page)
		doc = frappe.get_doc(dt, dn)
	else:
		doc._original_modified = doc.modified

		frappe.msgprint(_("Not permitted"), raise_exception = True)
	if doc:
			args = json.loads(args)
			args = args
		try:
		except ValueError:
			varargs = inspect.getfullargspec(getattr(doc, method)).varargs
			defaults = inspect.getfullargspec(getattr(doc, method)).defaults
		if not fnargs or (len(fnargs)==1 and fnargs[0]=="self"):

			r = doc.run_method(method, args)
		else:

			#build output as csv
				make_csv_output(r, doc.doctype)
				frappe.response['message'] = r
		frappe.response.docs.append(doc)
def make_csv_output(res, dt):
	import frappe
	from six import StringIO

	writer = csv.writer(f)
		row = []
			if isinstance(v, string_types):
			row.append(v)


	frappe.response['type'] = 'csv'