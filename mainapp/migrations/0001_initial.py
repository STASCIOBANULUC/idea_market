

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, verbose_name='Название категории')),
                ('slug', models.SlugField(verbose_name='URL')),
            ],
            options={
                'verbose_name': 'Категория',
                'verbose_name_plural': 'Категории',
                'ordering': ['title'],
            },
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('production', models.BooleanField(default=False)),
                ('name', models.CharField(max_length=200, verbose_name='Название проекта')),
                ('description', models.TextField(verbose_name='Описание')),
                ('img', models.ImageField(upload_to='media', verbose_name='Фото')),
                ('file', models.FileField(upload_to='media', verbose_name='Файл')),
                ('money', models.DecimalField(decimal_places=2, max_digits=9, verbose_name='Нужная сумма')),
                ('money_now', models.DecimalField(decimal_places=2, max_digits=9, verbose_name='Сумма собранная на даный момент')),
                ('date', models.DateTimeField(auto_now_add=True, verbose_name='Время создания проекта')),
                ('date_finish', models.DateTimeField(auto_now_add=True, verbose_name='Время окончания проекта')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.category', verbose_name='Категория проекта')),
            ],
            options={
                'verbose_name': 'Проект',
                'verbose_name_plural': 'Проект',
                'ordering': ['-date'],
            },
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('projects', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.project')),
                ('users', models.ManyToManyField(to=settings.AUTH_USER_MODEL, verbose_name='Список участников команды')),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=200, verbose_name='Имя владельца профиля')),
                ('last_name', models.CharField(max_length=200, verbose_name='Фамилия владельца профиля')),
                ('age', models.PositiveIntegerField(verbose_name='Сколько лет')),
                ('address', models.CharField(max_length=200, verbose_name='Адрес пользователся')),
                ('avatar', models.ImageField(upload_to='media', verbose_name='Фото профиля')),
                ('date_register', models.DateTimeField(auto_now_add=True, verbose_name='Дата создания профиля')),
                ('project', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='mainapp.project', verbose_name='Проекты пользователя')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('-date_register',),
            },
        ),
    ]
