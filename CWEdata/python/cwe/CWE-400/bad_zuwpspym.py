# Generated by Django 2.2.9 on 2020-02-23 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('part', '0028_auto_20200203_1007'),
    ]

    operations = [
        migrations.AlterField(
            model_name='part',
            name='notes',
            field=models.TextField(blank=True, help_text='Part notes - supports Markdown formatting'),
        ),
    ]