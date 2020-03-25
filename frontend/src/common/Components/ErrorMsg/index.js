import React from 'react';
import { Box } from '@material-ui/core';
import { ErrorMessage } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    color: '#bf1650'
  }
});

export default ({ name, errors }) => {
  const classes = useStyles();

  return (
    <Box m={1}>
      <ErrorMessage name={name} errors={errors}>
        {({ message }) => <p className={classes.root}>{message}</p>}
      </ErrorMessage>{' '}
    </Box>
  );
};
