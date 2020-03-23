import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ErrorMessage from '../ErrorMsg'
import { Box, TextField } from '@material-ui/core';
import useWindowDimensions from '../../../core/hooks/useWindowDimensions'
const styles = {
  input: {
    minWidth: '100%',
    backgroundColor: 'transparent'
  }
};

const CustomizedInputs = ({ classes, inputRef, label, name, errors, endAdornment, readOnly, ...props }) => {
  const { width } = useWindowDimensions();
  return (
    <Box m={1} width={width-28}>
      <TextField
        label={label}
        readOnly
        style={{ width: '100%' }}
        autoComplete="off"
        name={name}
        inputRef={inputRef}
        InputProps={{
          ...props.InputProps,
          readOnly: readOnly,
          className: classes.input,
          endAdornment
        }}
        {...props}
      />
      <ErrorMessage name={name} errors={errors}/>
    </Box>
  );
};
export default withStyles(styles)(CustomizedInputs);
