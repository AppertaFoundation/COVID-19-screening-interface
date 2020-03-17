from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from . import ehrbase

class CovidScreenListView(APIView):

    def post(self, request, format=None):
        if (patient := request.user.c19_api_patient_profile):
            # serializer = Covid19Serializer(data=request.data)
            # if serializer.is_valid():
            #     ehrbase.CONNECTION.post(data=serializer.data)
            return Response(
                data={
                    # TODO we probably won't send the nhs number back,
                    #  this is just for stubbing to check the code branches
                    'nhs_number': patient.patient_nhs_number,
                },
            )
        else:
            return Response(
                data={
                    'status': 'Unauthorized',
                    'error': 'No patient profile record for user',
                },
                status=401,
            )
