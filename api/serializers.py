from rest_framework import serializers

from api.models import Apitest
from api.models import Project
from api.models import Compensation
from api.models import Donation

class ApitestSerializer(serializers.ModelSerializer):

    class Meta:
        model = Apitest
        fields = ('title', 'description', 'completed')

class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ('id', 'name', 'description', 'author', 'contact', 'created_at')

class CompensationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Compensation
        fields = ('title', 'amount', 'description', 'idProject')

class DonationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Donation
        fields = ('sponsor', 'idCompensation')
