# from django.shortcuts import render

# Create your views here.
import json

from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate

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

@csrf_exempt
def signup(request):
    stringBody = request.body.decode('utf-8')
    jsonBody = json.loads(stringBody)
    User.objects.create_user(username=jsonBody['userName'], password=jsonBody['password'])
    return HttpResponse('hello voice le vrai resultat')

@csrf_exempt
def signin(request):
    stringBody = request.body.decode('utf-8')
    jsonBody = json.loads(stringBody)
    user = authenticate(username=jsonBody['userName'], password=jsonBody['password'])
    value = "EXIST"
    if not user:
        value = "NOTEXIST"

    return HttpResponse(value)