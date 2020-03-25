import React, { useState, useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Input from '../Input/Input';

export default ({
  label,
  placeholder,
  required,
  register,
  errors,
  setValue,
  unregister,
  name
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = event => {
    event.preventDefault();
    setOpen(true);
  };
  useEffect(() => {
    register({ name }, { required });
    return () => unregister(name); // unregister input after component unmount
  }, [register]);

  const handleDateChange = date => {
    setSelectedDate(date);
    setValue(name, date);
  };
  const renderInput = ({ value }) => (
    <Input
      name={name}
      label={label}
      placeholder={placeholder}
      value={value}
      onClick={event => handleOpen(event)}
      onTouchEnd={event => handleOpen(event)}
      onKeyUp={() => handleOpen()}
      variant="outlined"
      autoComplete="off"
      readOnly
      errors={errors}
    />
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
