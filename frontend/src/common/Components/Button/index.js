import React from 'react';
import { withStyles } from '@material-ui/styles';
import MuiButton from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const ButtonSuccess = withStyles(() => ({
  contained: {
    minWidth: '100%',
    backgroundColor: '#397F3A',
    textTransform: 'none',
    color: '#fff'
  }
}))(MuiButton);

const ButtonSecondary = withStyles(theme => ({
  contained: {
    minWidth: '100%',
    backgroundColor: theme.palette.secondary,
    color: '#000'
  },
  root: {
    minWidth: '100%',
    textTransform: 'none',
  }
}))(MuiButton);

const ButtonPrimmary = withStyles(() => ({
  contained: {
    minWidth: '100%',
    textTransform: 'none',
    backgroundColor: '#fff',
    color: '#000'
  }
}))(MuiButton);

export default ({ children, color, width, ...rest }) => (
  <Box width={width}>
    {
      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        success: <ButtonSuccess {...rest}>{children}</ButtonSuccess>,
        secondary: <ButtonSecondary {...rest}>{children}</ButtonSecondary>,
        primmary: <ButtonPrimmary {...rest}>{children}</ButtonPrimmary>
      }[color]
    }
  </Box>
);
