from rest_framework import serializers

from api.models import Apitest


class ApitestSerializer(serializers.ModelSerializer):

    class Meta:
        model = Apitest
        fields = ('title', 'description', 'completed')
