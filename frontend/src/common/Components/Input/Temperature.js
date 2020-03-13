import React, { useState } from 'react';
import { TextField, InputAdornment, Grid } from '@material-ui/core';
import Dialog from '../Dialog';
import Button from '../Button';
import ErrorMsg from '../ErrorMsg'
export default ({
  label = 'Temperature',
  placeholder = 'Temperature',
  required = true,
  pattern = '/[d]*.?[d]*/',
  register,
  errors,
  name
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  const validateInput = () => {
    const temp = parseFloat(value);
    if (!Boolean(temp)) {
      setError({ required: 'This field is required' })
      return false
    }
    if (temp <= 35 || temp >= 42){
      setError({ pattern: 'Temperature should be between 35.0 a 42.0' });
      return false
    }
    setError(null);
    return true
  };

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleConfirm = () => {
    validateInput();
    if (validateInput()) return setOpen(false);
  };

  return (
    <Dialog
      title="Add Temperature"
      open={open}
      handleClose={handleClose}
      handleOpen={handleConfirm}
      openAction={
        <>
          <TextField
            name={name}
            label={label}
            placeholder={placeholder}
            readOnly
            value={value}
            inputRef={register({ required, pattern })}
            onClick={() => handleOpen()}
            onTouchEnd={() => handleOpen()}
            onKeyUp={() => handleOpen()}
            variant="outlined"
            style={{ width: '100%' }}
            autoComplete="off"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <span>&#8451;</span>
                </InputAdornment>
              )
            }}
          />
          <ErrorMsg>
          {errors &&
            errors.body_temperature_degrees_C &&
            'This field is required'}</ErrorMsg>
        </>
      }
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={6}
      >
        <Grid item>
          <TextField
            type="number"
            name={'inne'}
            onChange={event => setValue(event.target.value)}
            vale={value}
            defaultValue={value}
            inputRef={register({ required, pattern })}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <span>&#8451;</span>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <ErrorMsg>
        {error && error.required}
        {error && error.pattern}
        </ErrorMsg>
        <Grid item>
          <Button type="button" onClick={handleConfirm}>
            Confirm Temperature
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};
