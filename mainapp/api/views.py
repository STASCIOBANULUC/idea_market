
from rest_framework import viewsets, generics
from rest_framework.views import APIView

from mainapp.models import *
from mainapp.api.serializers import CustomUserSerializer, CategorySerializer, ProjectSerializer, TeamSerializer


class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all().order_by('username')
    serializer_class = CustomUserSerializer
    pagination_class = None


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('title')
    serializer_class = CategorySerializer
    pagination_class = None


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('-date')
    serializer_class = ProjectSerializer
    pagination_class = None


class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all().order_by('name')
    serializer_class = TeamSerializer
    pagination_class = None


