import React from 'react';

import { Grid, Typography, Box } from '@material-ui/core';
import Button from '../../Components/Button';
import RegistrationComplete from '../../../resources/img/registration-complete.png';
import texts from '../../../resources/texts';

export default () => (
  <Grid
    container
    direction="column"
    justify="center"
    alignItems="center"
    style={{ minHeight: '100vh' }}
    spacing={2}
  >
    <Grid item>
      <img width={150} src={RegistrationComplete} alt="Registation Complete" />
    </Grid>
    <Grid item xs={12}>
      <Typography align="center" variant="h6" component="h3">
        <Box fontWeight="fontWeightMedium">{texts.PROFILE_COMPLITE}</Box>
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Button width={300} color="success" variant="contained">
            {texts.BUTTON_CONTINUE}
          </Button>
        </Grid>
        <Grid item>
          <Button width={300} color="primmary" variant="contained">
            {texts.BUTTON_ADD_FAMILY}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);
