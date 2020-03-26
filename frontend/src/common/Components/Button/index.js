import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, withStyles } from '@material-ui/core/styles';
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
    backgroundColor: theme.palette.secondary.main,
    color: '#fff'
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

export default ({ children, color, width, ...rest }) => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  return (
    <Box width={width}>
      {
        {
          // eslint-disable-next-line react/jsx-props-no-spreading
          success: <ButtonSuccess {...(xs ? { size: 'small' } : {})} {...rest}>{children}</ButtonSuccess>,
          secondary: <ButtonSecondary {...(xs ? { size: 'small' } : {})}  {...rest}>{children}</ButtonSecondary>,
          primmary: <ButtonPrimmary {...(xs ? { size: 'small' } : {})}{...rest}>{children}</ButtonPrimmary>
        }[color]
      }
    </Box>
  );
};
