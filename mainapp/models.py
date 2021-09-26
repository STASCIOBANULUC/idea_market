from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    age = models.PositiveIntegerField( null=True, blank=False)
    project = models.ForeignKey("Project", on_delete=models.CASCADE, null=True, blank=False )

    class Meta(AbstractUser.Meta):
        verbose_name = 'Пользователь'

        verbose_name_plural = 'Пользователи'
        ordering = ['age']


class Team(models.Model):
    name = models.CharField(max_length=200)
    users = models.ManyToManyField(CustomUser, verbose_name="Список участников команды")
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
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, verbose_name="Основатель проекта",
                             related_name='user_poject')
    production = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name="Категория проекта")
    name = models.CharField(max_length=200, verbose_name="Название проекта")
    description = models.TextField(verbose_name="Описание")
    img = models.ImageField('Фото', upload_to='media')
    file = models.FileField("Файл", upload_to='media')
    money = models.DecimalField(decimal_places=2, max_digits=9, verbose_name="Нужная сумма")
    money_now = models.DecimalField(decimal_places=2, max_digits=9, verbose_name="Сумма собранная на даный момент")
    date = models.DateTimeField(verbose_name="Время создания проекта", auto_now_add=True)

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проект'
        ordering = ['-date']

    def __str__(self):
        return self.name


