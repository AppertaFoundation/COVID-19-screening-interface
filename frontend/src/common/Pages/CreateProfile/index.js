import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Step1 from './Step1';
import Step2NoNhsNo from './Step2NoNhsNo';
import Step2NhsNo from './Step2NhsNo';
import Step3 from './Step3';

export default () => {
  const [step, setStep] = useState('step2NhsNo');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const handleConfirm = value => setStep(value);
  return {
    step1: <Step1 matches={matches} handleConfirm={handleConfirm} />,
    step2NhsNo: <Step2NhsNo matches={matches} handleConfirm={handleConfirm} />,
    step2NoNhsNo: (
      <Step2NoNhsNo matches={matches} handleConfirm={handleConfirm} />
    ),
    step3: <Step3 matches={matches} handleConfirm={handleConfirm} />
  }[step];
};
