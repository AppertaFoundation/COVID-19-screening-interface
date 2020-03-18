from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ehrbase_connector.connector import OpenEHRAPI
from . import ehrbase

class CovidScreenListView(APIView):
    def post(self, request, format=None):
        screening_data = request.data
        ehr_api = OpenEHRAPI(connection=ehrbase.CONNECTION)
        ehr_id = ehr_api.ehr_id_for_nhs_number(
            nhs_number=screening_data['nhs_number'])
        return Response(
            data={
                # TODO we probably won't send the nhs number back,
                #  this is just for stubbing to check the code branches
                'nhs_number': screening_data['nhs_number'],
                'ehr_id': ehr_id,
            },
        )
