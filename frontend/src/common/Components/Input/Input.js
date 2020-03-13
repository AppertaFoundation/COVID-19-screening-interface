import React from 'react';
import { TextField } from '@material-ui/core';

export default ({ label }) => {
  return (
    <TextField
      label={label}
      readOnly
      variant="outlined"
      style={{ width: '100%' }}
      autoComplete="off"
    />
  );
};
