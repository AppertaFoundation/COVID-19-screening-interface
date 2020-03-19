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


// the ui object which is populated from React UI
const ui = {
     clinicalAuthorName: "Ian McNicoll",
     clinicalAuthorId: "134-4567",
     documentTime : "2020-03-11T00:00:00Z",
     symptoms : {
        firstSymptomsPresenceCode : "", //at0.2::Present [The symptom is present.] at0.3::Absent [The symptom is absent.] at0.4::Unknown [It is not known if the symptom is present.]
        firstSymptomsPresenceText : "Present",
        dateOfOnset : "2020-03-11T00:00:00Z",

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
        magnitude : 38.4, // >= 0 <=100 1 decimal place
        units: "Cel"
    },
    travelHistory : {
         recentTravelCode: "at0012", //at0112::Yes [The patient has recently traveled.] at0113::No [The patient has not recently traveled.] at0114::Unknown [Unknown.]
        recentTravelText: "Yes",
        returnDate : "2020-03-11T00:00:00Z"
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
              locationVisitedText: "Lombardy" ///Free text or pick from external list

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
            "ctx/composer_name": ui.clinicalAuthorName,
            "ctx/composer_id": ui.clinicalAuthorId,
            "ctx/time" :  "2020-03-11T00:00:00Z",
            "ctx/id_namespace": "HOSPITAL-NS",
            "ctx/id_scheme": "HOSPITAL-NS",
            "ctx/health_care_facility|name": "Hospital",
            "ctx/health_care_facility|id": "9091",

            "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/symptom_sign_name|code": "315642008",
            "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/symptom_sign_name|value": "Influenza-like symptoms",
            "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/first_onset_of_symptoms": ui.symptoms.dateOfOnset,
            "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/presence|code": ui.symptoms.firstSymptomsPresenceCode,

            "suspected_covid-19_risk_assessment/symptoms/cough:0/symptom_sign_name|code": "49727002",
            "suspected_covid-19_risk_assessment/symptoms/cough:0/symptom_sign_name|value": "Cough",
            "suspected_covid-19_risk_assessment/symptoms/cough:0/presence|code": ui.symptoms.coughPresenceCode,

            "suspected_covid-19_risk_assessment/symptoms/fever:0/symptom_sign_name|code": "386661006",
            "suspected_covid-19_risk_assessment/symptoms/fever:0/symptom_sign_name|value": "Fever",
            "suspected_covid-19_risk_assessment/symptoms/fever:0/presence|code": ui.symptoms.feverPresenceCode,

            "suspected_covid-19_risk_assessment/symptoms/difficulty_breathing:0/symptom_sign_name|code": "267036007",
            "suspected_covid-19_risk_assessment/symptoms/difficulty_breathing:0/symptom_sign_name|value": "Difficulty breathing",
            "suspected_covid-19_risk_assessment/symptoms/difficulty_breathing:0/presence|code": ui.symptoms.difficultyBreathingPresenceCode,

            "suspected_covid-19_risk_assessment/symptoms/sore_throat:0/symptom_sign_name|code": "162397003",
            "suspected_covid-19_risk_assessment/symptoms/sore_throat:0/symptom_sign_name|value": "Pain in throat",
            "suspected_covid-19_risk_assessment/symptoms/sore_throat:0/presence|code": ui.symptoms.soreThroatPresenceCode
        }
    };

//Example of an expected ui object as populated by the React UI
const expected = {
    'clinicalAuthorName': "Dr Fred Bloggs",
    'clinicalAuthorId': "134-4567",
    'documentTime': "2020-03-11T00:00:00Z",
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
        'soreThroatPresenceText': "Present"
    },
    'bodyTemp': {
        'magnitude': 38.4,
        'units': "Cel"
    }
}

const expectedCompositionFlat = () => {
    return {
        "ctx/language": "en",
        "ctx/territory": "GB",
        "ctx/composer_name": "Dr Fred Bloggs",
        "ctx/composer_id": "134-4567",
        "ctx/time" :  "2020-03-11T00:00:00Z",
        "ctx/id_namespace": "HOSPITAL-NS",
        "ctx/id_scheme": "HOSPITAL-NS",
        "ctx/health_care_facility|name": "Hospital",
        "ctx/health_care_facility|id": "9091",

        "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/symptom_sign_name|code": "315642008",
        "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/symptom_sign_name|value": "Influenza-like symptoms",
        "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/first_onset_of_symptoms": "2020-03-11T00:00:00Z",
        "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/presence|code": "at0.2",
        "suspected_covid-19_risk_assessment/symptoms/influenza-like_symptoms:0/presence|value": "Present",

        "suspected_covid-19_risk_assessment/symptoms/cough:0/symptom_sign_name|code": "49727002",
        "suspected_covid-19_risk_assessment/symptoms/cough:0/symptom_sign_name|value": "Cough",
        "suspected_covid-19_risk_assessment/symptoms/cough:0/presence|code": "at0.4",
        "suspected_covid-19_risk_assessment/symptoms/cough:0/presence|value": "Unknown",

        "suspected_covid-19_risk_assessment/symptoms/fever:0/symptom_sign_name|code": "386661006",
        "suspected_covid-19_risk_assessment/symptoms/fever:0/symptom_sign_name|value": "Fever",
        "suspected_covid-19_risk_assessment/symptoms/fever:0/presence|code":  "at0.3",
        "suspected_covid-19_risk_assessment/symptoms/fever:0/presence|value":  "Present",

        "suspected_covid-19_risk_assessment/symptoms/difficulty_breathing:0/symptom_sign_name|code": "267036007",
        "suspected_covid-19_risk_assessment/symptoms/difficulty_breathing:0/symptom_sign_name|value": "Difficulty breathing",
        "suspected_covid-19_risk_assessment/symptoms/difficulty_breathing:0/presence|code": "at0.2",
        "suspected_covid-19_risk_assessment/symptoms/difficulty_breathing:0/presence|value": "Present",

        "suspected_covid-19_risk_assessment/symptoms/sore_throat:0/symptom_sign_name|code": "162397003",
        "suspected_covid-19_risk_assessment/symptoms/sore_throat:0/symptom_sign_name|value": "Pain in throat",
        "suspected_covid-19_risk_assessment/symptoms/sore_throat:0/presence|code":  "at0.2",
        "suspected_covid-19_risk_assessment/symptoms/sore_throat:0/presence|value": "Present",

        "suspected_covid-19_risk_assessment/body_temperature/temperature|magnitude": 37.8,
        "suspected_covid-19_risk_assessment/body_temperature/temperature|unit": "Cel"
    }
};

// Expected Raw Composition format after variables are substituted

const expectedCompositionRaw = () =>  {

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
                                                  "value": "Present",
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
};

// The target RAW format Composition before variables are substituted
//

const targetCompositionRaw = () =>  {


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
                    "value": ui.clinicalAuthorId,
                    "scheme": "HOSPITAL-NS"
                },
                "namespace": "HOSPITAL-NS",
                "type": "PERSON"
            },
            "name": ui.clinicalAuthorName
        },
        "context": {
            "_type": "EVENT_CONTEXT",
            "start_time": {
                "_type": "DV_DATE_TIME",
                "value": ui.documentTime
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
                        "value":ui.documentTime
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
                                "value": ui.documentTime
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
                                                    "value": ui.symptoms.dateOfOnset
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
                                                    "value":ui.symptoms.firstSymptomsPresenceText,
                                                    "defining_code": {
                                                        "_type": "CODE_PHRASE",
                                                        "terminology_id": {
                                                            "_type": "TERMINOLOGY_ID",
                                                            "value": "local"
                                                        },
                                                        "code_string": ui.symptoms.firstSymptomsPresenceCode
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
                                                    "value": ui.symptoms.coughPresenceText,
                                                    "defining_code": {
                                                        "_type": "CODE_PHRASE",
                                                        "terminology_id": {
                                                            "_type": "TERMINOLOGY_ID",
                                                            "value": "local"
                                                        },
                                                        "code_string": ui.symptoms.coughPresenceText
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
                                                    "value":ui.symptoms.feverPresenceText,
                                                    "defining_code": {
                                                        "_type": "CODE_PHRASE",
                                                        "terminology_id": {
                                                            "_type": "TERMINOLOGY_ID",
                                                            "value": "local"
                                                        },
                                                        "code_string": ui.symptoms.feverPresenceCode
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
                                                    "value": ui.symptoms.difficultyBreathingPresenceText,
                                                    "defining_code": {
                                                        "_type": "CODE_PHRASE",
                                                        "terminology_id": {
                                                            "_type": "TERMINOLOGY_ID",
                                                            "value": "local"
                                                        },
                                                        "code_string":  ui.symptoms.difficultyBreathingPresenceCode
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
                                                    "value": ui.symptoms.soreThroatPresenceText,
                                                    "defining_code": {
                                                        "_type": "CODE_PHRASE",
                                                        "terminology_id": {
                                                            "_type": "TERMINOLOGY_ID",
                                                            "value": "local"
                                                        },
                                                        "code_string": ui.symptoms.soreThroatPresenceCode
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
                        "value": ui.documentTime
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
                                "value": ui.documentTime
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
                                            "magnitude":ui.bodyTemp,
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
};




