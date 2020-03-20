import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import texts from '../../../resources/texts';
import DitoLogo from '../../../resources/img/dito.png';
import Button from '../../Components/Button';

export default ({ history }) => {
  const handleCreateAccount = () => history.replace('/check-emergency');
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      style={{ height: '100vh' }}
    >
      <Grid item>
        <Box width={200}>
          <img src={DitoLogo} alt="logo" />
        </Box>
      </Grid>
      <Grid item style={{ marginTop: '-150px' }}>
        <Box width={300}>
          <Typography
            style={{ color: '#58585A' }}
            align="center"
            variant="h6"
            component="h2"
          >
            {texts.INTRO_TEXT}
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
          spacing={2}
          style={{ marginTop: 16 }}
        >
          <Grid item>
            <Button
              width={300}
              type="success"
              variant="contained"
              onClick={handleCreateAccount}
            >
              {texts.BUTTON_CREATE_ACCOUNT}{' '}
            </Button>
          </Grid>
          <Grid item>
            <Button width={300} type="secondary" variant="contained">
              {texts.BUTTON_SING_IN}{' '}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
