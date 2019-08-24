from django.contrib import admin
from django.urls import path
    
from events.views import eventsListView
from consumer import views

PREFIX = 'api'

urlpatterns = [
    #path('admin/', admin.site.urls),
    path('events/api/list', eventsListView),
    path(f'consumer/{PREFIX}/tag-users', views.UserInfoFromTagListView.as_view()),
    path(f'consumer/{PREFIX}/users', views.CreateListUserInfoView.as_view()),
    path(f'consumer/{PREFIX}/users/<str:nickname>', views.UpdateRetrieveUserInfoView.as_view()),
    path(f'consumer/{PREFIX}/auth', views.AuthUserView.as_view())
]
