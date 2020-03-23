import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default ({ history }) => {
  const [step, setStep] = useState('step1');
  // temporary
  const [email, setEmail] = useState('');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const handleConfirm = value => {
    // submit action();
    setStep(value);
  };
  const handleCreateProfile = (data, e) => {
    setEmail(data.email);
    setStep('step3');
  };
  const handleConfirmNhsNo = () => setStep('step2NhsNo');
  const handleConfirmNoNhsNo = () => setStep('step2NoNhsNo');
  return {
    step1: (
      <Step1
        matches={matches}
        handleConfirmNhsNo={handleConfirmNhsNo}
        handleConfirmNoNhsNo={handleConfirmNoNhsNo}
      />
    ),
    step2NhsNo: (
      <Step2 matches={matches} handleCreateProfile={handleCreateProfile} />
    ),
    step2NoNhsNo: (
      <Step2
        matches={matches}
        noNhsNo
        handleCreateProfile={handleCreateProfile}
      />
    ),
    step3: (
      <Step3
        history={history}
        email={email}
        matches={matches}
        handleConfirm={handleConfirm}
      />
    )
  }[step];
};
