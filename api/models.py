from django.db import models

# Create your models here.
class Apitest(models.Model):
    completed = models.BooleanField(default=False)
    title = models.CharField(max_length=100)
    description = models.TextField()

class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    author = models.CharField(max_length=100)
    contact = models.CharField(max_length=100)

class Compensation(models.Model):
    title = models.CharField(max_length=100)
    amount = models.IntegerField()
    description = models.TextField()
    idProject = models.IntegerField()