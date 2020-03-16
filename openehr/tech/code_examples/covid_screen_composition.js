import axios from "axios";


const apiKEY = "Basic YmIyNjRiY2UtYzQwNy00OTgyLTkwMTctOTdkMzcyN2ZjZmE0OiQyYSQxMCQ2MTlraQ==";

const ehrId = '3e674739-950c-4b8a-976b-5aef21c618c5';
let compositionId = '';

const postCompositionEhrscape = async () =>{
    try {
        const result =  await axios({
            url:`https://cdr.code4health.org/rest/v1/composition/?ehrId=${ehrId}&templateId=openEHR-Suspected Covid-19 assessment.v0&format=FLAT`,
            method: 'post',
            headers: {Authorization: apiKEY, contentType: 'application/json'},
            data: targetCompositionFlat()
        });
        compositionId = (result.data.compositionUid);

        console.log(`compositionId: ${compositionId}`) ;
    } catch (err) {
        console.log(JSON.stringify(err.response));
        throw new Error('Unable to post Composition: ' + err.response.data);

    }
};

const postCompositionOpenEhrBetter = async () =>{
    try {
        const result =  await axios({
            url:  `https://cdr.code4health.org/rest/openehr/v1/composition/ehr/${ehrId}/composition`,
            method: 'post',
            headers: {Authorization: apiKEY, contentType: 'application/json',  accept: 'application/json'},
            data: targetCompositionRaw()
        });
        setCompositionId(result.data.compositionUid);

        console.log(`compositionId: ${compositionId}`) ;
    } catch (err) {
        console.log(JSON.stringify(err.response));
        throw new Error('Unable to post Composition: ' + err.response.data);

    }
};


const doc = {
     clinicalAuthorName: "Ian McNicoll",
     clinicalAuthorId: "134-4567",
     documentTime : "2020-03-11",
     symptoms : {
        firstSymptomsPresenceCode : "at0.3", //at0.2::Present [The symptom is present.] at0.3::Absent [The symptom is absent.] at0.4::Unknown [It is not known if the symptom is present.]
        firstSymptomsPresenceText : "Present",
        dateOfOnset : "2020-03-10",

         coughPresenceCode : "at0.1",  //at0.2::Present [The symptom is present.] at0.3::Absent [The symptom is absent.] at0.4::Unknown [It is not known if the symptom is present.]
        coughPresenceText : "Unknown",
        feverPresenceCode :"at0.3",  //at0.2::Present [The symptom is present.] at0.3::Absent [The symptom is absent.] at0.4::Unknown [It is not known if the symptom is present.]
        feverPresenceText :"Present",
        difficultyBreathingPresenceCode : "at0.3",  //at0.2::Present [The symptom is present.] at0.3::Absent [The symptom is absent.] at0.4::Unknown [It is not known if the symptom is present.]
        difficultyBreathingPresenceText : "Present",
        soreThroatPresenceCode : "at0.3",  //at0.2::Present [The symptom is present.] at0.3::Absent [The symptom is absent.] at0.4::Unknown [It is not known if the symptom is present.]
        soreThroatPresenceText : "Present",
         otherSymptom: [
             {
                 symptomNameText: "Green sputum",
                 symptomNameCode: "12345",
                 symptomNameTerminology: "SNOMED-CT"
             },
             {
                 symptomNameText: "Coughing blood",
                 symptomNameCode: "345134",
                 symptomNameTerminology: "SNOMED-CT"
             },
         ]
      },
      bodyTemp :
      {
        magnitude : 38.4,
        units: "Cel"
    },
    travelHistory : {
         recentTravelCode: "at0012", //at0112::Yes [The patient has recently traveled.] at0113::No [The patient has not recently traveled.] at0114::Unknown [Unknown.]
        recentTravelText: "Yes",
        returnDate : "2020-03-11"
    },
    infectionRiskAssessment : {
        contactConfirmedCaseCode : "at0018", //at0018::Present [The risk factor has been identified for this individual.] at0019::Absent [The risk factor has not been identified for this individual.] at0.15::Unknown [No information is available for this risk factor.
        contactConfirmedCaseText : "Present", //at0018::Present [The risk factor has been identified for this individual.] at0019::Absent [The risk factor has not been identified for this individual.] at0.15::Unknown [No information is available for this risk factor.
        contactSuspectedPneumoniaCode: "at0019", //at0018::Present [The risk factor has been identified for this individual.] at0019::Absent [The risk factor has not been identified for this individual.] at0.15::Unknown [No information is available for this risk factor.
        contactSuspectedPneumoniaText: "Present", //at0018::Present [The risk factor has been identified for this individual.] at0019::Absent [The risk factor has not been identified for this individual.] at0.15::Unknown [No information is available for this risk factor.
        contactBirdsInChinaCode: "at0.15", //at0018::Present [The risk factor has been identified for this individual.] at0019::Absent [The risk factor has not been identified for this individual.] at0.15::Unknown [No information is available for this risk factor.
        contactBirdsInChinaText: "Unknown", //at0018::Present [The risk factor has been identified for this individual.] at0019::Absent [The risk factor has not been identified for this individual.] at0.15::Unknown [No information is available for this risk factor.
        contactAvianFluCode: "at0.15", //at0018::Present [The risk factor has been identified for this individual.] at0019::Absent [The risk factor has not been identified for this individual.] at0.15::Unknown [No information is available for this risk factor.
        contactAvianFluText: "Unknown", //at0018::Present [The risk factor has been identified for this individual.] at0019::Absent [The risk factor has not been identified for this individual.] at0.15::Unknown [No information is available for this risk factor.
        contactSevereRespDiseaseCode: "at0019", //at0018::Present [The risk factor has been identified for this individual.] at0019::Absent [The risk factor has not been identified for this individual.] at0.15::Unknown [No information is available for this risk factor.
        contactSevereRespDiseaseText: "Absent", //at0018::Present [The risk factor has been identified for this individual.] at0019::Absent [The risk factor has not been identified for this individual.] at0.15::Unknown [No information is available for this risk factor.
        potentialLocalityExposureCode:"at0018", //at0018::Present [The risk factor has been identified for this individual.] at0019::Absent [The risk factor has not been identified for this individual.] at0.15::Unknown [No information is available for this risk factor.
        potentialLocalityExposureText:"Present", //at0018::Present [The risk factor has been identified for this individual.] at0019::Absent [The risk factor has not been identified for this individual.] at0.15::Unknown [No information is available for this risk factor.
        potentialOutbreakLocations: [
          {
              locationVisitedText: "Lombardy"

          }
       ],
      riskCode :"at0.16", // at0.16::Low risk [The risk of the a patient having a Covid-19 infection is assessed to be low.] at0.17::High risk [The risk of the a patient having a Covid-19 infection is assessed to be high.]
      riskText :"Low risk"
    },
    diagnosis: {
         //possible values as terminology::code::text
         //SNOMED-CT::840544004::Suspected disease caused by 2019 novel coronavirus
        // SNOMED-CT::840546002::Exposure to 2019 novel coronavirus
        // SNOMED-CT::840539006::Disease caused by 2019-nCoV
        //
        //
        diagnosisText: "Exposure to 2019 novel coronavirus",
        diagnosisCode: "840546002",
        diagnosisTerminology: "SNOMED-CT",
    },
    serviceRequest :{
        //possible values as terminology::code::text => serviceNameTerminology:: serviceNameCode::serviceNameText
        // SNOMED-CT::170499009::Isolation of infection contact
        // SNOMED-CT::225368008::Contact tracing

         serviceNameText: "Isolation of infection contact",
         serviceNameCode: "170499009",
         serviceNameTerminology: "SNOMED-CT",

        //possible values as terminology::code::text
        //SNOMED-CT::840544004::Suspected disease caused by 2019 novel coronavirus
        // SNOMED-CT::840546002::Exposure to 2019 novel coronavirus
        // SNOMED-CT::840539006::Disease caused by 2019-nCoV
        //
        //
        reasonforRequestText: "Exposure to 2019 novel coronavirus",
        reasonforRequestCode: "840546002",
        reasonforRequestTerminology: "SNOMED-CT",

    }

};


    const targetCompositionFlat = () => {
        return {
            "ctx/language": "en",
            "ctx/territory": "GB",
            "ctx/composer_name": doc.clinicalAuthorName,
            "ctx/composer_id": doc.clinicalAuthorId,
            "ctx/time" : doc.documentTime,
            "ctx/id_namespace": "HOSPITAL-NS",
            "ctx/id_scheme": "HOSPITAL-NS",
            "ctx/health_care_facility|name": "Hospital",
            "ctx/health_care_facility|id": "9091",

            "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/symptom_sign_name|code": "315642008",
            "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/symptom_sign_name|value": "Influenza-like symptoms",
            "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/first_onset_of_symptoms": doc.symptoms.dateOfOnset,
            "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/presence|code": doc.symptoms.firstSymptomsPresenceCode,

            "suspected_covid-19_risk_assessment/symptoms/cough:0/symptom_sign_name|code": "49727002",
            "suspected_covid-19_risk_assessment/symptoms/cough:0/symptom_sign_name|value": "Cough",
            "suspected_covid-19_risk_assessment/symptoms/cough:0/presence|code": doc.symptoms.coughPresenceCode,

            "suspected_covid-19_risk_assessment/symptoms/fever:0/symptom_sign_name|code": "386661006",
            "suspected_covid-19_risk_assessment/symptoms/fever:0/symptom_sign_name|value": "Fever",
            "suspected_covid-19_risk_assessment/symptoms/fever:0/presence|code": doc.symptoms.feverPresenceCode,

            "suspected_covid-19_risk_assessment/symptoms/difficulty_breathing:0/symptom_sign_name|code": "267036007",
            "suspected_covid-19_risk_assessment/symptoms/difficulty_breathing:0/symptom_sign_name|value": "Difficulty breathing",
            "suspected_covid-19_risk_assessment/symptoms/difficulty_breathing:0/presence|code": doc.symptoms.difficultyBreathingPresenceCode,

            "suspected_covid-19_risk_assessment/symptoms/sore_throat:0/symptom_sign_name|code": "162397003",
            "suspected_covid-19_risk_assessment/symptoms/sore_throat:0/symptom_sign_name|value": "Pain in throat",
            "suspected_covid-19_risk_assessment/symptoms/sore_throat:0/presence|code": doc.symptoms.soreThroatPresenceCode
        }
    };


const targetCompositionRaw = () => {
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
            "name": "Silvia Blake"
        },
      /* Pattern for self-assessment
       "composer": {
            "_type": "PARTY_SELF",
        },
      */
        "context": {

            "_type": "EVENT_CONTEXT",
            "start_time": {
                "_type": "DV_DATE_TIME",
                "value": doc.documentTime
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
            },
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
                        "value": doc.documentTime
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
                                "value": doc.documentTime
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
                                                    "value": "Presence"
                                                },
                                                "archetype_node_id": "at0.1",
                                                "value": {
                                                    "_type": "DV_CODED_TEXT",
                                                    "value":doc.symptoms.firstSymptomsPresenceText,
                                                    "defining_code": {
                                                        "_type": "CODE_PHRASE",
                                                        "terminology_id": {
                                                            "_type": "TERMINOLOGY_ID",
                                                            "value": "local"
                                                        },
                                                        "code_string": doc.symptoms.firstSymptomsPresenceCode
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
                                                    "value": doc.symptoms.coughPresenceText,
                                                    "defining_code": {
                                                        "_type": "CODE_PHRASE",
                                                        "terminology_id": {
                                                            "_type": "TERMINOLOGY_ID",
                                                            "value": "local"
                                                        },
                                                        "code_string": doc.symptoms.coughPresenceCode
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
                                            "value": "Other symptom"
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
                    "value": "Travel trip history"
                },
                "archetype_details": {
                    "_type": "ARCHETYPED",
                    "archetype_id": {
                        "_type": "ARCHETYPE_ID",
                        "value": "openEHR-EHR-OBSERVATION.travel_history.v0"
                    },
                    "rm_version": "1.0.2"
                },
                "archetype_node_id": "openEHR-EHR-OBSERVATION.travel_history.v0",
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
                    "archetype_node_id": "at0001",
                    "origin": {
                        "_type": "DV_DATE_TIME",
                        "value": doc.documentTime
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
                                "value": doc.documentTime
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
                                        "_type": "ELEMENT",
                                        "name": {
                                            "_type": "DV_TEXT",
                                            "value": "Recent travel"
                                        },
                                        "archetype_node_id": "at0111",
                                        "value": {
                                            "_type": "DV_CODED_TEXT",
                                            "value": doc.travelHistory.returnDate
                                        }
                                    },
                                    {
                                        "_type": "ELEMENT",
                                        "name": {
                                            "_type": "DV_TEXT",
                                            "value": "Date of return"
                                        },
                                        "archetype_node_id": "at0071",
                                        "value": {
                                            "_type": "DV_DATE_TIME",
                                            "value": doc.travelHistory.returnDate
                                        }
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
                "other_participations": [
                    {
                        "_type": "PARTICIPATION",
                        "function": {
                            "_type": "DV_TEXT",
                            "value": "requester"
                        },
                        "performer": {
                            "_type": "PARTY_IDENTIFIED",
                            "external_ref": {
                                "_type": "PARTY_REF",
                                "id": {
                                    "_type": "GENERIC_ID",
                                    "value": "199",
                                    "scheme": "HOSPITAL-NS"
                                },
                                "namespace": "HOSPITAL-NS",
                                "type": "ANY"
                            },
                            "name": "Dr. Marcus Johnson"
                        },
                        "mode": {
                            "_type": "DV_CODED_TEXT",
                            "value": "face-to-face communication",
                            "defining_code": {
                                "_type": "CODE_PHRASE",
                                "terminology_id": {
                                    "_type": "TERMINOLOGY_ID",
                                    "value": "openehr"
                                },
                                "code_string": "216"
                            }
                        }
                    },
                    {
                        "_type": "PARTICIPATION",
                        "function": {
                            "_type": "DV_TEXT",
                            "value": "performer"
                        },
                        "performer": {
                            "_type": "PARTY_IDENTIFIED",
                            "external_ref": {
                                "_type": "PARTY_REF",
                                "id": {
                                    "_type": "GENERIC_ID",
                                    "value": "198",
                                    "scheme": "HOSPITAL-NS"
                                },
                                "namespace": "HOSPITAL-NS",
                                "type": "ANY"
                            },
                            "name": "Lara Markham"
                        },
                        "mode": {
                            "_type": "DV_CODED_TEXT",
                            "value": "not specified",
                            "defining_code": {
                                "_type": "CODE_PHRASE",
                                "terminology_id": {
                                    "_type": "TERMINOLOGY_ID",
                                    "value": "openehr"
                                },
                                "code_string": "193"
                            }
                        }
                    }
                ],
                "data": {
                    "_type": "HISTORY",
                    "name": {
                        "_type": "DV_TEXT",
                        "value": "History"
                    },
                    "archetype_node_id": "at0002",
                    "origin": {
                        "_type": "DV_DATE_TIME",
                        "value": "2020-03-07T15:26:54.805Z"
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
                                "value": "2020-03-07T15:26:54.805Z"
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
                                            "magnitude": 0.0,
                                            "units": "Cel",
                                            "precision": 1
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            {
                "_type": "EVALUATION",
                "name": {
                    "_type": "DV_TEXT",
                    "value": "Covid-19 infection risk assessment"
                },
                "archetype_details": {
                    "_type": "ARCHETYPED",
                    "archetype_id": {
                        "_type": "ARCHETYPE_ID",
                        "value": "openEHR-EHR-EVALUATION.health_risk-covid.v0"
                    },
                    "rm_version": "1.0.2"
                },
                "archetype_node_id": "openEHR-EHR-EVALUATION.health_risk-covid.v0",
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
                    "_type": "ITEM_TREE",
                    "name": {
                        "_type": "DV_TEXT",
                        "value": "structure"
                    },
                    "archetype_node_id": "at0001",
                    "items": [
                        {
                            "_type": "ELEMENT",
                            "name": {
                                "_type": "DV_TEXT",
                                "value": "Health risk"
                            },
                            "archetype_node_id": "at0002.1",
                            "value": {
                                "_type": "DV_CODED_TEXT",
                                "value": "COVID-19 Risk assessment",
                                "defining_code": {
                                    "_type": "CODE_PHRASE",
                                    "terminology_id": {
                                        "_type": "TERMINOLOGY_ID",
                                        "value": "local"
                                    },
                                    "code_string": "at0.1"
                                }
                            }
                        },
                        {
                            "_type": "CLUSTER",
                            "name": {
                                "_type": "DV_TEXT",
                                "value": "Contact with confirmed case"
                            },
                            "archetype_node_id": "at0016",
                            "items": [
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Risk factor"
                                    },
                                    "archetype_node_id": "at0013.1",
                                    "value": {
                                        "_type": "DV_CODED_TEXT",
                                        "value": "Contact with confirmed Covid-19 case",
                                        "defining_code": {
                                            "_type": "CODE_PHRASE",
                                            "terminology_id": {
                                                "_type": "TERMINOLOGY_ID",
                                                "value": "local"
                                            },
                                            "code_string": "at0.9"
                                        }
                                    }
                                },
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Presence"
                                    },
                                    "archetype_node_id": "at0017",
                                    "value": {
                                        "_type": "DV_CODED_TEXT",
                                        "value": doc.infectionRiskAssessment.contactConfirmedCaseText,
                                        "defining_code": {
                                            "_type": "CODE_PHRASE",
                                            "terminology_id": {
                                                "_type": "TERMINOLOGY_ID",
                                                "value": "local"
                                            },
                                            "code_string": doc.infectionRiskAssessment.contactConfirmedCaseCode
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "_type": "CLUSTER",
                            "name": {
                                "_type": "DV_TEXT",
                                "value": "Contact with suspected pneumonia"
                            },
                            "archetype_node_id": "at0016",
                            "items": [
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Risk factor"
                                    },
                                    "archetype_node_id": "at0013.1",
                                    "value": {
                                        "_type": "DV_CODED_TEXT",
                                        "value": "Contact with suspected case/ pneumonia case",
                                        "defining_code": {
                                            "_type": "CODE_PHRASE",
                                            "terminology_id": {
                                                "_type": "TERMINOLOGY_ID",
                                                "value": "local"
                                            },
                                            "code_string": "at0.10"
                                        }
                                    }
                                },
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Presence"
                                    },
                                    "archetype_node_id": "at0017",
                                    "value": {
                                        "_type": "DV_CODED_TEXT",
                                        "value": doc.infectionRiskAssessment.contactSuspectedPneumoniaText,
                                        "defining_code": {
                                            "_type": "CODE_PHRASE",
                                            "terminology_id": {
                                                "_type": "TERMINOLOGY_ID",
                                                "value": "local"
                                            },
                                            "code_string": doc.infectionRiskAssessment.contactSuspectedPneumoniaCode
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "_type": "CLUSTER",
                            "name": {
                                "_type": "DV_TEXT",
                                "value": "Contact with birds"
                            },
                            "archetype_node_id": "at0016",
                            "items": [
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Risk factor"
                                    },
                                    "archetype_node_id": "at0013.1",
                                    "value": {
                                        "_type": "DV_CODED_TEXT",
                                        "value": "Contact with birds in China",
                                        "defining_code": {
                                            "_type": "CODE_PHRASE",
                                            "terminology_id": {
                                                "_type": "TERMINOLOGY_ID",
                                                "value": "local"
                                            },
                                            "code_string": "at0.11"
                                        }
                                    }
                                },
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Presence"
                                    },
                                    "archetype_node_id": "at0017",
                                    "value": {
                                        "_type": "DV_CODED_TEXT",
                                        "value": doc.infectionRiskAssessment.contactBirdsInChinaText,
                                        "defining_code": {
                                            "_type": "CODE_PHRASE",
                                            "terminology_id": {
                                                "_type": "TERMINOLOGY_ID",
                                                "value": "local"
                                            },
                                            "code_string": doc.infectionRiskAssessment.contactAvianFluCode
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "_type": "CLUSTER",
                            "name": {
                                "_type": "DV_TEXT",
                                "value": "Contact with Avian flu"
                            },
                            "archetype_node_id": "at0016",
                            "items": [
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Risk factor"
                                    },
                                    "archetype_node_id": "at0013.1",
                                    "value": {
                                        "_type": "DV_CODED_TEXT",
                                        "value": "Contact with confirmed human case of Avian flu in China",
                                        "defining_code": {
                                            "_type": "CODE_PHRASE",
                                            "terminology_id": {
                                                "_type": "TERMINOLOGY_ID",
                                                "value": "local"
                                            },
                                            "code_string": "at0.12"
                                        }
                                    }
                                },
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Presence"
                                    },
                                    "archetype_node_id": "at0017",
                                    "value": {
                                        "_type": "DV_CODED_TEXT",
                                        "value": doc.infectionRiskAssessment.contactAvianFluText,
                                        "defining_code": {
                                            "_type": "CODE_PHRASE",
                                            "terminology_id": {
                                                "_type": "TERMINOLOGY_ID",
                                                "value": "local"
                                            },
                                            "code_string": doc.infectionRiskAssessment.contactAvianFluCode
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "_type": "CLUSTER",
                            "name": {
                                "_type": "DV_TEXT",
                                "value": "Contact with severe resp disease"
                            },
                            "archetype_node_id": "at0016",
                            "items": [
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Risk factor"
                                    },
                                    "archetype_node_id": "at0013.1",
                                    "value": {
                                        "_type": "DV_CODED_TEXT",
                                        "value": "Contact with severe, unexplained respiratory disease",
                                        "defining_code": {
                                            "_type": "CODE_PHRASE",
                                            "terminology_id": {
                                                "_type": "TERMINOLOGY_ID",
                                                "value": "local"
                                            },
                                            "code_string": "at0.13"
                                        }
                                    }
                                },
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Presence"
                                    },
                                    "archetype_node_id": "at0017",
                                    "value": {
                                        "_type": "DV_CODED_TEXT",
                                        "value": doc.infectionRiskAssessment.contactSevereRespDiseaseText,
                                        "defining_code": {
                                            "_type": "CODE_PHRASE",
                                            "terminology_id": {
                                                "_type": "TERMINOLOGY_ID",
                                                "value": "local"
                                            },
                                            "code_string": doc.infectionRiskAssessment.contactSevereRespDiseaseCode
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            "_type": "CLUSTER",
                            "name": {
                                "_type": "DV_TEXT",
                                "value": "Potential locality exposure"
                            },
                            "archetype_node_id": "at0016",
                            "items": [
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Risk factor"
                                    },
                                    "archetype_node_id": "at0013.1",
                                    "value": {
                                        "_type": "DV_CODED_TEXT",
                                        "value": "Potential contact exposure based on location",
                                        "defining_code": {
                                            "_type": "CODE_PHRASE",
                                            "terminology_id": {
                                                "_type": "TERMINOLOGY_ID",
                                                "value": "local"
                                            },
                                            "code_string": "at0.14"
                                        }
                                    }
                                },
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Presence"
                                    },
                                    "archetype_node_id": "at0017",
                                    "value": {
                                        "_type": "DV_CODED_TEXT",
                                        "value": doc.infectionRiskAssessment.potentialLocalityExposureText,
                                        "defining_code": {
                                            "_type": "CODE_PHRASE",
                                            "terminology_id": {
                                                "_type": "TERMINOLOGY_ID",
                                                "value": "local"
                                            },
                                            "code_string": doc.infectionRiskAssessment.potentialLocalityExposureCode
                                        }
                                    }
                                },
                                {
                                    "_type": "CLUSTER",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Location-based exposure"
                                    },
                                    "archetype_details": {
                                        "_type": "ARCHETYPED",
                                        "archetype_id": {
                                            "_type": "ARCHETYPE_ID",
                                            "value": "openEHR-EHR-CLUSTER.outbreak_exposure.v0"
                                        },
                                        "rm_version": "1.0.2"
                                    },
                                    "archetype_node_id": "openEHR-EHR-CLUSTER.outbreak_exposure.v0",
                                    "items": [
                                        {
                                            "_type": "ELEMENT",
                                            "name": {
                                                "_type": "DV_TEXT",
                                                "value": "Outbreak  location"
                                            },
                                            "archetype_node_id": "at0007",
                                            "value": {
                                                "_type": "DV_TEXT",
                                                "value": doc.infectionRiskAssessment.potentialOutbreakLocations.locationVisitedText
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "_type": "ELEMENT",
                            "name": {
                                "_type": "DV_TEXT",
                                "value": "Risk assessment"
                            },
                            "archetype_node_id": "at0003",
                            "value": {
                                "_type": "DV_CODED_TEXT",
                                "value": "Exposure to 2019 novel coronavirus.",
                                "defining_code": {
                                    "_type": "CODE_PHRASE",
                                    "terminology_id": {
                                        "_type": "TERMINOLOGY_ID",
                                        "value": "SNOMED-CT"
                                    },
                                    "code_string": "840546002"
                                }
                            }
                        }
                    ]
                }
            },
            {
                "_type": "EVALUATION",
                "name": {
                    "_type": "DV_TEXT",
                    "value": "Other Health risk assessment"
                },
                "archetype_details": {
                    "_type": "ARCHETYPED",
                    "archetype_id": {
                        "_type": "ARCHETYPE_ID",
                        "value": "openEHR-EHR-EVALUATION.health_risk.v1"
                    },
                    "rm_version": "1.0.2"
                },
                "archetype_node_id": "openEHR-EHR-EVALUATION.health_risk.v1",
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
                    "_type": "ITEM_TREE",
                    "name": {
                        "_type": "DV_TEXT",
                        "value": "structure"
                    },
                    "archetype_node_id": "at0001",
                    "items": [
                        {
                            "_type": "ELEMENT",
                            "name": {
                                "_type": "DV_TEXT",
                                "value": "Health risk"
                            },
                            "archetype_node_id": "at0002",
                            "value": {
                                "_type": "DV_TEXT",
                                "value": "Health risk 64"
                            }
                        },
                        {
                            "_type": "CLUSTER",
                            "name": {
                                "_type": "DV_TEXT",
                                "value": "Risk factors"
                            },
                            "archetype_node_id": "at0016",
                            "items": [
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Risk factor"
                                    },
                                    "archetype_node_id": "at0013",
                                    "value": {
                                        "_type": "DV_TEXT",
                                        "value": "Risk factor 75"
                                    }
                                },
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Presence"
                                    },
                                    "archetype_node_id": "at0017",
                                    "value": {
                                        "_type": "DV_CODED_TEXT",
                                        "value": "Present",
                                        "defining_code": {
                                            "_type": "CODE_PHRASE",
                                            "terminology_id": {
                                                "_type": "TERMINOLOGY_ID",
                                                "value": "local"
                                            },
                                            "code_string": "at0018"
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "_type": "INSTRUCTION",
                "name": {
                    "_type": "DV_TEXT",
                    "value": "Service request"
                },
                "uid": {
                    "_type": "HIER_OBJECT_ID",
                    "value": "109b860f-8ff1-4cc6-a917-fe467001ae14"
                },
                "archetype_details": {
                    "_type": "ARCHETYPED",
                    "archetype_id": {
                        "_type": "ARCHETYPE_ID",
                        "value": "openEHR-EHR-INSTRUCTION.service_request.v1"
                    },
                    "rm_version": "1.0.2"
                },
                "archetype_node_id": "openEHR-EHR-INSTRUCTION.service_request.v1",
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
                "other_participations": [
                    {
                        "_type": "PARTICIPATION",
                        "function": {
                            "_type": "DV_TEXT",
                            "value": "requester"
                        },
                        "performer": {
                            "_type": "PARTY_IDENTIFIED",
                            "external_ref": {
                                "_type": "PARTY_REF",
                                "id": {
                                    "_type": "GENERIC_ID",
                                    "value": "199",
                                    "scheme": "HOSPITAL-NS"
                                },
                                "namespace": "HOSPITAL-NS",
                                "type": "ANY"
                            },
                            "name": "Dr. Marcus Johnson"
                        },
                        "mode": {
                            "_type": "DV_CODED_TEXT",
                            "value": "face-to-face communication",
                            "defining_code": {
                                "_type": "CODE_PHRASE",
                                "terminology_id": {
                                    "_type": "TERMINOLOGY_ID",
                                    "value": "openehr"
                                },
                                "code_string": "216"
                            }
                        }
                    },
                    {
                        "_type": "PARTICIPATION",
                        "function": {
                            "_type": "DV_TEXT",
                            "value": "performer"
                        },
                        "performer": {
                            "_type": "PARTY_IDENTIFIED",
                            "external_ref": {
                                "_type": "PARTY_REF",
                                "id": {
                                    "_type": "GENERIC_ID",
                                    "value": "198",
                                    "scheme": "HOSPITAL-NS"
                                },
                                "namespace": "HOSPITAL-NS",
                                "type": "ANY"
                            },
                            "name": "Lara Markham"
                        },
                        "mode": {
                            "_type": "DV_CODED_TEXT",
                            "value": "not specified",
                            "defining_code": {
                                "_type": "CODE_PHRASE",
                                "terminology_id": {
                                    "_type": "TERMINOLOGY_ID",
                                    "value": "openehr"
                                },
                                "code_string": "193"
                            }
                        }
                    }
                ],
                "narrative": {
                    "_type": "DV_TEXT",
                    "value": "Human readable instruction narrative"
                },
                "expiry_time": {
                    "_type": "DV_DATE_TIME",
                    "value": "2020-03-07T15:25:15.947Z"
                },
                "activities": [
                    {
                        "_type": "ACTIVITY",
                        "name": {
                            "_type": "DV_TEXT",
                            "value": "Current Activity"
                        },
                        "archetype_node_id": "at0001",
                        "description": {
                            "_type": "ITEM_TREE",
                            "name": {
                                "_type": "DV_TEXT",
                                "value": "Tree"
                            },
                            "archetype_node_id": "at0009",
                            "items": [
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Service name"
                                    },
                                    "archetype_node_id": "at0121",
                                    "value": {
                                        "_type": "DV_CODED_TEXT",
                                        "value": "D.56 description",
                                        "defining_code": {
                                            "_type": "CODE_PHRASE",
                                            "terminology_id": {
                                                "_type": "TERMINOLOGY_ID",
                                                "value": "SNOMED-CT"
                                            },
                                            "code_string": "170499009"
                                        }
                                    }
                                },
                                {
                                    "_type": "ELEMENT",
                                    "name": {
                                        "_type": "DV_TEXT",
                                        "value": "Reason for request"
                                    },
                                    "archetype_node_id": "at0062",
                                    "value": {
                                        "_type": "DV_CODED_TEXT",
                                        "value": "Isolation of infection contact",
                                        "defining_code": {
                                            "_type": "CODE_PHRASE",
                                            "terminology_id": {
                                                "_type": "TERMINOLOGY_ID",
                                                "value": "SNOMED-CT"
                                            },
                                            "code_string": "170499009"
                                        }
                                    }
                                }
                            ]
                        },
                        "timing": {
                            "_type": "DV_PARSABLE",
                            "value": "R5/2020-03-07T15:00:00Z/P2M",
                            "formalism": "timing"
                        },
                        "action_archetype_id": "/.*/"
                    }
                ]
            }
        ]
    }
};

