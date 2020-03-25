import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Typography, Box } from '@material-ui/core';
import uniquid from 'uniqid';
import Switch from '../../Components/Switch';
import Button from '../../Components/Button';
import texts from '../../../resources/texts';

export default ({ history }) => {
  const { handleSubmit, register, unregister, errors, watch } = useForm();

  const onSubmit = data => {
    // submit data action
    history.replace('/profile/heart');
  };
  return (
    <>
      <form id="profile-terms" onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" justify="space-around">
          <Grid item xs={12}>
            <Box mt={2}>
              <Typography align="center" variant="h4" component="h2">
                <Box fontWeight="fontWeightMedium">
                  {texts.PROFILE_TERMS_TITLE}
                </Box>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box m={2}>
              <Typography
                variant="body1"
                component="h3"
              >
                <Box fontWeight="fontWeightMedium">{texts.PROFILE_TERMS_INTRO}</Box>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box m={2} >
              <Switch
                key={uniquid()}
                register={register}
                unregister={unregister}
                options={texts.PROFILE_TERMS_SWITCH}
                errors={errors}
                watch={watch}
              />
            </Box>
          </Grid>
          <Grid item width="100%">
            <Box m={2}>
              <Grid align="center">
                <Button
                  color="success"
                  variant="contained"
                  type="submit"
                  form="profile-terms"
                  width={300}
                >
                  {texts.ACCEPT_TERMS}
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
