import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { TextField, Input } from '@material-ui/core';
import ErrorMsg from '../ErrorMsg/';

export default ({
  label = 'Date symptomps first apeared',
  placeholder = 'Date symptomps first apeared',
  required = true,
  register,
  errors,
  name
}) => {
  const [selectedDate, handleDateChange] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = event => {
    event.preventDefault();
    setOpen(true);
  };

  const renderInput = props => (
    <>
      <TextField
        name={name}
        label={label}
        placeholder={placeholder}
        value={props.value}
        inputRef={register({ required })}
        onClick={event => handleOpen(event)}
        onTouchEnd={event => handleOpen(event)}
        onKeyUp={() => handleOpen()}
        variant="outlined"
        style={{ width: '100%' }}
        autoComplete="off"
        InputProps={{
          readOnly: true
        }}
      />
      <ErrorMsg>
        {errors && errors.date_of_onset && 'This field is required'}
      </ErrorMsg>
    </>
  );

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          emptyLabel=""
          maxDate={new Date()}
          format="dd-MM-yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          onClick={event => handleOpen(event)}
          onClose={() => setOpen(false)}
          onAccept={() => setOpen(false)}
          open={open}
          fullWidth
          TextFieldComponent={props => renderInput(props)}
        />
      </MuiPickersUtilsProvider>
    </>
  );
};
