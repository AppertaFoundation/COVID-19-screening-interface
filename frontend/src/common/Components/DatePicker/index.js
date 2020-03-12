import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Controller } from 'react-hook-form';

export default ({ control, name, label }) => {
  const [selectedDate, handleDateChange] = useState(null);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Controller
        as={
          <DatePicker
            emptyLabel=""
            maxDate={new Date()}
            inputVariant="outlined"
            format="dd-MM-yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            label={label}
            fullWidth
          />
        }
        control={control}
        rules={{ required: true }}
        name={name}
      />
    </MuiPickersUtilsProvider>
  );
};
