# Generated by Django 3.1.3 on 2020-12-29 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecomApi', '0004_auto_20201228_1655'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orders',
            name='cart',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='orders',
            name='pricing',
            field=models.TextField(blank=True, null=True),
        ),
    ]