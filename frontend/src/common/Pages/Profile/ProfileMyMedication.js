import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Typography, Box } from '@material-ui/core';
import uniquid from 'uniqid';
import RadioGroup from '../../Components/RadioGroup';
import Button from '../../Components/Button';
import texts from '../../../resources/texts';

export default ({ history }) => {
  const { handleSubmit, control, errors } = useForm();

  const onSubmit = data => {
    console.log(data);
    history.replace('/profile/past-medical-history');
  };
  return (
    <>
      <form id="profile-terms" onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" spacing={1} justify="space-around">
          <Grid item xs={12}>
            <Box mt={2}>
              <Typography align="center" variant="h4" component="h2">
                <Box fontWeight="fontWeightMedium">Profile Name</Box>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box ml={2}>
              <Typography align="left" variant="h5" component="h3">
                <Box fontWeight="fontWeightMedium">
                  {texts.PROFILE_HEART_TITLE}
                </Box>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box ml={2}>
              <Typography align="left" variant="body1" component="h4">
                {texts.PROFILE_MEDICATION_SUBTITLE}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box ml={2}>
              <Typography align="left" variant="caption" component="h4">
                {texts.PROFILE_MEDICATION_INTRO1}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box ml={2} mr={2}>
              <Typography align="left" variant="caption" component="h4">
                {texts.PROFILE_MEDICATION_INTRO2}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box style={{ width: '100%' }}>
              {texts.PROFILE_HEART_RADIO.map(question => {
                const { name, choices, label } = question;
                return (
                  <RadioGroup
                    key={uniquid()}
                    control={control}
                    name={name}
                    choices={choices}
                    label={label}
                    errors={errors}
                  />
                );
              })}
            </Box>
          </Grid>
          <Grid item width="100%">
            <Grid align="center">
              <Button
                color="success"
                variant="contained"
                type="submit"
                form="profile-terms"
                width={300}
              >
                {texts.BUTTON_CONTINUE}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
