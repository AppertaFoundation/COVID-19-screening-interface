import unittest

from . import canonical_covid_converters as CCC


class The_canonical_covid_composition_structure(unittest.TestCase):
    def setUp(self):
        simple_structure = {
            'clinicalAuthorName': "Dr Fred Bloggs",
            'clinicalAuthorId': "134-4567",
            'documentTime': "2020-03-11T00:00:00Z",
            'symptoms': {
                'firstSymptomsPresenceCode': "at0.2",
                'firstSymptomsPresenceText': "Present",
                'dateOfOnset': "2020-03-11T00:00:00Z",
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
                'magnitude': 37.8,
                'units': "Cel"
            },
        }
        self.canonical_structure = CCC.canonical_covid_composition(
            minimal_structure=simple_structure
        )

    # If you comment this out and mount a filesystem volume to /debug/c19-backend,
    # you can get hold of the composition data to put into CURL for testing uploads.
    # def test_dump_to_stdout(self):
    #     import json
    #     import os
    #     os.makedirs('/debug/c19-backend', exist_ok=True)
    #     with open('/debug/c19-backend/canonical_structure.json', 'w') as debug_file:
    #         json.dump(self.canonical_structure, debug_file)

    def test_is_expanded_version_for_upload_to_ehrbase(self):
        self.maxDiff = None
        expected = {
            "_type": "COMPOSITION",
            "name": {
                "_type": "DV_TEXT",
                "value": "Suspected Covid-19 risk assessment"
            },
            "archetype_details": {
                "_type": "ARCHETYPED",
                "archetype_id": {
                    "_type": "ARCHETYPE_ID",
                    "value": "openEHR-EHR-COMPOSITION.encounter.v1"
                },
                "template_id": {
                    "_type": "TEMPLATE_ID",
                    "value": "openEHR-Suspected Covid-19 assessment.v0"
                },
                "rm_version": "1.0.2"
            },
            "archetype_node_id": "openEHR-EHR-COMPOSITION.encounter.v1",
            "language": {
                "_type": "CODE_PHRASE",
                "terminology_id": {
                    "_type": "TERMINOLOGY_ID",
                    "value": "ISO_639-1"
                },
                "code_string": "en"
            },
            "territory": {
                "_type": "CODE_PHRASE",
                "terminology_id": {
                    "_type": "TERMINOLOGY_ID",
                    "value": "ISO_3166-1"
                },
                "code_string": "GB"
            },
            "category": {
                "_type": "DV_CODED_TEXT",
                "value": "event",
                "defining_code": {
                    "_type": "CODE_PHRASE",
                    "terminology_id": {
                        "_type": "TERMINOLOGY_ID",
                        "value": "openehr"
                    },
                    "code_string": "433"
                }
            },
            "composer": {
                "_type": "PARTY_IDENTIFIED",
                "external_ref": {
                    "_type": "PARTY_REF",
                    "id": {
                        "_type": "GENERIC_ID",
                        "value": "134-4567",
                        "scheme": "HOSPITAL-NS"
                    },
                    "namespace": "HOSPITAL-NS",
                    "type": "PERSON"
                },
                "name": "Dr Fred Bloggs"
            },
            "context": {
                "_type": "EVENT_CONTEXT",
                "start_time": {
                    "_type": "DV_DATE_TIME",
                    "value": "2020-03-11T00:00:00Z"
                },
                "setting": {
                    "_type": "DV_CODED_TEXT",
                    "value": "other care",
                    "defining_code": {
                        "_type": "CODE_PHRASE",
                        "terminology_id": {
                            "_type": "TERMINOLOGY_ID",
                            "value": "openehr"
                        },
                        "code_string": "238"
                    }
                },
                "health_care_facility": {
                    "_type": "PARTY_IDENTIFIED",
                    "external_ref": {
                        "_type": "PARTY_REF",
                        "id": {
                            "_type": "GENERIC_ID",
                            "value": "9091",
                            "scheme": "HOSPITAL-NS"
                        },
                        "namespace": "HOSPITAL-NS",
                        "type": "PARTY"
                    },
                    "name": "Hospital"
                }
            },
            "content": [
                {
                    "_type": "OBSERVATION",
                    "name": {
                        "_type": "DV_TEXT",
                        "value": "Symptoms"
                    },
                    "archetype_details": {
                        "_type": "ARCHETYPED",
                        "archetype_id": {
                            "_type": "ARCHETYPE_ID",
                            "value": "openEHR-EHR-OBSERVATION.story.v1"
                        },
                        "rm_version": "1.0.2"
                    },
                    "archetype_node_id": "openEHR-EHR-OBSERVATION.story.v1",
                    "language": {
                        "_type": "CODE_PHRASE",
                        "terminology_id": {
                            "_type": "TERMINOLOGY_ID",
                            "value": "ISO_639-1"
                        },
                        "code_string": "en"
                    },
                    "encoding": {
                        "_type": "CODE_PHRASE",
                        "terminology_id": {
                            "_type": "TERMINOLOGY_ID",
                            "value": "IANA_character-sets"
                        },
                        "code_string": "UTF-8"
                    },
                    "subject": {
                        "_type": "PARTY_SELF"
                    },
                    "data": {
                        "_type": "HISTORY",
                        "name": {
                            "_type": "DV_TEXT",
                            "value": "Event Series"
                        },
                        "archetype_node_id": "at0001",
                        "origin": {
                            "_type": "DV_DATE_TIME",
                            "value": "2020-03-11T00:00:00Z"
                        },
                        "events": [
                            {
                                "_type": "POINT_EVENT",
                                "name": {
                                    "_type": "DV_TEXT",
                                    "value": "Any event"
                                },
                                "archetype_node_id": "at0002",
                                "time": {
                                    "_type": "DV_DATE_TIME",
                                    "value": "2020-03-11T00:00:00Z"
                                },
                                "data": {
                                    "_type": "ITEM_TREE",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Tree"
                                    },
                                    "archetype_node_id": "at0003",
                                    "items": [
                                        {
                                            "_type": "CLUSTER",
                                            "name": {
                                                "_type": "DV_TEXT",
                                                "value": "Influenza-like symptoms"
                                            },
                                            "archetype_details": {
                                                "_type": "ARCHETYPED",
                                                "archetype_id": {
                                                    "_type": "ARCHETYPE_ID",
                                                    "value": "openEHR-EHR-CLUSTER.symptom_sign-cvid.v0"
                                                },
                                                "rm_version": "1.0.2"
                                            },
                                            "archetype_node_id": "openEHR-EHR-CLUSTER.symptom_sign-cvid.v0",
                                            "items": [
                                                {
                                                    "_type": "ELEMENT",
                                                    "name": {
                                                        "_type": "DV_TEXT",
                                                        "value": "Symptom/Sign name"
                                                    },
                                                    "archetype_node_id": "at0001.1",
                                                    "value": {
                                                        "_type": "DV_CODED_TEXT",
                                                        "value": "Influenza-like symptoms",
                                                        "defining_code": {
                                                            "_type": "CODE_PHRASE",
                                                            "terminology_id": {
                                                                "_type": "TERMINOLOGY_ID",
                                                                "value": "SNOMED-CT"
                                                            },
                                                            "code_string": "315642008"
                                                        }
                                                    }
                                                },
                                                {
                                                    "_type": "ELEMENT",
                                                    "name": {
                                                        "_type": "DV_TEXT",
                                                        "value": "First onset of symptoms"
                                                    },
                                                    "archetype_node_id": "at0152",
                                                    "value": {
                                                        "_type": "DV_DATE_TIME",
                                                        "value": "2020-03-11T00:00:00Z"
                                                    }
                                                },
                                                {
                                                    "_type": "ELEMENT",
                                                    "name": {
                                                        "_type": "DV_TEXT",
                                                        "value": "Presence"
                                                    },
                                                    "archetype_node_id": "at0.1",
                                                    "value": {
                                                        "_type": "DV_CODED_TEXT",
                                                        "value": "Present",
                                                        "defining_code": {
                                                            "_type": "CODE_PHRASE",
                                                            "terminology_id": {
                                                                "_type": "TERMINOLOGY_ID",
                                                                "value": "local"
                                                            },
                                                            "code_string": "at0.2"
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "_type": "CLUSTER",
                                            "name": {
                                                "_type": "DV_TEXT",
                                                "value": "Cough"
                                            },
                                            "archetype_details": {
                                                "_type": "ARCHETYPED",
                                                "archetype_id": {
                                                    "_type": "ARCHETYPE_ID",
                                                    "value": "openEHR-EHR-CLUSTER.symptom_sign-cvid.v0"
                                                },
                                                "rm_version": "1.0.2"
                                            },
                                            "archetype_node_id": "openEHR-EHR-CLUSTER.symptom_sign-cvid.v0",
                                            "items": [
                                                {
                                                    "_type": "ELEMENT",
                                                    "name": {
                                                        "_type": "DV_TEXT",
                                                        "value": "Symptom/Sign name"
                                                    },
                                                    "archetype_node_id": "at0001.1",
                                                    "value": {
                                                        "_type": "DV_CODED_TEXT",
                                                        "value": "Cough",
                                                        "defining_code": {
                                                            "_type": "CODE_PHRASE",
                                                            "terminology_id": {
                                                                "_type": "TERMINOLOGY_ID",
                                                                "value": "SNOMED-CT"
                                                            },
                                                            "code_string": "49727002"
                                                        }
                                                    }
                                                },
                                                {
                                                    "_type": "ELEMENT",
                                                    "name": {
                                                        "_type": "DV_TEXT",
                                                        "value": "Presence"
                                                    },
                                                    "archetype_node_id": "at0.1",
                                                    "value": {
                                                        "_type": "DV_CODED_TEXT",
                                                        "value": "Unknown",
                                                        "defining_code": {
                                                            "_type": "CODE_PHRASE",
                                                            "terminology_id": {
                                                                "_type": "TERMINOLOGY_ID",
                                                                "value": "local"
                                                            },
                                                            "code_string": "at0.4"
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "_type": "CLUSTER",
                                            "name": {
                                                "_type": "DV_TEXT",
                                                "value": "Fever"
                                            },
                                            "archetype_details": {
                                                "_type": "ARCHETYPED",
                                                "archetype_id": {
                                                    "_type": "ARCHETYPE_ID",
                                                    "value": "openEHR-EHR-CLUSTER.symptom_sign-cvid.v0"
                                                },
                                                "rm_version": "1.0.2"
                                            },
                                            "archetype_node_id": "openEHR-EHR-CLUSTER.symptom_sign-cvid.v0",
                                            "items": [
                                                {
                                                    "_type": "ELEMENT",
                                                    "name": {
                                                        "_type": "DV_TEXT",
                                                        "value": "Symptom/Sign name"
                                                    },
                                                    "archetype_node_id": "at0001.1",
                                                    "value": {
                                                        "_type": "DV_CODED_TEXT",
                                                        "value": "Fever",
                                                        "defining_code": {
                                                            "_type": "CODE_PHRASE",
                                                            "terminology_id": {
                                                                "_type": "TERMINOLOGY_ID",
                                                                "value": "SNOMED-CT"
                                                            },
                                                            "code_string": "386661006"
                                                        }
                                                    }
                                                },
                                                {
                                                    "_type": "ELEMENT",
                                                    "name": {
                                                        "_type": "DV_TEXT",
                                                        "value": "Presence"
                                                    },
                                                    "archetype_node_id": "at0.1",
                                                    "value": {
                                                        "_type": "DV_CODED_TEXT",
                                                        "value": "Absent",
                                                        "defining_code": {
                                                            "_type": "CODE_PHRASE",
                                                            "terminology_id": {
                                                                "_type": "TERMINOLOGY_ID",
                                                                "value": "local"
                                                            },
                                                            "code_string": "at0.3"
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "_type": "CLUSTER",
                                            "name": {
                                                "_type": "DV_TEXT",
                                                "value": "Difficulty breathing"
                                            },
                                            "archetype_details": {
                                                "_type": "ARCHETYPED",
                                                "archetype_id": {
                                                    "_type": "ARCHETYPE_ID",
                                                    "value": "openEHR-EHR-CLUSTER.symptom_sign-cvid.v0"
                                                },
                                                "rm_version": "1.0.2"
                                            },
                                            "archetype_node_id": "openEHR-EHR-CLUSTER.symptom_sign-cvid.v0",
                                            "items": [
                                                {
                                                    "_type": "ELEMENT",
                                                    "name": {
                                                        "_type": "DV_TEXT",
                                                        "value": "Symptom/Sign name"
                                                    },
                                                    "archetype_node_id": "at0001.1",
                                                    "value": {
                                                        "_type": "DV_CODED_TEXT",
                                                        "value": "Difficulty breathing",
                                                        "defining_code": {
                                                            "_type": "CODE_PHRASE",
                                                            "terminology_id": {
                                                                "_type": "TERMINOLOGY_ID",
                                                                "value": "SNOMED-CT"
                                                            },
                                                            "code_string": "267036007"
                                                        }
                                                    }
                                                },
                                                {
                                                    "_type": "ELEMENT",
                                                    "name": {
                                                        "_type": "DV_TEXT",
                                                        "value": "Presence"
                                                    },
                                                    "archetype_node_id": "at0.1",
                                                    "value": {
                                                        "_type": "DV_CODED_TEXT",
                                                        "value": "Present",
                                                        "defining_code": {
                                                            "_type": "CODE_PHRASE",
                                                            "terminology_id": {
                                                                "_type": "TERMINOLOGY_ID",
                                                                "value": "local"
                                                            },
                                                            "code_string": "at0.2"
                                                        }
                                                    }
                                                }
                                            ]
                                        },
                                        {
                                            "_type": "CLUSTER",
                                            "name": {
                                                "_type": "DV_TEXT",
                                                "value": "Sore throat"
                                            },
                                            "archetype_details": {
                                                "_type": "ARCHETYPED",
                                                "archetype_id": {
                                                    "_type": "ARCHETYPE_ID",
                                                    "value": "openEHR-EHR-CLUSTER.symptom_sign-cvid.v0"
                                                },
                                                "rm_version": "1.0.2"
                                            },
                                            "archetype_node_id": "openEHR-EHR-CLUSTER.symptom_sign-cvid.v0",
                                            "items": [
                                                {
                                                    "_type": "ELEMENT",
                                                    "name": {
                                                        "_type": "DV_TEXT",
                                                        "value": "Symptom/Sign name"
                                                    },
                                                    "archetype_node_id": "at0001.1",
                                                    "value": {
                                                        "_type": "DV_CODED_TEXT",
                                                        "value": "Pain in throat",
                                                        "defining_code": {
                                                            "_type": "CODE_PHRASE",
                                                            "terminology_id": {
                                                                "_type": "TERMINOLOGY_ID",
                                                                "value": "SNOMED-CT"
                                                            },
                                                            "code_string": "162397003"
                                                        }
                                                    }
                                                },
                                                {
                                                    "_type": "ELEMENT",
                                                    "name": {
                                                        "_type": "DV_TEXT",
                                                        "value": "Presence"
                                                    },
                                                    "archetype_node_id": "at0.1",
                                                    "value": {
                                                        "_type": "DV_CODED_TEXT",
                                                        "value": "Present",
                                                        "defining_code": {
                                                            "_type": "CODE_PHRASE",
                                                            "terminology_id": {
                                                                "_type": "TERMINOLOGY_ID",
                                                                "value": "local"
                                                            },
                                                            "code_string": "at0.2"
                                                        }
                                                    }
                                                }
                                            ]
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                },
                {
                    "_type": "OBSERVATION",
                    "name": {
                        "_type": "DV_TEXT",
                        "value": "Body temperature"
                    },
                    "archetype_details": {
                        "_type": "ARCHETYPED",
                        "archetype_id": {
                            "_type": "ARCHETYPE_ID",
                            "value": "openEHR-EHR-OBSERVATION.body_temperature.v2"
                        },
                        "rm_version": "1.0.2"
                    },
                    "archetype_node_id": "openEHR-EHR-OBSERVATION.body_temperature.v2",
                    "language": {
                        "_type": "CODE_PHRASE",
                        "terminology_id": {
                            "_type": "TERMINOLOGY_ID",
                            "value": "ISO_639-1"
                        },
                        "code_string": "en"
                    },
                    "encoding": {
                        "_type": "CODE_PHRASE",
                        "terminology_id": {
                            "_type": "TERMINOLOGY_ID",
                            "value": "IANA_character-sets"
                        },
                        "code_string": "UTF-8"
                    },
                    "subject": {
                        "_type": "PARTY_SELF"
                    },
                    "data": {
                        "_type": "HISTORY",
                        "name": {
                            "_type": "DV_TEXT",
                            "value": "History"
                        },
                        "archetype_node_id": "at0002",
                        "origin": {
                            "_type": "DV_DATE_TIME",
                            "value": "2020-03-11T00:00:00Z"
                        },
                        "events": [
                            {
                                "_type": "POINT_EVENT",
                                "name": {
                                    "_type": "DV_TEXT",
                                    "value": "Any event"
                                },
                                "archetype_node_id": "at0003",
                                "time": {
                                    "_type": "DV_DATE_TIME",
                                    "value": "2020-03-11T00:00:00Z"
                                },
                                "data": {
                                    "_type": "ITEM_TREE",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Tree"
                                    },
                                    "archetype_node_id": "at0001",
                                    "items": [
                                        {
                                            "_type": "ELEMENT",
                                            "name": {
                                                "_type": "DV_TEXT",
                                                "value": "Temperature"
                                            },
                                            "archetype_node_id": "at0004",
                                            "value": {
                                                "_type": "DV_QUANTITY",
                                                "magnitude": 37.8,
                                                "units": "Cel",
                                                "precision": 1
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        }
        self.assertDictEqual(self.canonical_structure, expected)
