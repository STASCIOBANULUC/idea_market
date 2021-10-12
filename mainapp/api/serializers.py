from mainapp.models import *
from rest_framework import serializers
from mainapp.api.buisiness_logic import *
from asyst import service


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'email']


class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'user', 'first_name', 'last_name', 'age', 'address', 'avatar', 'project', 'date_register']


class CategorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Category
        fields = ["title", 'slug']


class TeamSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Team
        fields = ['name', 'users', 'projects']


class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    is_fan = serializers.SerializerMethodField()
    class Meta:
        model = Project
        fields = ['production', 'category', 'name', 'description', 'img', 'file', 'money', 'money_now', 'date', 'date_finish', 'total_likes', 'if_fan']

    def get_is_fan(self, obj) -> bool:
        """Проверяет, лайкнул ли `request.user` твит (`obj`).
        """
        user = self.context.get('request').user
        return service.is_fan(obj, user)
    