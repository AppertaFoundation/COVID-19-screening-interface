import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, TextField } from '@material-ui/core';
import ErrorMessage from '../ErrorMsg';
import useWindowDimensions from '../../../core/hooks/useWindowDimensions';

const styles = {
  input: {
    minWidth: '100%',
    backgroundColor: 'transparent'
  }
};

const CustomizedInputs = ({
  classes,
  inputRef,
  label,
  name,
  errors,
  endAdornment,
  readOnly,
  ...props
}) => {
  const { width } = useWindowDimensions();
  return (
    <Box p={1} width={width - 32}>
      <TextField
        label={label}
        readOnly
        style={{ width: '100%' }}
        autoComplete="off"
        name={name}
        inputRef={inputRef}
        InputProps={{
          // eslint-disable-next-line react/destructuring-assignment
          ...props.InputProps,
          readOnly,
          className: classes.input,
          endAdornment
        }}
        {...props}
      />
      <ErrorMessage name={name} errors={errors} />
    </Box>
  );
};
export default withStyles(styles)(CustomizedInputs);
