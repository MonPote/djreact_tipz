from django.conf.urls import url
from api import views as api_views


urlpatterns = [
    url(r'^tasks/$', api_views.task_list, name='task_list'),
    url(r'^signup/$', api_views.signup),
    url(r'^signin/$', api_views.signin),
    url(r'^fake/$', api_views.createProject),
    url(r'^projects/$', api_views.getAllProjects),
    url(r'^project/(?P<pk>[0-9]+)$', api_views.getProject),
    url(r'^compensationCreation/$', api_views.compensationCreation),
    url(r'^compensation/(?P<pk>[0-9]+)$', api_views.getCompensationsOfOneProject),
    url(r'^singleCompensation/(?P<pk>[0-9]+)$', api_views.getOneCompensation),
    # url(r'^tasks/(?P<pk>[0-9]+)$', 'task_detail', name='task_detail'),
]

