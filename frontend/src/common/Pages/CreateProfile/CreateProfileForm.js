import React from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Box, Typography, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import MuiPaper from '@material-ui/core/Paper';
import texts from '../../../resources/texts';
import Input from '../../Components/Input/Input';

const WhitePaper = withStyles({
  root: {
    backgroundColor: 'transparent'
  }
})(MuiPaper);

export default () => {
  return (
    <form>
      <WhitePaper elevation={0}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item>
            <Box p={2}>
              <Typography variant="h5">
                {texts.CREATE_PROFILE_SUBTITLE}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Input label="Surname" name="surname" />
          </Grid>
          <Grid item>
            <Input label="Postcode" name="postcode" />
          </Grid>
          <Grid item>
            <Input label="Email" name="email" />
          </Grid>
          <Grid item>
            <Input label="Mobile phone" name="surname" />
          </Grid>
          <Grid item>
            <Input label="Password" name="password" />
          </Grid>
        </Grid>
      </WhitePaper>
    </form>
  );
};
