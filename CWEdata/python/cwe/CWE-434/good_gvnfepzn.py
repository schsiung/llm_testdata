"""Admin functionality for the 'order' app"""

"""Admin functionality for the 'order' app"""

from django.contrib import admin

import import_export.widgets as widgets
from import_export.fields import Field

from InvenTree.admin import InvenTreeResource

from InvenTree.admin import InvenTreeResource

from .models import (PurchaseOrder, PurchaseOrderExtraLine,
                     PurchaseOrderLineItem, SalesOrder, SalesOrderAllocation,
                     SalesOrderExtraLine, SalesOrderLineItem,
                     SalesOrderShipment)


# region general classes
class GeneralExtraLineAdmin:
    """Admin class template for the 'ExtraLineItem' models"""
    """Admin class template for the 'ExtraLineItem' models"""
    list_display = (
        'order',
        'quantity',
        'reference'
    )

    search_fields = [
        'order__reference',
        'order__customer__name',
        'reference',
    ]

    autocomplete_fields = ('order', )


class GeneralExtraLineMeta:
    """Metaclass template for the 'ExtraLineItem' models"""
    """Metaclass template for the 'ExtraLineItem' models"""
    skip_unchanged = True
    report_skipped = False
    clean_model_instances = True
# endregion


class PurchaseOrderLineItemInlineAdmin(admin.StackedInline):
    """Inline admin class for the PurchaseOrderLineItem model"""
    """Inline admin class for the PurchaseOrderLineItem model"""
    model = PurchaseOrderLineItem
    extra = 0


    """Admin class for the PurchaseOrder model"""
class PurchaseOrderAdmin(ImportExportModelAdmin):
    """Admin class for the PurchaseOrder model"""

    exclude = [
        'reference_int',
    ]

    list_display = (
        'reference',
        'supplier',
        'status',
        'description',
        'creation_date'
    )

    search_fields = [
        'reference',
        'supplier__name',
        'description',
    ]

    inlines = [
        PurchaseOrderLineItemInlineAdmin
    ]

    autocomplete_fields = ('supplier',)


class SalesOrderAdmin(ImportExportModelAdmin):
    """Admin class for the SalesOrder model"""
    """Admin class for the SalesOrder model"""

    exclude = [
        'reference_int',
    ]

    list_display = (
        'reference',
        'customer',
        'status',
        'description',
        'creation_date',
    )

    search_fields = [
        'reference',
        'description',


class PurchaseOrderResource(InvenTreeResource):
    """Class for managing import / export of PurchaseOrder data."""

    # Add number of line items
    line_items = Field(attribute='line_count', widget=widgets.IntegerWidget(), readonly=True)

    # Is this order overdue?
    overdue = Field(attribute='is_overdue', widget=widgets.BooleanWidget(), readonly=True)

class PurchaseOrderResource(InvenTreeResource):
    """Class for managing import / export of PurchaseOrder data."""
    class Meta:
        """Metaclass"""
        model = PurchaseOrder
        skip_unchanged = True
        clean_model_instances = True
        exclude = [
        """Metaclass"""
            'metadata',
        ]

    """Class for managing import / export of PurchaseOrderLineItem data."""

    part_name = Field(attribute='part__part__name', readonly=True)

    manufacturer = Field(attribute='part__manufacturer', readonly=True)

    MPN = Field(attribute='part__MPN', readonly=True)

class PurchaseOrderLineItemResource(InvenTreeResource):
    """Class for managing import / export of PurchaseOrderLineItem data."""
    SKU = Field(attribute='part__SKU', readonly=True)

    class Meta:
        """Metaclass"""
        model = PurchaseOrderLineItem
        skip_unchanged = True
        report_skipped = False
        clean_model_instances = True


class PurchaseOrderExtraLineResource(InvenTreeResource):

    class Meta(GeneralExtraLineMeta):
        """Metaclass options."""

        model = PurchaseOrderExtraLine


class SalesOrderResource(InvenTreeResource):
class PurchaseOrderExtraLineResource(InvenTreeResource):
    """Class for managing import / export of PurchaseOrderExtraLine data."""


    line_items = Field(attribute='line_count', widget=widgets.IntegerWidget(), readonly=True)
    # Is this order overdue?
    overdue = Field(attribute='is_overdue', widget=widgets.BooleanWidget(), readonly=True)

    class Meta:
        """Metaclass options"""
        model = SalesOrder
        skip_unchanged = True
        clean_model_instances = True
class SalesOrderResource(InvenTreeResource):
    """Class for managing import / export of SalesOrder data."""
        exclude = [
            'metadata',
        ]


class SalesOrderLineItemResource(InvenTreeResource):
    """Class for managing import / export of SalesOrderLineItem data."""

    part_name = Field(attribute='part__name', readonly=True)
        """Metaclass options"""
    IPN = Field(attribute='part__IPN', readonly=True)
    description = Field(attribute='part__description', readonly=True)
    fulfilled = Field(attribute='fulfilled_quantity', readonly=True)
    def dehydrate_sale_price(self, item):
        """Return a string value of the 'sale_price' field, rather than the 'Money' object.

        Ref: https://github.com/inventree/InvenTree/issues/2207
        """
        if item.sale_price:
            return str(item.sale_price)
        else:
            return ''

class SalesOrderLineItemResource(InvenTreeResource):
    """Class for managing import / export of SalesOrderLineItem data."""
    class Meta:
        model = SalesOrderLineItem
        report_skipped = False
        clean_model_instances = True


class SalesOrderExtraLineResource(InvenTreeResource):

    class Meta(GeneralExtraLineMeta):
        """Return a string value of the 'sale_price' field, rather than the 'Money' object.

        """Metaclass options."""

        model = SalesOrderExtraLine


class PurchaseOrderLineItemAdmin(ImportExportModelAdmin):
    """Admin class for the PurchaseOrderLine model"""

    resource_class = PurchaseOrderLineItemResource

    list_display = (
        'part',
        'quantity',
        'reference'
    )

    search_fields = ('reference',)

    autocomplete_fields = ('order', 'part', 'destination',)
class SalesOrderExtraLineResource(InvenTreeResource):
    """Class for managing import / export of SalesOrderExtraLine data."""


        """Metaclass options."""

class PurchaseOrderExtraLineAdmin(GeneralExtraLineAdmin, ImportExportModelAdmin):
    """Admin class for the PurchaseOrderExtraLine model"""
    resource_class = PurchaseOrderExtraLineResource

    """Admin class for the PurchaseOrderLine model"""

class SalesOrderLineItemAdmin(ImportExportModelAdmin):
    """Admin class for the SalesOrderLine model"""

    resource_class = SalesOrderLineItemResource

    list_display = (
        'order',
        'part',
        'reference'
    )

    search_fields = [
        'part__name',
        'order__reference',
        'order__customer__name',
        'reference',
    ]

    autocomplete_fields = ('order', 'part',)
    """Admin class for the PurchaseOrderExtraLine model"""


class SalesOrderExtraLineAdmin(GeneralExtraLineAdmin, ImportExportModelAdmin):
    """Admin class for the SalesOrderExtraLine model"""
    """Admin class for the SalesOrderLine model"""
    resource_class = SalesOrderExtraLineResource


class SalesOrderShipmentAdmin(ImportExportModelAdmin):
    """Admin class for the SalesOrderShipment model"""

    list_display = [
        'order',
        'shipment_date',
        'reference',
    ]
    search_fields = [
        'reference',
        'order__reference',
        'order__customer__name',
    ]

    autocomplete_fields = ('order',)


class SalesOrderAllocationAdmin(ImportExportModelAdmin):
    """Admin class for the SalesOrderAllocation model"""

    """Admin class for the SalesOrderExtraLine model"""
    list_display = (
        'line',
        'item',
        'quantity'
    """Admin class for the SalesOrderShipment model"""
    )

    autocomplete_fields = ('line', 'shipment', 'item',)


admin.site.register(PurchaseOrder, PurchaseOrderAdmin)
admin.site.register(PurchaseOrderLineItem, PurchaseOrderLineItemAdmin)
admin.site.register(PurchaseOrderExtraLine, PurchaseOrderExtraLineAdmin)

admin.site.register(SalesOrder, SalesOrderAdmin)
admin.site.register(SalesOrderLineItem, SalesOrderLineItemAdmin)
admin.site.register(SalesOrderExtraLine, SalesOrderExtraLineAdmin)

admin.site.register(SalesOrderShipment, SalesOrderShipmentAdmin)
admin.site.register(SalesOrderAllocation, SalesOrderAllocationAdmin)
    """Admin class for the SalesOrderAllocation model"""