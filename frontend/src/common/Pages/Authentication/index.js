import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../core/context/AuthContext';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import { Button } from '../../Components';
import Input from '././../../Components/Input/Input';
import { Controller } from 'react-hook-form';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: '#9FC9D9'
  }
}));
export default ({ history }) => {
  const { handleSubmit, errors, control } = useForm();
  const { setAuthData } = useContext(AuthContext);

  const onSubmit = data => {
    setAuthData(data.nhsNo);
    history.replace('/');
  };
  const classes = useStyles();

  return (
    <form id="login" onSubmit={handleSubmit(onSubmit)}>
      <Grid
        className={classes.root}
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={6}
      >
        <Grid item spacing={0}>
          <Typography
            style={{ color: '#58585A' }}
            align="center"
            variant="h2"
            component="h1"
          >
            COVID-19
          </Typography>
          <Typography
            style={{ color: '#58585A' }}
            align="center"
            variant="h2"
            component="h1"
          >
            Assessment
          </Typography>
        </Grid>

        <Grid item>
          <Box width={300}>
            <Controller
              as={<Input type='number' fullWidth label="Enter NHS Number" />}
              control={control}
              rules={{ required: true }}
              name={'nhsNo'}
            />
            {errors.nhhsNo && <span>This field is required</span>}
          </Box>
        </Grid>
        <Grid item>
          <Button type="submit" form="login">
            Create New Assessment
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
