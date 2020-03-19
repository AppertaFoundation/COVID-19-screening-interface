import unittest

from . import canonical_covid_converters as CCC


class The_canonical_covid_composition_structure(unittest.TestCase):
    def setUp(self):
        simple_structure = {
            'clinicalAuthorName': "Dr Fred Bloggs",
            'clinicalAuthorId': "134-4567",
            'documentTime': "2020-03-11",
            'symptoms': {
                'firstSymptomsPresenceCode': "at0.2",
                'firstSymptomsPresenceText': "Present",
                'dateOfOnset': "2020-03-10",                'coughPresenceCode': "at0.4",
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
        self.canonical_structure = CCC.canonical_covid_composition(
            minimal_structure=simple_structure
        )

    def test_is_expanded_version_for_upload_to_ehrbase(self):
        self.fail("Waiting on example")
