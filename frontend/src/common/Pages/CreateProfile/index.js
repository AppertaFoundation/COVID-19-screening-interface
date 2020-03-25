import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

export default ({ history }) => {
  const [step, setStep] = useState('step1');
  // temporary
  const [email, setEmail] = useState('');
  const [openPostCodeValid, setOpenPostCodeValid] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  // method which should validate linked postcode gp 
  const checkPostcode = () => false ? setStep('step4NhsNo') : setOpenPostCodeValid(true);

  const handleConfirm = value => {
    // submit action();
    setStep(value);
  };
  const handleCreateProfile = data => {
    setEmail(data.email);
    setStep('step4');
  };
  const handleConfirmNhsNo = () => setStep('step2');
  const handleConfirmNoNhsNo = () => setStep('step3NoNhsNo');
  const handleConfirmPostCode = () => {
    checkPostcode();
  };
  const tryAgainYes = () => setOpenPostCodeValid('step1');
  const tryAgainNo = () => setStep('step3NoNhsNo');
  const handleClose = () => setOpenPostCodeValid(false);
  return {
    step1: (
      <Step1
        matches={matches}
        handleConfirmNhsNo={handleConfirmNhsNo}
        handleConfirmNoNhsNo={handleConfirmNoNhsNo}
      />
    ),
    step2: (
      <Step2
        matches={matches}
        handleConfirmPostCode={handleConfirmPostCode}
        tryAgainYes={tryAgainYes}
        tryAgainNo={tryAgainNo}
        open={openPostCodeValid}
        onClose={handleClose}
      />
    ),
    step3NhsNo: (
      <Step3 matches={matches} handleCreateProfile={handleCreateProfile} />
    ),
    step3NoNhsNo: (
      <Step3
        matches={matches}
        noNhsNo
        handleCreateProfile={handleCreateProfile}
      />
    ),
    step4: (
      <Step4
        history={history}
        email={email}
        matches={matches}
        handleConfirm={handleConfirm}
      />
    )
  }[step];
};
