from mainapp.models import *
from rest_framework import serializers
from mainapp.api.buisiness_logic import *


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'email']


class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['__all__']



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['title', 'slug']


class TeamSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Team
        fields = ['name', 'users', 'projects']


class ProjectSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    user = serializers.CharField()
    production = serializers.BooleanField(read_only=True)
    category = serializers.CharField()
    name = serializers.CharField()
    description = serializers.CharField()
    img = serializers.ImageField()
    file = serializers.FileField()
    money = serializers.DecimalField(decimal_places=2, max_digits=9)
    money_now = serializers.DecimalField(decimal_places=2, max_digits=9)
    date = serializers.DateTimeField()

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Project.objects.create(**validated_data)

    def update(self, instance, validated_data):
        self.user = validated_data.get('user', instance.user)
        self.production = validated_data.get('production', instance.production)
        self.category = validated_data.get('category', instance.category)
        self.name = validated_data.get('name', instance.name)
        self.description = validated_data.get('description', instance.description)
        self.img = validated_data.get('img', instance.img)
        self.file = validated_data.get('file', instance.file)
        self.money = validated_data.get('money', instance.money)
        self.money_now = validated_data.get('money_now', instance.money_now)
        self.date = validated_data.get('date', instance.date)
        instance.save()
        return instance
