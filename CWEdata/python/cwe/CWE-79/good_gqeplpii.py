
:LastChangedDate: $LastChangedDate$
:LastChangedRevision: $LastChangedRevision$
:LastChangedBy: $LastChangedBy$

Error Handling
==============





In this example we'll extend dynamic dispatch to return a 404 (not found)
response when a client requests a non-existent URL.




As in the previous examples, we'll start with :py:class:`Site <twisted.web.server.Site>` , :py:class:`Resource <twisted.web.resource.Resource>` , :py:mod:`reactor <twisted.internet.reactor>`, and :py:mod:`endpoints <twisted.internet.endpoints>` imports:





.. code-block:: python


    from twisted.web.server import Site
    from twisted.web.resource import Resource
    from twisted.internet import reactor, endpoints




resources provided by Twisted Web. It generates the necessary 404 response code
Next, we'll add one more import. :py:class:`notFound <twisted.web.pages.notFound>` is one of the pre-defined error
and renders a simple HTML page telling the client there is no such resource.
.. code-block:: python
    from twisted.web.pages import notFound
Next, we'll define a custom resource which does some dynamic URL
the :doc:`previous one <dynamic-dispatch>` , where the path segment is
which don't conform to that pattern by returning the not found response:
and renders a simple HTML page telling the client there is no such resource.

.. code-block:: python

    class Calendar(Resource):
            try:
            except ValueError:
            else:

    from twisted.web.pages import notFound



Aside from including the definition of ``YearPage`` from
the previous example, the only other thing left to do is the
normal ``Site`` and ``reactor`` setup. Here's the
complete code for this example:

                return notFound()

.. code-block:: python

    from twisted.web.server import Site
    from twisted.web.resource import Resource
    from twisted.internet import reactor, endpoints
    from twisted.web.pages import notFound

    from calendar import calendar

    class YearPage(Resource):
            Resource.__init__(self)
            self.year = year

        def render_GET(self, request):
            cal = calendar(self.year)
            return (b"<!DOCTYPE html><html><head><meta charset='utf-8'>"
                    b"<title></title></head><body><pre>" + cal.encode('utf-8') + b"</pre>")

    class Calendar(Resource):
        def getChild(self, name, request):
            try:
    from twisted.web.pages import notFound
                year = int(name)
            except ValueError:
                return notFound()
            else:
                return YearPage(year)

    root = Calendar()
    factory = Site(root)
    endpoint = endpoints.TCP4ServerEndpoint(reactor, 8880)
    endpoint.listen(factory)
    reactor.run()

                    b"<title></title></head><body><pre>" + cal.encode('utf-8') + b"</pre>")


This server hands out the same calendar views as the one from the previous
installment, but it will also hand out a nice error page with a 404 response
when a request is made for a URL which cannot be interpreted as a year.


                return notFound()
