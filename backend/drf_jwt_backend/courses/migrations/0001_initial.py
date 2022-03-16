# Generated by Django 4.0.3 on 2022-03-16 17:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('company', models.CharField(blank=True, max_length=30, null=True)),
                ('price', models.IntegerField()),
                ('purchase_date', models.DateField(blank=True, null=True)),
                ('purchase_type', models.CharField(blank=True, max_length=30, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('notes', models.TextField(max_length=1000)),
            ],
        ),
    ]
