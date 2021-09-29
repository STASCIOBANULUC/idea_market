from rest_framework import viewsets, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView

from mainapp.models import *
from mainapp.api.serializers import UserSerializer, CategorySerializer, ProjectSerializer, TeamSerializer, \
    ProfileSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('username')
    serializer_class = UserSerializer
    pagination_class = None


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all().order_by('-date_register')
    serializer_class = ProfileSerializer
    pagination_class = None
    permission_classes = (IsAuthenticated,)


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
