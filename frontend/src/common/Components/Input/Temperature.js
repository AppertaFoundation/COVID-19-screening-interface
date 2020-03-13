import React, { useState } from 'react';
import { TextField, InputAdornment, Grid } from '@material-ui/core';
import Dialog from '../Dialog';
import Button from '../Button';

export default ({
  label = 'Temperature',
  placeholder = 'Temperature',
  required = true,
  pattern = '/[d]*.?[d]*/',
  register,
  name
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  //   const validateInput = () => {
  //     const temp = parseFloat(value);
  //  temp >= 35 && temp <= 42
  //   };
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const handleConfirm = () => {
    // validateInput();
    setOpen(false);
  };

  return (
    <Dialog
      title="Add Temperature"
      open={open}
      handleClose={handleClose}
      handleOpen={handleConfirm}
      openAction={
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
            // endAdornment: value && (
            endAdornment: (
              <InputAdornment position="end">
                <span>&#8451;</span>
              </InputAdornment>
            )
          }}
        />
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
            name={name}
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
        {/* {error && 'error msg'} */}
        <Grid item>
          <Button type="button" onClick={handleConfirm}>
            Confirm Temperature
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};
