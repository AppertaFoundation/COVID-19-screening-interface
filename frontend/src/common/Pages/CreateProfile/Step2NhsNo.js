import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import texts from '../../../resources/texts';
import Button from '../../Components/Button';
import CreateProfileForm from './CreateProfileForm';

export default ({ matches, handleConfirm }) => {
  const handleConfirmNhsNo = () => handleConfirm('step2NhsNo');

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography align="center" variant="h3" component="h2">
          <Box
            fontWeight="fontWeightMedium"
            {...(matches ? { mt: 2 } : { mt: 1 })}
          >
            {texts.CREATE_PROFILE_TITLE}
          </Box>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <CreateProfileForm />
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
              <Button
                width={300}
                onClick={handleConfirmNhsNo}
                type="success"
                variant="contained"
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
