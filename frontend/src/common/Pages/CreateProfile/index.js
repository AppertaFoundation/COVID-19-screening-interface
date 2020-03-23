import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export default () => {
  const [step, setStep] = useState('step3');
  //temporary
  const [email, setEmail] = useState('');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const handleConfirm = value => {
    //submit action();
    setStep(value);
  }
  const handleCreateProfile = data => {
    setEmail(data.email)
    setStep('step2NhsNo');
  }
  const handleConfirmNhsNo = () => setStep('step2NhsNo');
  const handleConfirmNoNhsNo = () => setStep('step2NoNhsNo');
  return {
    step1: <Step1 matches={matches} handleConfirmNhsNo={handleConfirmNhsNo} handleConfirmNoNhsNo={handleConfirmNoNhsNo} />,
    step2NhsNo: <Step2 handleCreateProfile={handleCreateProfile} />,
    step2NoNhsNo: (
      <Step2 noNhsNo handleConfirm={handleConfirm} />
    ),
    step3: <Step3 matches={matches} handleConfirm={handleConfirm} />
  }[step];
};
