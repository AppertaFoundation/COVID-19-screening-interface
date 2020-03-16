# -*- coding: utf-8 -*-
from django.urls import include, path
from rest_framework import routers
from api import views
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


router = routers.DefaultRouter()

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('0.1/covid-screenings/', views.CovidScreenListView.as_view()),
    path(
        '0.1/auth/token/',
        TokenObtainPairView.as_view(),
        name='token_obtain_pair'),
    path(
        '0.1/auth/token/refresh/',
        TokenRefreshView.as_view(),
        name='token_refresh'),
]
