from django.contrib import admin
from django.urls import path

from events.views import eventsListView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('events/api/list', eventsListView)
]
