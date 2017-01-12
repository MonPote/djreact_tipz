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

from api.models import Project
from api.serializers import ProjectSerializer

from api.models import Compensation
from api.serializers import CompensationSerializer


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
    user = User.objects.create_user(username=jsonBody['userName'], password=jsonBody['password'])
    value = "OK"
    if not user:
        value = "NOK"

    return HttpResponse(value)


@csrf_exempt
def signin(request):
    stringBody = request.body.decode('utf-8')
    jsonBody = json.loads(stringBody)
    user = authenticate(username=jsonBody['userName'], password=jsonBody['password'])
    value = "EXIST"
    if not user:
        value = "NOTEXIST"

    return HttpResponse(value)


@csrf_exempt
def createProject(request):
    Project.objects.create(name="toto", description="description", author="auteur", contact="contact")
    return HttpResponse('ok')


@api_view(['GET'])
@csrf_exempt
def getAllProjects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
@csrf_exempt
def getProject(request, pk):
    project = Project.objects.get(id=pk)
    serializer = ProjectSerializer(project, many=False)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
@csrf_exempt
def compensationCreation(request):
    stringBody = request.body.decode('utf-8')
    jsonBody = json.loads(stringBody)
    projectDetail = jsonBody['projectDetails']
    compensations = jsonBody['compensations']
    print(jsonBody)
    # print('compensation = ', compensations)
    project = Project.objects.create(
        name=projectDetail['name'],
        description=projectDetail['description'],
        author=projectDetail['author'],
        contact=projectDetail['contact'])

    for compensation in compensations:
        Compensation.objects.create(
            title=compensation['title'],
            amount=compensation['amount'],
            description=compensation['description'],
            idProject=project.pk
        )

    # print(jsonBody)
    # compensation = Compensation.objects.create(title="Comp", amount=100, description="estdesc", idProject=1)
    return Response('OKAY')

@api_view(['GET'])
@csrf_exempt
def getCompensationsOfOneProject(request, pk):
    compensation = Compensation.objects.filter(idProject=pk)
    serializer = CompensationSerializer(compensation, many=True)
    print(serializer.data)
    return Response(serializer.data)

@api_view(['GET'])
@csrf_exempt
def getOneCompensation(request, pk):
    compensation = Compensation.objects.get(id=pk)
    serializer = CompensationSerializer(compensation)
    return Response(serializer.data)

@api_view(['GET'])
@csrf_exempt
def addCompensationToProject(request, pk):
    compensation = Compensation.objects.get(id=pk)
    compensationAmount = getattr(compensation, 'amount')
    projectId = getattr(compensation, 'idProject')

    project = Project.objects.get(id=projectId)
    project.sumDonation = project.sumDonation + compensationAmount
    project.save()

    return Response('OKAY')

