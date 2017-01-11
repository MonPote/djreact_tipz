from django.conf.urls import url
from api import views as api_views


urlpatterns = [
    url(r'^tasks/$', api_views.task_list, name='task_list'),
    url(r'^test/$', api_views.index, name='index'),
    url(r'^createTest/$', api_views.createTest, name='createTest'),
    url(r'^signup/$', api_views.signup),
    # url(r'^tasks/(?P<pk>[0-9]+)$', 'task_detail', name='task_detail'),
]

