import React from 'react';
import { Link } from 'react-router-dom';
// Global
const BUTTON_CANCEL = 'Cancel';
const BUTTON_CONFIRM = 'Confirm';
const BUTTON_CREATE_ACCOUNT = ' CREATE ACCOUNT';
const BUTTON_SING_IN = 'SIGN IN';
const BUTTON_CONTINUE = 'Continue';
const BUTTON_CONTINUE2 = 'No, Continue';

// Login/ create account
const INTRO_TEXT = ' Welcome to ....., your digital health provider';
const ACCEPT_TERMS = 'Agree & Continue';
const EMERGENCY_CHECK_TITLE = 'Check it’s not an emergency';
const EMERGENCY_CHECK_SUBTITLE = 'Call 999 now if you have:';
const EMERGENCY_BUTTON_CONFIRM = 'I have none of these';
const EMERGENCY_CASES = [
  {
    value: 'Signs of a heart attack',
    desc:
      ' - pain like a very tight band, heavy weight or squeezing in the centre of your chest'
  },
  {
    value: 'Signs of a stroke',
    desc:
      ' - face drooping on one side, can’t hold both arms up, difficulty speaking'
  },
  {
    value: 'Severe difficulty breathing',
    desc:
      ' - gasping, not being able to get words out, choking or lips turning blue'
  },
  {
    value: 'Heavy bleeding',
    desc: ' - that won’t stop'
  },
  {
    value: 'Severe injuries',
    desc: ' - or deep cuts after a serious accident'
  },
  {
    value: 'Seizure (fit)',
    desc:
      '- someone is shaking or jerking because of a fit, or is unconscious (can’t be woken up)'
  },
  {
    value: 'Sudden, rapid swelling',
    desc: '- of the eyes, lips, mouth, throat or tongue'
  }
];

const TERMS_INTRO =
  'To provide the best experience and advice, we need you to provide a few details. This should take around 10 minutes.';

const TERMS_TEXT = ({ terms, conditions }) => (
  <>
    By using this application, you agree to our
    <Link to={terms}> Terms & Conditions </Link> and{' '}
    <Link to={conditions}>Privacy Policy</Link>, and that you areat least 16
    years of age and using the aplication for yourself only.
  </>
);

const CREATE_PROFILE_TITLE = 'Create Profile';
const CREATE_PROFILE_NO_NHS_BUTTON = 'I don’t know it';
const CREATE_PROFILE_SUBTITLE_NHS_NO = 'Enter your NHS number';
const CREATE_PROFILE_SUBTITLE = 'General Information';
const VERIFY_IDENTITY_TITLE = 'Verify Your Identity';
const VERIFY_IDENTITY_SUBTITLE = 'We’ve emailed you a verification code';
const VERIFY_IDENTITY_TEXT =
  'Please check your email da**********@g*****.com for a six-digit code and enter it in the box below to log in to your new health profile';
const BUTTON_RESENT_CODE = 'Resend code';
const BUTTON_SEND_CODE_INTO_MOBILE = 'Send to mobile phone instead';
const TERMS_NHS_NO_INFO =
  'Your NHS number will be used to connect you to your 111 provider or GP practice and improve the advice provided.';
const REGISTRATION_COMPLETE = 'Registration complete';

// Profile
const PROFILE_TERMS_TITLE = 'Congratulaitons on your registration....';
const PROFILE_TERMS_SUBTITLE =
  'General blurb about need for profile information and consent';

// questions
const RADIO_OPTIONS = [
  {
    id: 'yes',
    name: 'Yes'
  },
  {
    id: 'no',
    name: 'No'
  }
];
const PROFILE_TERMS_RADIO = [
  {
    name: 'provideA',
    choices: RADIO_OPTIONS,
    label: 'Do you provide consent for A?'
  },
  {
    name: 'provideB',
    choices: RADIO_OPTIONS,
    label: 'Do you provide consent for B?'
  },
  {
    name: 'provideC',
    choices: RADIO_OPTIONS,
    label: 'Do you provide consent for C?'
  },
  {
    name: 'provideD',
    choices: RADIO_OPTIONS,
    label: 'Do you provide consent for D?'
  }
];

const PROFILE_HEART_TITLE = 'My Health';
const PROFILE_HEART_SUBTITLE = 'Heart and Circulation';
const PROFILE_OTHER_SUBTITLE = 'Other';
const PROFILE_MEDICATION_SUBTITLE = 'My Medication';

const PROFILE_HEART_RADIO = [
  {
    name: 'problemsWithHeart',
    choices: RADIO_OPTIONS,
    label: 'Do you have any problems with your heart?'
  },
  {
    name: 'hadHeartAtack',
    choices: RADIO_OPTIONS,
    label: 'Have you ever had a heart attack?'
  },
  {
    name: 'sufferedStroke',
    choices: RADIO_OPTIONS,
    label: 'Do you have an irregular heart beat?'
  },
  {
    name: 'bloodPressureIssue',
    choices: RADIO_OPTIONS,
    label:
      'Do you have a problem with blood pressure or take medication to control it?'
  }
];

const PROFILE_MEDICATION_RADIO = [
  {
    name: 'problemsWithHeart',
    choices: RADIO_OPTIONS,
    label: 'Are you taking blood thinners?'
  },
  {
    name: 'hadHeartAtack',
    choices: RADIO_OPTIONS,
    label: 'Are you taking any heart medication that ends in “olol”?'
  },
  {
    name: 'sufferedStroke',
    choices: RADIO_OPTIONS,
    label: 'Are you taking any medication that ends in “pril” or “sartan”?'
  },
  {
    name: 'bloodPressureIssue',
    choices: RADIO_OPTIONS,
    label: 'Do you take any inhalers for asthma or COPD?'
  },
  {
    name: 'bloodPressureIssue',
    choices: RADIO_OPTIONS,
    label:
      'Do you take insulin or injectable medicine to control blood sugar levels?'
  }
];

const PROFILE_OTHER_RADIO = [
  {
    name: 'problemsWithHeart',
    choices: RADIO_OPTIONS,
    label:
      'Do you have any problems with your breathing e.g. asthma or chronic obstructive pulmonary disease (COPD)?'
  },
  {
    name: 'hadHeartAtack',
    choices: RADIO_OPTIONS,
    label: "Do you have epilepsy or Parkinson's disease?"
  },
  {
    name: 'sufferedStroke',
    choices: RADIO_OPTIONS,
    label: 'Do you have Type 1 or Type 2 diabetes?'
  },
  {
    name: 'bloodPressureIssue',
    choices: RADIO_OPTIONS,
    label: 'Do you have any thyroid problems?'
  },
  {
    name: 'bloodPressureIssue',
    choices: RADIO_OPTIONS,
    label: 'Do you have any kidney problems?'
  },
  {
    name: 'bloodPressureIssue',
    choices: RADIO_OPTIONS,
    label: 'Do you have any problems with circulation in your legs?'
  }
];

const PROFILE_MEDICATION_INTRO1 =
  'People take a wide variety of medications, tablets or inhalers. It will help your care to know what medications you take and some are particularly important to know about.';
const PROFILE_MEDICATION_INTRO2 =
  'This information could help those looking after you make better decisions about the safest way to look after you.';

const PROFILE_PAST_MEDICAL_TITLE = 'Past Medical History';
const PROFILE_PAST_MEDICAL_SUBTITLE = 'My Medication Details';
const PROFILE_PAST_MEDICAL_INTRO =
  'Are there any other medications you would like us to record that you think are particularly important to you in managing your illness?';

const PROFILE_DASI_TITLE = 'My Fitness and Activity';
const PROFILE_DASI_SUBTITLE =
  'Before feeling ill, were you able to do the following?';
const PROFILE_DASI_RADIO = [
  {
    name: 'problemsWithHeart',
    choices: RADIO_OPTIONS,
    label: 'Walk around the house'
  },
  {
    name: 'hadHeartAtack',
    choices: RADIO_OPTIONS,
    label:
      'Take care of yourself e.g. eating, dressing, bathing, using the toilet'
  },
  {
    name: 'sufferedStroke',
    choices: RADIO_OPTIONS,
    label: 'Take a short walk outside'
  },
  {
    name: 'bloodPressureIssue',
    choices: RADIO_OPTIONS,
    label: 'Do light housework e.g. dusting, washing dishes'
  },
  {
    name: 'bloodPressureIssue',
    choices: RADIO_OPTIONS,
    label: 'Climb a flight of stairs or walk up a hi'
  },
  {
    name: 'bloodPressureIssue',
    choices: RADIO_OPTIONS,
    label: 'Run a short distance'
  }
];
const PROFILE_DISABILITY_TITLE = '‘Special considerations’';
const PROFILE_DISABILITY_RADIO = {
  name: 'problemsWithHeart',
  choices: RADIO_OPTIONS,
  label: 'Do you have a disability?'
};
const PROFILE_COMPLITE = 'Profile complete';
const BUTTON_ADD_FAMILY = 'Add Family Member';
export default {
  EMERGENCY_CASES,
  EMERGENCY_CHECK_SUBTITLE,
  EMERGENCY_CHECK_TITLE,
  EMERGENCY_BUTTON_CONFIRM,
  BUTTON_CANCEL,
  BUTTON_SING_IN,
  BUTTON_CREATE_ACCOUNT,
  INTRO_TEXT,
  ACCEPT_TERMS,
  TERMS_INTRO,
  TERMS_TEXT,
  TERMS_NHS_NO_INFO,
  CREATE_PROFILE_TITLE,
  CREATE_PROFILE_NO_NHS_BUTTON,
  BUTTON_CONFIRM,
  CREATE_PROFILE_SUBTITLE_NHS_NO,
  CREATE_PROFILE_SUBTITLE,
  VERIFY_IDENTITY_SUBTITLE,
  VERIFY_IDENTITY_TEXT,
  VERIFY_IDENTITY_TITLE,
  BUTTON_RESENT_CODE,
  BUTTON_SEND_CODE_INTO_MOBILE,
  BUTTON_CONTINUE,
  REGISTRATION_COMPLETE,
  PROFILE_TERMS_TITLE,
  PROFILE_TERMS_SUBTITLE,
  PROFILE_TERMS_RADIO,
  PROFILE_HEART_TITLE,
  PROFILE_HEART_SUBTITLE,
  PROFILE_HEART_RADIO,
  PROFILE_OTHER_SUBTITLE,
  PROFILE_MEDICATION_RADIO,
  PROFILE_OTHER_RADIO,
  PROFILE_MEDICATION_SUBTITLE,
  PROFILE_MEDICATION_INTRO1,
  PROFILE_MEDICATION_INTRO2,
  PROFILE_PAST_MEDICAL_TITLE,
  PROFILE_PAST_MEDICAL_SUBTITLE,
  PROFILE_PAST_MEDICAL_INTRO,
  BUTTON_CONTINUE2,
  PROFILE_DASI_TITLE,
  PROFILE_DASI_SUBTITLE,
  PROFILE_DASI_RADIO,
  PROFILE_DISABILITY_TITLE,
  PROFILE_DISABILITY_RADIO,
  PROFILE_COMPLITE,
  BUTTON_ADD_FAMILY
};
