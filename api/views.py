# from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Apitest
from api.serializers import ApitestSerializer

from django.contrib.auth.models import User

@api_view(['GET', 'POST'])
def task_list(request):
    """
    List all tasks, or create a new task.
    """
    if request.method == 'GET':
        tasks = Apitest.objects.all()
        serializer = ApitestSerializer(tasks, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = ApitestSerializer(data=request.DATA)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(
                serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def index(request):
    return HttpResponse(request.GET.get('hello'))

def createTest(request):
    user = User.objects.create_user(username='SimonW', password='johnpassword')
    user.is_superuser = True
    user.save()
    return HttpResponse('createTest')
