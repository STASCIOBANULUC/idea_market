from django.contrib import admin

from mainapp.models import *


class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ['title'], }


admin.site.register(CustomUser)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Project)
admin.site.register(Team)
