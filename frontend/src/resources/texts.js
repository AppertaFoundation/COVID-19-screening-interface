import React from 'react';
import { Link } from 'react-router-dom';
// Global
const BUTTON_CANCEL = 'Cancel';
const BUTTON_CONFIRM = 'Confirm';
const BUTTON_CREATE_ACCOUNT = ' CREATE ACCOUNT';
const BUTTON_SING_IN = 'SIGN IN';
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

const TERMS_NHS_NO_INFO =
  'Your NHS number will be used to connect you to your 111 provider or GP practice and improve the advice provided.';
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
  CREATE_PROFILE_SUBTITLE
};
