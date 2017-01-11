from rest_framework import serializers

from api.models import Apitest
from api.models import Project

class ApitestSerializer(serializers.ModelSerializer):

    class Meta:
        model = Apitest
        fields = ('title', 'description', 'completed')

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ('id', 'name', 'description', 'author', 'contact')