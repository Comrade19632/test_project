from django.urls import path

from .views import refresh_token, token


urlpatterns = [
    path("token/", token),
    path("token/refresh/", refresh_token),
]
