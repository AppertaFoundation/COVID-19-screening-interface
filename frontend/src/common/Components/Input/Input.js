import React from 'react';
import { TextField, Box } from '@material-ui/core';

export default ({ label, name, endAdornment,...props }) => {

  return (
    <Box m={1}>
    <TextField
      label={label}
      readOnly
      variant="outlined"
      style={{ width: '100%' }}
      autoComplete="off"
      name={name}
      InputProps={{
        // eslint-disable-next-line react/destructuring-assignment
        ...props.InputProps,
        endAdornment: (
         endAdornment
        )
      }}
      {...props}
    />
    </Box>
  );
};
