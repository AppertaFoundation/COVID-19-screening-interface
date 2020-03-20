from typing import Mapping


def canonical_covid_composition(minimal_structure: Mapping) -> dict:
    return {
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
                    "value": minimal_structure['clinicalAuthorId'],
                    "scheme": "HOSPITAL-NS"
                },
                "namespace": "HOSPITAL-NS",
                "type": "PERSON"
            },
            "name": minimal_structure['clinicalAuthorName']
        },
        "context": {
            "_type": "EVENT_CONTEXT",
            "start_time": {
                "_type": "DV_DATE_TIME",
                "value": minimal_structure['documentTime']
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
                        "value": minimal_structure['documentTime']
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
                                "value": minimal_structure['documentTime']
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
                                                    "value": minimal_structure['symptoms']['dateOfOnset'] + 'T00:00:00Z'
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
                                                    "value":minimal_structure['symptoms']['firstSymptomsPresenceText'],
                                                    "defining_code": {
                                                        "_type": "CODE_PHRASE",
                                                        "terminology_id": {
                                                            "_type": "TERMINOLOGY_ID",
                                                            "value": "local"
                                                        },
                                                        "code_string": minimal_structure['symptoms']['firstSymptomsPresenceCode']
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
                                                    "value": minimal_structure['symptoms']['coughPresenceText'],
                                                    "defining_code": {
                                                        "_type": "CODE_PHRASE",
                                                        "terminology_id": {
                                                            "_type": "TERMINOLOGY_ID",
                                                            "value": "local"
                                                        },
                                                        "code_string": minimal_structure['symptoms']['coughPresenceCode']
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
                                                    "value": minimal_structure['symptoms']['feverPresenceText'],
                                                    "defining_code": {
                                                        "_type": "CODE_PHRASE",
                                                        "terminology_id": {
                                                            "_type": "TERMINOLOGY_ID",
                                                            "value": "local"
                                                        },
                                                        "code_string": minimal_structure['symptoms']['feverPresenceCode']
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
                                                    "value": minimal_structure['symptoms']['difficultyBreathingPresenceText'],
                                                    "defining_code": {
                                                        "_type": "CODE_PHRASE",
                                                        "terminology_id": {
                                                            "_type": "TERMINOLOGY_ID",
                                                            "value": "local"
                                                        },
                                                        "code_string":  minimal_structure['symptoms']['difficultyBreathingPresenceCode']
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
                                                    "value": minimal_structure['symptoms']['soreThroatPresenceText'],
                                                    "defining_code": {
                                                        "_type": "CODE_PHRASE",
                                                        "terminology_id": {
                                                            "_type": "TERMINOLOGY_ID",
                                                            "value": "local"
                                                        },
                                                        "code_string": minimal_structure['symptoms']['soreThroatPresenceCode']
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
                        "value": minimal_structure['documentTime']
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
                                "value": minimal_structure['documentTime']
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
                                            "magnitude": minimal_structure['bodyTemp']['magnitude'],
                                            "units": minimal_structure['bodyTemp']['units'],
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
