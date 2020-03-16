from django.http import Http404
from api.serializers import Covid19Serializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from . import ehrbase

class CovidScreenListView(APIView):

    def post(self, request, format=None):
        # serializer = Covid19Serializer(data=request.data)
        # if serializer.is_valid():
        #     ehrbase.CONNECTION.post(data=serializer.data)
        return Response(data={'fakeresponse': 'foo'})
