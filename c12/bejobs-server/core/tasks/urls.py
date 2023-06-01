from django.urls import path

from tasks import views

urlpatterns = [
    path('api/create-task', views.CreateTaskView.as_view()),
]