# Generated by Django 4.0.3 on 2022-03-25 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0005_alter_course_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='course',
            old_name='notes',
            new_name='be_great',
        ),
        migrations.AddField(
            model_name='course',
            name='help_me_to',
            field=models.TextField(blank=True, max_length=3000, null=True),
        ),
    ]
