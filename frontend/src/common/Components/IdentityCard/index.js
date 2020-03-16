import React from 'react';
import { withStyles } from '@material-ui/styles';

import MuiPaper from '@material-ui/core/Paper';
import { Box, Typography } from '@material-ui/core';

const Paper = withStyles(() => ({
  root: {
    backgroundColor: 'lightgrey'
  }
}))(MuiPaper);

export default ({ nhsNo }) => {
  return (
    <Paper square elevation={0}>
      <Box p={1}>
        <Typography variant="subtitle1" component="div">
          <Box component="div" display="inline" fontWeight="fontWeightBold">
            nhsNo: 
          </Box>
          {nhsNo}
        </Typography>
      </Box>
    </Paper>
  );
};
