const AVAIBLE_SYMPTOMS = [
  'cought',
  'fever',
  'difficultyBreathing',
  'soreThroat'
];

const SYMPTOMPS_OPTIONS = symptom =>
  ({
    cought: [
      {
        id: 'yes',
        name: 'Yes'
      },
      {
        id: 'no',
        name: 'No'
      }
    ],
    fever: [
      {
        id: 'yes',
        name: 'Yes'
      },
      {
        id: 'no',
        name: 'No'
      }
    ],
    difficultyBreathing: [
      {
        id: 'yes',
        name: 'Yes'
      },
      {
        id: 'no',
        name: 'No'
      }
    ],
    soreThroat: [
      {
        id: 'yes',
        name: 'Yes'
      },
      {
        id: 'no',
        name: 'No'
      }
    ]
  }[symptom]);

const SYMPTOMPS = symptom => ({
  cought: {
    name: 'symptoms.coughPresenceCode',
    choices: SYMPTOMPS_OPTIONS(symptom),
    label: 'Does the patient have a cough?'
  },
  fever: {
    name: 'symptoms.feverPresenceCode',
    choices: SYMPTOMPS_OPTIONS(symptom),
    label: 'Does the patient have a fever?'
  },
  difficultyBreathing: {
    name: 'symptoms.difficultyBreathingPresenceCod',
    choices: SYMPTOMPS_OPTIONS(symptom),
    label: 'Does the patient have a difficulty breathing?'
  },
  soreThroat: {
    name: 'symptoms.soreThroatPresenceCode',
    choices: SYMPTOMPS_OPTIONS(symptom),
    label: 'Does the patient have a sore throat?'
  }
});

const LABEL_ASSESSMENT = 'COVID- 19 Assessment';

export default {
  SYMPTOMPS_OPTIONS,
  SYMPTOMPS,
  AVAIBLE_SYMPTOMS,
  LABEL_ASSESSMENT
};
