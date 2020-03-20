import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ReactCodeInput from 'react-code-input';
import texts from '../../../resources/texts';
import Button from '../../Components/Button';

const inputStyle = {
  fontFamily: 'monospace',
  margin: '4px',
  MozAppearance: 'textfield',
  width: '20px',
  fontSize: '14px',
  height: '32px',
  paddingLeft: '5px'
};

export default ({ matches, handleConfirm }) => {
  const handleConfirmNhsNo = () => handleConfirm('step2NhsNo');
  const handleConfirmNoNhsNo = () => handleConfirm('step2NoNhsNo');

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
      spacing={8}
    >
      <Grid item xs={12}>
        <Typography align="center" variant="h4" component="h2">
          <Box
            fontWeight="fontWeightMedium"
            {...(matches ? { mt: 2 } : { mt: 1 })}
          >
            {texts.CREATE_PROFILE_TITLE}
          </Box>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" variant="h6" component="h3">
          <Box fontWeight="fontWeightMedium" {...(matches ? { mt: 8 } : {})}>
            {texts.CREATE_PROFILE_SUBTITLE_NHS_NO}
          </Box>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ReactCodeInput
          type="number"
          fields={11}
          {...(matches ? {} : { inputStyle })}
        />
      </Grid>
      <Grid item xs={12}>
        <Box>
          <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Button width={150} onClick={handleConfirmNhsNo} type="secondary">
                {texts.CREATE_PROFILE_NO_NHS_BUTTON}
              </Button>
            </Grid>
            <Grid item>
              <Button
                width={150}
                type="success"
                variant="contained"
                onClick={handleConfirmNoNhsNo}
              >
                {texts.BUTTON_CONFIRM}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
