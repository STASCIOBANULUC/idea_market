from django.urls import path, include
from rest_framework import routers
from mainapp.api import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'profile', views.UserViewSet)
router.register(r'category', views.CategoryViewSet)
router.register(r'project', views.ProjectViewSet)
router.register(r'teams', views.TeamViewSet)


urlpatterns = [
    path('', include(router.urls)),
]
