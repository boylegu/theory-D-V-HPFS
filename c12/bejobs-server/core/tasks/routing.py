from django.conf.urls import url

from . import channels

websocket_urlpatterns = [
    url(r'^ws/task/(?P<task_id>[^/]+)$', channels.ChannalConsumer),
]
