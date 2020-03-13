import React from 'react';
import { withStyles } from '@material-ui/styles';
import MuiButton from '@material-ui/core/Button';

const Button = withStyles(() => ({
  contained: {
    backgroundColor: '#007E3A',
    color: '#fff'
  }
}))(MuiButton);

export default ({ children, ...rest }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Button variant="contained" {...rest}>
    {children}
  </Button>
);
