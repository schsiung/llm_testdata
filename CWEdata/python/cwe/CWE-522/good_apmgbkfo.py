# Generated by Django 2.2 on 2019-04-06 13:22

import uuid

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('nopassword', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='logincode',
            name='code',
        ),
        migrations.AlterField(
            model_name='logincode',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True,
                                   serialize=False),
        ),
    ]
# Generated by Django 2.2 on 2019-04-06 13:22

import uuid

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('nopassword', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='logincode',
            name='code',
        ),
        migrations.AlterField(
            model_name='logincode',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True,
                                   serialize=False),
        ),
    ]