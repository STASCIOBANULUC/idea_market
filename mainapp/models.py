from django.contrib.auth.models import User
from django.db import models


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=200, verbose_name="Имя владельца профиля")
    last_name = models.CharField(max_length=200, verbose_name="Фамилия владельца профиля")
    age = models.PositiveIntegerField(verbose_name="Сколько лет")
    address = models.CharField(max_length=200, verbose_name="Адрес пользователся")
    avatar = models.ImageField(upload_to='media', verbose_name="Фото профиля")
    project = models.ForeignKey("Project", on_delete=models.CASCADE, null=True, blank=False,
                                verbose_name="Проекты пользователя")
    teams = models.ManyToManyField('Team', null=True, blank=False)
    date_register = models.DateTimeField(auto_now_add=True, verbose_name="Дата создания профиля")

    class Meta:
        ordering = ('-date_register',)

    def __str__(self):
        return "{} {}".format(self.first_name, self.last_name)


class Team(models.Model):
    name = models.CharField(max_length=200)
    users = models.ManyToManyField(User, verbose_name="Список участников команды")
    projects = models.ForeignKey("Project", on_delete=models.CASCADE)


class Category(models.Model):
    title = models.CharField(max_length=150, verbose_name="Название категории")
    slug = models.SlugField(verbose_name="URL")

    class Meta:
        ordering = ['title']
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'

    def __str__(self):
        return self.title


class Project(models.Model):
    production = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name="Категория проекта")
    name = models.CharField(max_length=200, verbose_name="Название проекта")
    description = models.TextField(verbose_name="Описание")
    img = models.ImageField('Фото', upload_to='media')
    file = models.FileField("Файл", upload_to='media')
    money = models.DecimalField(decimal_places=2, max_digits=9, verbose_name="Нужная сумма")
    money_now = models.DecimalField(decimal_places=2, max_digits=9, verbose_name="Сумма собранная на даный момент")
    date = models.DateTimeField(verbose_name="Время создания проекта", auto_now_add=True)
    date_finish = models.DateTimeField(verbose_name="Время окончания проекта", auto_now_add=True)

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проект'
        ordering = ['-date']

    def __str__(self):
        return self.name
