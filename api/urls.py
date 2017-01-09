from django.conf.urls import url
from api import views as api_views


urlpatterns = [
    url(r'^tasks/$', api_views.task_list, name='task_list'),
    url(r'^test/$', api_views.index, name='index'),
    # url(r'^tasks/(?P<pk>[0-9]+)$', 'task_detail', name='task_detail'),
]
