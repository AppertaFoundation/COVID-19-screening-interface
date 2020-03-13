const SYMPTOMPS_OPTIONS = [
  {
    id: 'present',
    name: 'Yes'
  },
  {
    id: 'unknown',
    name: 'No'
  }
];
const SYMPTOMPS = [
  {
    name: 'cough_presence',
    choices: SYMPTOMPS_OPTIONS,
    label: 'Does the patient have a cough?'
  },
  {
    name: 'fever_presence',
    choices: SYMPTOMPS_OPTIONS,
    label: 'Does the patient have a fever?'
  },
  {
    name: 'difficulty_breathing_presence',
    choices: SYMPTOMPS_OPTIONS,
    label: 'Does the patient have a difficulty breathing?'
  },
  {
    name: 'sore_throat_presence',
    choices: SYMPTOMPS_OPTIONS,
    label: 'Does the patient have a sore throat?'
  }
];

const LABEL_ASSESSMENT = 'COVID- 19 Assessment';

export default {
  SYMPTOMPS,
  LABEL_ASSESSMENT
};
