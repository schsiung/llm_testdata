"""Company database model definitions."""

import os
from datetime import datetime

from django.apps import apps
from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator
from django.db import models
from django.db.models import Q, Sum, UniqueConstraint
from django.urls import reverse
from django.utils.translation import gettext_lazy as _

from markdownx.models import MarkdownxField
from moneyed import CURRENCIES
from stdimage.models import StdImageField

import common.models
import common.settings
import InvenTree.validators
from common.settings import currency_code_default
from InvenTree.fields import InvenTreeURLField
from InvenTree.helpers import getBlankImage, getBlankThumbnail, getMediaUrl
from InvenTree.models import InvenTreeAttachment
from InvenTree.status_codes import PurchaseOrderStatus


def rename_company_image(instance, filename):
    """Function to rename a company image after upload.

    Args:
        instance: Company object
        filename: uploaded image filename

    Returns:
        New image filename
    """
    base = 'company_images'

    if filename.count('.') > 0:
        ext = filename.split('.')[-1]
    else:
        ext = ''

    fn = 'company_{pk}_img'.format(pk=instance.pk)

    if ext:
        fn += '.' + ext

    return os.path.join(base, fn)


class Company(models.Model):
    """A Company object represents an external company.

    It may be a supplier or a customer or a manufacturer (or a combination)

    - A supplier is a company from which parts can be purchased
    - A customer is a company to which parts can be sold
    - A manufacturer is a company which manufactures a raw good (they may or may not be a "supplier" also)


    Attributes:
        name: Brief name of the company
        description: Longer form description
        website: URL for the company website
        address: Postal address
        phone: contact phone number
        email: contact email address
        link: Secondary URL e.g. for link to internal Wiki page
        image: Company image / logo
        notes: Extra notes about the company
        is_customer: boolean value, is this company a customer
        is_supplier: boolean value, is this company a supplier
        is_manufacturer: boolean value, is this company a manufacturer
        currency_code: Specifies the default currency for the company
    """

    @staticmethod
    def get_api_url():
        """Return the API URL associated with the Company model"""
        return reverse('api-company-list')

    class Meta:
        """Metaclass defines extra model options"""
        ordering = ['name', ]
        constraints = [
            UniqueConstraint(fields=['name', 'email'], name='unique_name_email_pair')
        ]
        verbose_name_plural = "Companies"

    name = models.CharField(max_length=100, blank=False,
                            help_text=_('Company name'),
                            verbose_name=_('Company name'))

    description = models.CharField(
        max_length=500,
        verbose_name=_('Company description'),
        help_text=_('Description of the company'),
        blank=True,
    )

    website = models.URLField(
        blank=True,
        verbose_name=_('Website'),
        help_text=_('Company website URL')
    )

    address = models.CharField(max_length=200,
                               verbose_name=_('Address'),
                               blank=True, help_text=_('Company address'))

    phone = models.CharField(max_length=50,
                             verbose_name=_('Phone number'),
                             blank=True, help_text=_('Contact phone number'))

    email = models.EmailField(blank=True, null=True,
                              verbose_name=_('Email'), help_text=_('Contact email address'))

    contact = models.CharField(max_length=100,
                               verbose_name=_('Contact'),
                               blank=True, help_text=_('Point of contact'))

    link = InvenTreeURLField(blank=True, verbose_name=_('Link'), help_text=_('Link to external company information'))

    image = StdImageField(
        upload_to=rename_company_image,
        null=True,
        blank=True,
        variations={
            'thumbnail': (128, 128),
            'preview': (256, 256),
        },
        delete_orphans=True,
        verbose_name=_('Image'),
    )

    notes = MarkdownxField(blank=True, verbose_name=_('Notes'))

    is_customer = models.BooleanField(default=False, verbose_name=_('is customer'), help_text=_('Do you sell items to this company?'))

    is_supplier = models.BooleanField(default=True, verbose_name=_('is supplier'), help_text=_('Do you purchase items from this company?'))

    is_manufacturer = models.BooleanField(default=False, verbose_name=_('is manufacturer'), help_text=_('Does this company manufacture parts?'))

    currency = models.CharField(
        max_length=3,
        verbose_name=_('Currency'),
        blank=True,
        default=currency_code_default,
        help_text=_('Default currency used for this company'),
        validators=[InvenTree.validators.validate_currency_code],
    )

    @property
    def currency_code(self):
        """Return the currency code associated with this company.

        - If the currency code is invalid, use the default currency
        - If the currency code is not specified, use the default currency
        """
        code = self.currency

        if code not in CURRENCIES:
            code = common.settings.currency_code_default()

        return code

    def __str__(self):
        """Get string representation of a Company."""
        return "{n} - {d}".format(n=self.name, d=self.description)

    def get_absolute_url(self):
        """Get the web URL for the detail view for this Company."""
        return reverse('company-detail', kwargs={'pk': self.id})

    def get_image_url(self):
        """Return the URL of the image for this company."""
        if self.image:
            return getMediaUrl(self.image.url)
        else:
            return getBlankImage()

    def get_thumbnail_url(self):
        """Return the URL for the thumbnail image for this Company."""
        if self.image:
            return getMediaUrl(self.image.thumbnail.url)
        else:
            return getBlankThumbnail()

    @property
    def parts(self):
        """Return SupplierPart objects which are supplied or manufactured by this company."""
        return SupplierPart.objects.filter(Q(supplier=self.id) | Q(manufacturer_part__manufacturer=self.id))

    @property
    def stock_items(self):
        """Return a list of all stock items supplied or manufactured by this company."""
        stock = apps.get_model('stock', 'StockItem')
        return stock.objects.filter(Q(supplier_part__supplier=self.id) | Q(supplier_part__manufacturer_part__manufacturer=self.id)).all()


class Contact(models.Model):
    """A Contact represents a person who works at a particular company. A Company may have zero or more associated Contact objects.

    Attributes:
        company: Company link for this contact
        name: Name of the contact
        phone: contact phone number
        email: contact email
        role: position in company
    """

    company = models.ForeignKey(Company, related_name='contacts',
                                on_delete=models.CASCADE)

    name = models.CharField(max_length=100)

    phone = models.CharField(max_length=100, blank=True)

    email = models.EmailField(blank=True)

    role = models.CharField(max_length=100, blank=True)


class ManufacturerPart(models.Model):
    """Represents a unique part as provided by a Manufacturer Each ManufacturerPart is identified by a MPN (Manufacturer Part Number) Each ManufacturerPart is also linked to a Part object. A Part may be available from multiple manufacturers.

    Attributes:
        part: Link to the master Part
        manufacturer: Company that manufactures the ManufacturerPart
        MPN: Manufacture part number
        link: Link to external website for this manufacturer part
        description: Descriptive notes field
    """

    @staticmethod
    def get_api_url():
        """Return the API URL associated with the ManufacturerPart instance"""
        return reverse('api-manufacturer-part-list')

    class Meta:
        """Metaclass defines extra model options"""
        unique_together = ('part', 'manufacturer', 'MPN')

    part = models.ForeignKey('part.Part', on_delete=models.CASCADE,
                             related_name='manufacturer_parts',
                             verbose_name=_('Base Part'),
                             limit_choices_to={
                                 'purchaseable': True,
                             },
                             help_text=_('Select part'),
                             )

    manufacturer = models.ForeignKey(
        Company,
        on_delete=models.CASCADE,
        null=True,
        related_name='manufactured_parts',
        limit_choices_to={
            'is_manufacturer': True
        },
        verbose_name=_('Manufacturer'),
        help_text=_('Select manufacturer'),
    )

    MPN = models.CharField(
        null=True,
        max_length=100,
        verbose_name=_('MPN'),
        help_text=_('Manufacturer Part Number')
    )

    link = InvenTreeURLField(
        blank=True, null=True,
        verbose_name=_('Link'),
        help_text=_('URL for external manufacturer part link')
    )

    description = models.CharField(
        max_length=250, blank=True, null=True,
        verbose_name=_('Description'),
        help_text=_('Manufacturer part description')
    )

    @classmethod
    def create(cls, part, manufacturer, mpn, description, link=None):
        """Check if ManufacturerPart instance does not already exist then create it."""
        manufacturer_part = None

        try:
            manufacturer_part = ManufacturerPart.objects.get(part=part, manufacturer=manufacturer, MPN=mpn)
        except ManufacturerPart.DoesNotExist:
            pass

        if not manufacturer_part:
            manufacturer_part = ManufacturerPart(part=part, manufacturer=manufacturer, MPN=mpn, description=description, link=link)
            manufacturer_part.save()

        return manufacturer_part

    def __str__(self):
        """Format a string representation of a ManufacturerPart"""
        s = ''

        if self.manufacturer:
            s += f'{self.manufacturer.name}'
            s += ' | '

        s += f'{self.MPN}'

        return s


class ManufacturerPartAttachment(InvenTreeAttachment):
    """Model for storing file attachments against a ManufacturerPart object."""

    @staticmethod
    def get_api_url():
        """Return the API URL associated with the ManufacturerPartAttachment model"""
        return reverse('api-manufacturer-part-attachment-list')

    def getSubdir(self):
        """Return the subdirectory where attachment files for the ManufacturerPart model are located"""
        return os.path.join("manufacturer_part_files", str(self.manufacturer_part.id))

    manufacturer_part = models.ForeignKey(ManufacturerPart, on_delete=models.CASCADE,
                                          verbose_name=_('Manufacturer Part'), related_name='attachments')


class ManufacturerPartParameter(models.Model):
    """A ManufacturerPartParameter represents a key:value parameter for a MnaufacturerPart.

    This is used to represent parmeters / properties for a particular manufacturer part.

    Each parameter is a simple string (text) value.
    """

    @staticmethod
    def get_api_url():
        """Return the API URL associated with the ManufacturerPartParameter model"""
        return reverse('api-manufacturer-part-parameter-list')

    class Meta:
        """Metaclass defines extra model options"""
        unique_together = ('manufacturer_part', 'name')

    manufacturer_part = models.ForeignKey(
        ManufacturerPart,
        on_delete=models.CASCADE,
        related_name='parameters',
        verbose_name=_('Manufacturer Part'),
    )

    name = models.CharField(
        max_length=500,
        blank=False,
        verbose_name=_('Name'),
        help_text=_('Parameter name')
    )

    value = models.CharField(
        max_length=500,
        blank=False,
        verbose_name=_('Value'),
        help_text=_('Parameter value')
    )

    units = models.CharField(
        max_length=64,
        blank=True, null=True,
        verbose_name=_('Units'),
        help_text=_('Parameter units')
    )


class SupplierPartManager(models.Manager):
    """Define custom SupplierPart objects manager.

    The main purpose of this manager is to improve database hit as the
    SupplierPart model involves A LOT of foreign keys lookups
    """

    def get_queryset(self):
        """Prefetch related fields when querying against the SupplierPart model"""
        # Always prefetch related models
        return super().get_queryset().prefetch_related(
            'part',
            'supplier',
            'manufacturer_part__manufacturer',
        )


class SupplierPart(models.Model):
    """Represents a unique part as provided by a Supplier Each SupplierPart is identified by a SKU (Supplier Part Number) Each SupplierPart is also linked to a Part or ManufacturerPart object. A Part may be available from multiple suppliers.

    Attributes:
        part: Link to the master Part (Obsolete)
        source_item: The sourcing item linked to this SupplierPart instance
        supplier: Company that supplies this SupplierPart object
        SKU: Stock keeping unit (supplier part number)
        link: Link to external website for this supplier part
        description: Descriptive notes field
        note: Longer form note field
        base_cost: Base charge added to order independent of quantity e.g. "Reeling Fee"
        multiple: Multiple that the part is provided in
        lead_time: Supplier lead time
        packaging: packaging that the part is supplied in, e.g. "Reel"
    """

    objects = SupplierPartManager()

    @staticmethod
    def get_api_url():
        """Return the API URL associated with the SupplierPart model"""
        return reverse('api-supplier-part-list')

    def get_absolute_url(self):
        """Return the web URL of the detail view for this SupplierPart"""
        return reverse('supplier-part-detail', kwargs={'pk': self.id})

    def api_instance_filters(self):
        """Return custom API filters for this particular instance"""
        return {
            'manufacturer_part': {
                'part': self.part.pk
            }
        }

    class Meta:
        """Metaclass defines extra model options"""
        unique_together = ('part', 'supplier', 'SKU')

        # This model was moved from the 'Part' app
        db_table = 'part_supplierpart'

    def clean(self):
        """Custom clean action for the SupplierPart model:

        - Ensure that manufacturer_part.part and part are the same!
        """
        super().clean()

        # Ensure that the linked manufacturer_part points to the same part!
        if self.manufacturer_part and self.part:

            if self.manufacturer_part.part != self.part:
                raise ValidationError({
                    'manufacturer_part': _("Linked manufacturer part must reference the same base part"),
                })

    def save(self, *args, **kwargs):
        """Overriding save method to connect an existing ManufacturerPart."""
        manufacturer_part = None

        if all(key in kwargs for key in ('manufacturer', 'MPN')):
            manufacturer_name = kwargs.pop('manufacturer')
            MPN = kwargs.pop('MPN')

            # Retrieve manufacturer part
            try:
                manufacturer_part = ManufacturerPart.objects.get(manufacturer__name=manufacturer_name, MPN=MPN)
            except (ValueError, Company.DoesNotExist):
                # ManufacturerPart does not exist
                pass

        if manufacturer_part:
            if not self.manufacturer_part:
                # Connect ManufacturerPart to SupplierPart
                self.manufacturer_part = manufacturer_part
            else:
                raise ValidationError(f'SupplierPart {self.__str__} is already linked to {self.manufacturer_part}')

        self.clean()
        self.validate_unique()

        super().save(*args, **kwargs)

    part = models.ForeignKey('part.Part', on_delete=models.CASCADE,
                             related_name='supplier_parts',
                             verbose_name=_('Base Part'),
                             limit_choices_to={
                                 'purchaseable': True,
                             },
                             help_text=_('Select part'),
                             )

    supplier = models.ForeignKey(Company, on_delete=models.CASCADE,
                                 related_name='supplied_parts',
                                 limit_choices_to={'is_supplier': True},
                                 verbose_name=_('Supplier'),
                                 help_text=_('Select supplier'),
                                 )

    SKU = models.CharField(
        max_length=100,
        verbose_name=_('SKU'),
        help_text=_('Supplier stock keeping unit')
    )

    manufacturer_part = models.ForeignKey(ManufacturerPart, on_delete=models.CASCADE,
                                          blank=True, null=True,
                                          related_name='supplier_parts',
                                          verbose_name=_('Manufacturer Part'),
                                          help_text=_('Select manufacturer part'),
                                          )

    link = InvenTreeURLField(
        blank=True, null=True,
        verbose_name=_('Link'),
        help_text=_('URL for external supplier part link')
    )

    description = models.CharField(
        max_length=250, blank=True, null=True,
        verbose_name=_('Description'),
        help_text=_('Supplier part description')
    )

    note = models.CharField(
        max_length=100, blank=True, null=True,
        verbose_name=_('Note'),
        help_text=_('Notes')
    )

    base_cost = models.DecimalField(max_digits=10, decimal_places=3, default=0, validators=[MinValueValidator(0)], verbose_name=_('base cost'), help_text=_('Minimum charge (e.g. stocking fee)'))

    packaging = models.CharField(max_length=50, blank=True, null=True, verbose_name=_('Packaging'), help_text=_('Part packaging'))

    multiple = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1)], verbose_name=_('multiple'), help_text=_('Order multiple'))

    # TODO - Reimplement lead-time as a charfield with special validation (pattern matching).
    # lead_time = models.DurationField(blank=True, null=True)

    available = models.DecimalField(
        max_digits=10, decimal_places=3, default=0,
        validators=[MinValueValidator(0)],
        verbose_name=_('Available'),
        help_text=_('Quantity available from supplier'),
    )

    availability_updated = models.DateTimeField(
        null=True, blank=True, verbose_name=_('Availability Updated'),
        help_text=_('Date of last update of availability data'),
    )

    def update_available_quantity(self, quantity):
        """Update the available quantity for this SupplierPart"""

        self.available = quantity
        self.availability_updated = datetime.now()
        self.save()

    @property
    def manufacturer_string(self):
        """Format a MPN string for this SupplierPart.

        Concatenates manufacture name and part number.
        """
        items = []

        if self.manufacturer_part:
            if self.manufacturer_part.manufacturer:
                items.append(self.manufacturer_part.manufacturer.name)
            if self.manufacturer_part.MPN:
                items.append(self.manufacturer_part.MPN)

        return ' | '.join(items)

    @property
    def has_price_breaks(self):
        """Return True if this SupplierPart has associated price breaks"""
        return self.price_breaks.count() > 0

    @property
    def price_breaks(self):
        """Return the associated price breaks in the correct order."""
        return self.pricebreaks.order_by('quantity').all()

    @property
    def unit_pricing(self):
        """Return the single-quantity pricing for this SupplierPart"""
        return self.get_price(1)

    def add_price_break(self, quantity, price) -> None:
        """Create a new price break for this part.

        Args:
            quantity: Numerical quantity
            price: Must be a Money object
        """
        # Check if a price break at that quantity already exists...
        if self.price_breaks.filter(quantity=quantity, part=self.pk).exists():
            return

        SupplierPriceBreak.objects.create(
            part=self,
            quantity=quantity,
            price=price
        )

    get_price = common.models.get_price

    def open_orders(self):
        """Return a database query for PurchaseOrder line items for this SupplierPart, limited to purchase orders that are open / outstanding."""
        return self.purchase_order_line_items.prefetch_related('order').filter(order__status__in=PurchaseOrderStatus.OPEN)

    def on_order(self):
        """Return the total quantity of items currently on order.

        Subtract partially received stock as appropriate
        """
        totals = self.open_orders().aggregate(Sum('quantity'), Sum('received'))

        # Quantity on order
        q = totals.get('quantity__sum', 0)

        # Quantity received
        r = totals.get('received__sum', 0)

        if q is None or r is None:
            return 0
        else:
            return max(q - r, 0)

    def purchase_orders(self):
        """Returns a list of purchase orders relating to this supplier part."""
        return [line.order for line in self.purchase_order_line_items.all().prefetch_related('order')]

    @property
    def pretty_name(self):
        """Format a 'pretty' name for this SupplierPart"""
        return str(self)

    def __str__(self):
        """Format a string representation of a SupplierPart"""
        s = ''

        if self.part.IPN:
            s += f'{self.part.IPN}'
            s += ' | '

        s += f'{self.supplier.name} | {self.SKU}'

        if self.manufacturer_string:
            s = s + ' | ' + self.manufacturer_string

        return s


class SupplierPriceBreak(common.models.PriceBreak):
    """Represents a quantity price break for a SupplierPart.

    - Suppliers can offer discounts at larger quantities
    - SupplierPart(s) may have zero-or-more associated SupplierPriceBreak(s)

    Attributes:
        part: Link to a SupplierPart object that this price break applies to
        updated: Automatic DateTime field that shows last time the price break was updated
        quantity: Quantity required for price break
        cost: Cost at specified quantity
        currency: Reference to the currency of this pricebreak (leave empty for base currency)
    """

    @staticmethod
    def get_api_url():
        """Return the API URL associated with the SupplierPriceBreak model"""
        return reverse('api-part-supplier-price-list')

    part = models.ForeignKey(SupplierPart, on_delete=models.CASCADE, related_name='pricebreaks', verbose_name=_('Part'),)

    updated = models.DateTimeField(auto_now=True, null=True, verbose_name=_('last updated'))

    class Meta:
        """Metaclass defines extra model options"""
        unique_together = ("part", "quantity")

        # This model was moved from the 'Part' app
        db_table = 'part_supplierpricebreak'

    def __str__(self):
        """Format a string representation of a SupplierPriceBreak instance"""
        return f'{self.part.SKU} - {self.price} @ {self.quantity}'
