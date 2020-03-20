import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { Box, TextField } from '@material-ui/core';

const styles = {
  input: {
    backgroundColor: 'transparent'
  }
};

const CustomizedInputs = ({ classes, label, name, endAdornment, ...props }) => {
  return (
    <Box m={1}>
      <TextField
        label={label}
        readOnly
        // variant="filled"
        style={{ width: '100%' }}
        autoComplete="off"
        name={name}
        InputProps={{
          // eslint-disable-next-line react/destructuring-assignment
          ...props.InputProps,
          className: classes.input,
          endAdornment
        }}
        {...props}
      />
    </Box>
  );
};
export default withStyles(styles)(CustomizedInputs);
