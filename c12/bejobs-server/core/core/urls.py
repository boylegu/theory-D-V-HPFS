from django.urls import path, include


urlpatterns = [
    path('core/tasks/', include('tasks.urls')),
]
