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
    sumDonation = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Compensation(models.Model):
    title = models.CharField(max_length=100)
    amount = models.IntegerField()
    description = models.TextField()
    idProject = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Donation(models.Model):
    sponsor = models.CharField(max_length=100)
    idCompensation = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)