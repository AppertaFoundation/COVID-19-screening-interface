import React from 'react';
import { useTheme } from '@material-ui/styles';
import { Box, useMediaQuery } from '@material-ui/core';
import { Button } from '../Components';

export default ({ disabled, form }) => {
  const theme = useTheme();
  const width =
    [...theme.breakpoints.keys].reverse().reduce((output, key) => {
      const matches = useMediaQuery(theme.breakpoints.only(key));

      return !output && matches ? key : output;
    }, null) || 'xs';

  if (width === 'lg' || width === 'xl' || width === 'xl') {
    return (
      <Box m={1}>
        <Button form={form} type="submit" disabled={disabled}>
          Finish assessment
        </Button>
      </Box>
    );
  }
  return (
    <div
      style={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 100,
        backgroundColor: '#efefef',
        textAlign: 'center',
        paddingTop: 5
      }}
    >
      <Button form={form} type="submit" disabled={disabled}>
        Finish assessment
      </Button>
    </div>
  );
};
