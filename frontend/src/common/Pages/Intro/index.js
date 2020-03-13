import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: '#9FC9D9'
  }
}));
export default () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={6}
    >
      <Link to="/sign-in">Login</Link>
    </Grid>
  );
};
