# Generated by Django 3.1.3 on 2020-12-28 10:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ecomApi', '0003_auto_20201228_1604'),
    ]

    operations = [
        migrations.RenameField(
            model_name='orders',
            old_name='image',
            new_name='cart',
        ),
        migrations.RemoveField(
            model_name='orders',
            name='color',
        ),
        migrations.RemoveField(
            model_name='orders',
            name='name',
        ),
        migrations.RemoveField(
            model_name='orders',
            name='price',
        ),
        migrations.RemoveField(
            model_name='orders',
            name='quantity',
        ),
    ]
