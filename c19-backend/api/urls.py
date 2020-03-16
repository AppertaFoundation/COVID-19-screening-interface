# -*- coding: utf-8 -*-
from django.urls import include, path
from rest_framework import routers
from api import views
from rest_framework.urlpatterns import format_suffix_patterns


router = routers.DefaultRouter()

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('0.1/covid-screenings/', views.CovidScreenListView.as_view()),
]

