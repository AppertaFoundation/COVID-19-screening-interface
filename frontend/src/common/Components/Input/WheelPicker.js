import React, { useState } from 'react';
import { TextField, InputAdornment, Grid, Box } from '@material-ui/core';
import Dialog from '../Dialog';
import Button from '../Button';
import ErrorMsg from '../ErrorMsg';
import Picker from 'react-mobile-picker-scroll';

export default ({
  label,
  placeholder,
  valueGroupsProps,
  optionGroups,
  required,
  register,
  errors,
  seperator,
  name
}) => {
  const [open, setOpen] = useState(false);
  const [valueGroups, setValueGroup] = useState(valueGroupsProps);

  const [inputValue, setInputValue] = useState(null);

  const handleClose = () => setOpen(false);
  const handleOpen = event => {
    event.preventDefault();
    setOpen(true);
  };
  const handleChange = (name, value) => {
    {
      setValueGroup({ ...valueGroups, [name]: value });
      setInputValue({ ...valueGroups, [name]: value });
    }
  };
  const handleConfirm = () => {
    setInputValue(valueGroups);
    setOpen(false);
  };
  const getValue = () =>
    inputValue
      ? `${inputValue.firstColumn}${seperator ? inputValue.seperator : ''}${
      inputValue.secondColumn ? inputValue.secondColumn : ''
      }`
      : '';
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
            value={getValue()}
            inputRef={register({ required })}
            onClick={event => handleOpen(event)}
            onTouchEnd={event => handleOpen(event)}
            onKeyUp={() => handleOpen()}
            variant="outlined"
            style={{ width: '100%' }}
            autoComplete="off"
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <span>&#8451;</span>
                </InputAdornment>
              )
            }}
          />
          {/* <ErrorMsg>
            {errors &&
              errors.body_temperature_degrees_C &&
              'This field is required'}
          </ErrorMsg> */}
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
          <Box width={200}>
            <Picker
              optionGroups={optionGroups}
              valueGroups={valueGroups}
              onChange={(name, value) => handleChange(name, value)}
            />
          </Box>
        </Grid>
        <Grid item>
          <Button type="button" onClick={handleConfirm}>
            Confirm
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};
