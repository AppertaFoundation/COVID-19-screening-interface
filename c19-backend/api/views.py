import datetime
import logging

from django.http import Http404
from django.utils import timezone
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from toolz import dicttoolz

from covid_utils.canonical_covid_converters import canonical_covid_composition
from covid_utils.covid_converters import covid_archetype_structure
from ehrbase_connector.connector import OpenEHRAPI
from . import ehrbase


logger = logging.getLogger(__name__)


class CovidScreenListView(APIView):
    def post(self, request, format=None):
        nhs_number = request.data['nhs_number']
        ehr_api = OpenEHRAPI(connection=ehrbase.CONNECTION)
        ehr_id = ehr_api.ehr_id_for_nhs_number(nhs_number=nhs_number)
        composition = self._frontend_data_to_composition(
            now=timezone.now(), data_from_frontend=request.data)
        insertion_result = ehr_api.insert_composition_into_ehr(
            ehr_id=ehr_id, composition=composition)
        return Response(
            data={
                # TODO we probably won't send the nhs number back,
                #  this is just for stubbing to check the code branches
                'nhs_number': nhs_number,
                'ehr_id': ehr_id,
                '_note':
                    'Just a fake return value for stubbing purposes for now,'
                    ' and will probably change completely',
                #'_simplified_archetype_structure': simplified_archetype_structure,
                '_composition': composition,
                '_created_composition_uid': insertion_result['composition_uid'],
            },
        )

    def _frontend_data_to_composition(self, now, data_from_frontend):
        simplified_archetype_structure = covid_archetype_structure(
            # TODO proper clinical author data for patient self-assessment?
            clinical_author_name='Patient Self-assessment',
            clinical_author_id='134-5678',
            document_time=now,
            form_values=self._expand_posted_form_data(data_from_frontend),
        )
        import pprint
        logger.info(f"simlified_archetype_structure = {pprint.pformat(simplified_archetype_structure)}")
        return canonical_covid_composition(
            minimal_structure=simplified_archetype_structure)

    def _expand_posted_form_data(self, screening_data_from_request):
        tz_aware_date_of_onset = \
            timezone.make_aware(
                datetime.datetime.strptime(
                    screening_data_from_request['date_of_onset'],
                    '%Y-%m-%d'))
        with_expanded_and_aware_date = dicttoolz.assoc(
            screening_data_from_request, 'date_of_onset', tz_aware_date_of_onset)
        return dicttoolz.dissoc(with_expanded_and_aware_date, 'nhs_number')

