import React from 'react';
import { Box } from '@material-ui/core';

export default ({ children }) => (
  <Box m={1}>
    <span style={{ color: 'red' }}>{children}</span>
  </Box>
);
