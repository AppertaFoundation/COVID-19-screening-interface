import datetime
import unittest

from . import covid_converters as CC


class The_cough_presence_values(unittest.TestCase):
    def test_are_at04_and_Unknown_for_unknown(self):
        archetype_values = CC.archetype_values_from_presence_field(
            prefix='coughPresence', presence='unknown')
        self.assertDictEqual(
            archetype_values,
            {'coughPresenceText': 'Unknown', 'coughPresenceCode': 'at0.4'},
        )

    def test_are_at02_and_Present_for_present(self):
        archetype_values = CC.archetype_values_from_presence_field(
            prefix='coughPresence', presence='present')
        self.assertDictEqual(
            archetype_values,
            {'coughPresenceText': 'Present', 'coughPresenceCode': 'at0.2'},
        )

    def test_are_at03_and_Absent_for_absent(self):
        archetype_values = CC.archetype_values_from_presence_field(
            prefix='coughPresence', presence='absent')
        self.assertDictEqual(
            archetype_values,
            {'coughPresenceText': 'Absent', 'coughPresenceCode': 'at0.3'},
        )


class The_covid_archetype_values(unittest.TestCase):
    def setUp(self):
        self.maxDiff = None
        self.covid_archetype_values = CC.covid_archetype_structure(
            clinical_author_name='Dr Fred Bloggs',
            clinical_author_id='134-4567',
            document_date=datetime.date(2020, 3, 11),
            form_values=dict(
                first_symptoms_presence='present',
                cough_presence='unknown',
                fever_presence='absent',
                difficulty_breathing_presence='present',
                sore_throat_presence='present',
                body_temperature_degrees_C=38.4,
                date_of_onset=datetime.date(2020, 3, 10)
            ),
        )

    def test_output_structure_correct(self):
        expected = {
            'clinicalAuthorName': "Dr Fred Bloggs",
            'clinicalAuthorId': "134-4567",
            'documentTime': "2020-03-11",
            'symptoms': {
                'firstSymptomsPresenceCode': "at0.2",
                'firstSymptomsPresenceText': "Present",
                'dateOfOnset': "2020-03-10",

                'coughPresenceCode': "at0.4",
                'coughPresenceText': "Unknown",
                'feverPresenceCode': "at0.3",
                'feverPresenceText': "Absent",
                'difficultyBreathingPresenceCode': "at0.2",
                'difficultyBreathingPresenceText': "Present",
                'soreThroatPresenceCode': "at0.2",
                'soreThroatPresenceText': "Present",
                # TODO consider otherSymptom
            },
            'bodyTemp': {
                'magnitude': 38.4,
                'units': "Cel"
            },
        }
        self.assertDictEqual(self.covid_archetype_values, expected)
