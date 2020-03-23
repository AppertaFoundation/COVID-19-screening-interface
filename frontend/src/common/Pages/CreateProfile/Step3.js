import React, { useState, useContext } from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import ReactCodeInput from 'react-code-input';
import { AuthContext } from '../../../core/context/AuthContext';
import texts from '../../../resources/texts';
import Button from '../../Components/Button';
import Confirmation from './Confirmation';

const inputStyle = {
  fontFamily: 'monospace',
  margin: '4px',
  MozAppearance: 'textfield',
  width: '20px',
  fontSize: '14px',
  height: '32px',
  paddingLeft: '5px'
};

export default ({ history, matches, email }) => {
  const [open, setOpen] = useState(false);
  const { setAuthData } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const handleResendOnMobile = () => console.log('resend code on mobile');
  const handleResend = () => console.log('resend code');
  const setDialogTimeout = () => {
    setOpen(true);
    const timer1 = setTimeout(() => {
      setOpen(false);
      history.replace(user.data ? '/' : '/profile');
    }, 1000);
    return () => {
      clearTimeout(timer1);
    };
  };
  const handleConfirm = () => {
    setAuthData({ data: true });
    setDialogTimeout();
  };
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
      spacing={6}
    >
      <Confirmation open={open} setOpen={setOpen} email={email} />
      <Grid item xs={12}>
        <Typography align="center" variant="h4" component="h2">
          <Box
            fontWeight="fontWeightMedium"
            {...(matches ? { mt: 2 } : { mt: 1 })}
          >
            {texts.VERIFY_IDENTITY_TITLE}
          </Box>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" variant="h6" component="h3">
          <Box fontWeight="fontWeightMedium">
            {texts.VERIFY_IDENTITY_SUBTITLE}
          </Box>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          color="textSecondary"
          align="center"
          variant="body1"
          component="h3"
        >
          <Box fontWeight="fontWeightMedium">{texts.VERIFY_IDENTITY_TEXT}</Box>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ReactCodeInput fields={6} {...(matches ? {} : { inputStyle })} />
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Button
                width={300}
                onClick={handleConfirm}
                variant="contained"
                color="success"
              >
                {texts.BUTTON_CONTINUE}
              </Button>
            </Grid>
            <Grid item>
              <Button width={150} color="secondary" onClick={handleResend}>
                {texts.BUTTON_RESENT_CODE}
              </Button>
            </Grid>
            <Grid item>
              <Button
                width={300}
                color="secondary"
                onClick={handleResendOnMobile}
              >
                {texts.BUTTON_SEND_CODE_INTO_MOBILE}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
