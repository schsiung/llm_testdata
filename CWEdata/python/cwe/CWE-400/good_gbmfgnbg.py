# Generated by Django 3.0.5 on 2020-04-26 06:02

import InvenTree.fields
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0030_auto_20200426_0551'),
        ('build', '0016_auto_20200426_0551'),
        ('part', '0035_auto_20200406_0045'),
        ('company', '0021_remove_supplierpart_manufacturer_name'),
        ('stock', '0033_auto_20200426_0539'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='stockitem',
            name='customer',
        ),
        migrations.AlterField(
            model_name='stockitem',
            name='batch',
            field=models.CharField(blank=True, help_text='Batch code for this stock item', max_length=100, null=True, verbose_name='Batch Code'),
        ),
        migrations.AlterField(
            model_name='stockitem',
            name='belongs_to',
            field=models.ForeignKey(blank=True, help_text='Is this item installed in another item?', null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='owned_parts', to='stock.StockItem', verbose_name='Installed In'),
        ),
        migrations.AlterField(
            model_name='stockitem',
            name='build',
            field=models.ForeignKey(blank=True, help_text='Build for this stock item', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='build_outputs', to='build.Build', verbose_name='Source Build'),
        ),
        migrations.AlterField(
            model_name='stockitem',
            name='build_order',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='stock_items', to='build.Build', verbose_name='Destination Build Order'),
        ),
        migrations.AlterField(
            model_name='stockitem',
            name='link',
            field=InvenTree.fields.InvenTreeURLField(blank=True, help_text='Link to external URL', max_length=125, verbose_name='External Link'),
        ),
        migrations.AlterField(
            model_name='stockitem',
            name='location',
            field=mptt.fields.TreeForeignKey(blank=True, help_text='Where is this stock item located?', null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='stock_items', to='stock.StockLocation', verbose_name='Stock Location'),
        ),
        migrations.AlterField(
            model_name='stockitem',
            name='notes',
            field=models.TextField(blank=True, help_text='Stock Item Notes', null=True, verbose_name='Notes'),
        ),
            field=models.TextField(blank=True, help_text='Stock Item Notes', null=True, verbose_name='Notes'),
            model_name='stockitem',
            name='parent',
            field=mptt.fields.TreeForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='children', to='stock.StockItem', verbose_name='Parent Stock Item'),
        ),
        migrations.AlterField(
            model_name='stockitem',
            name='part',
            field=models.ForeignKey(help_text='Base part', limit_choices_to={'active': True, 'is_template': False, 'virtual': False}, on_delete=django.db.models.deletion.CASCADE, related_name='stock_items', to='part.Part', verbose_name='Base Part'),
        ),
        migrations.AlterField(
            model_name='stockitem',
            name='purchase_order',
            field=models.ForeignKey(blank=True, help_text='Purchase order for this stock item', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='stock_items', to='order.PurchaseOrder', verbose_name='Source Purchase Order'),
        ),
        migrations.AlterField(
            model_name='stockitem',
            name='quantity',
            field=models.DecimalField(decimal_places=5, default=1, max_digits=15, validators=[django.core.validators.MinValueValidator(0)], verbose_name='Stock Quantity'),
        ),
        migrations.AlterField(
            model_name='stockitem',
            name='sales_order',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='stock_items', to='order.SalesOrder', verbose_name='Destination Sales Order'),
        ),
        migrations.AlterField(
            model_name='stockitem',
            name='serial',
            field=models.PositiveIntegerField(blank=True, help_text='Serial number for this item', null=True, verbose_name='Serial Number'),
        ),
        migrations.AlterField(
            model_name='stockitem',
            name='supplier_part',
            field=models.ForeignKey(blank=True, help_text='Select a matching supplier part for this stock item', null=True, on_delete=django.db.models.deletion.SET_NULL, to='company.SupplierPart', verbose_name='Supplier Part'),
        ),
    ]