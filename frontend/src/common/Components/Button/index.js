import React from 'react';
import { withStyles } from '@material-ui/styles';
import MuiButton from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const ButtonSuccess = withStyles(theme => ({
  contained: {
    minWidth: '100%',
    backgroundColor: theme.palette.success.dark,
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
    minWidth: '100%'
  }
}))(MuiButton);

export default ({ children, color, width, ...rest }) => (
  <Box width={width}>
    {
      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        success: <ButtonSuccess {...rest}>{children}</ButtonSuccess>,
        secondary: <ButtonSecondary {...rest}>{children}</ButtonSecondary>
      }[color]
    }
  </Box>
);
