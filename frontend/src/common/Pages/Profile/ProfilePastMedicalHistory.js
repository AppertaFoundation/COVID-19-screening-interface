import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Typography, Box } from '@material-ui/core';

import Button from '../../Components/Button';
import texts from '../../../resources/texts';

export default ({ history }) => {
  const { handleSubmit } = useForm();

  const onSubmit = () => {
    history.replace('/profile/dasi');
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
                  {texts.PROFILE_PAST_MEDICAL_TITLE}
                </Box>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box ml={2}>
              <Typography align="left" variant="body1" component="h4">
                {texts.PROFILE_PAST_MEDICAL_SUBTITLE}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box ml={2}>
              <Typography align="left" variant="caption" component="h4">
                {texts.PROFILE_PAST_MEDICAL_INTRO}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} />
          <Grid item width="100%">
            <Grid align="center">
              <Button
                color="success"
                variant="contained"
                type="submit"
                form="profile-terms"
                width={300}
              >
                {texts.BUTTON_CONTINUE2}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
