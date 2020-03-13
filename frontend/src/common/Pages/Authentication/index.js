import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../core/context/AuthContext';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: '#9FC9D9'
  }
}));
export default ({ history }) => {
  const { register, handleSubmit, errors } = useForm();
  const { setAuthData } = useContext(AuthContext);

  const onSubmit = data => {
    setAuthData(data.nhsNo);
    history.replace('/');
  };
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="nhsNo" ref={register({ required: true })} />
        {errors.nhhsNo && <span>This field is required</span>}
        <input type="submit" />
      </form>{' '}
    </Grid>
  );
};
