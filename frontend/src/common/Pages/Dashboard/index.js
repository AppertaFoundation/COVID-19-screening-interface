import React, { useState /* useContext */ } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Typography, Divider, Box } from '@material-ui/core';
// import { AuthContext } from '../../../core/context/AuthCogittext';
import BottomToolBar from '../../Layout/BottomToolBar';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import {
  IdentityCard,
  RadioGroup,
  Temperature,
  OtherSymptomps,
  ErrorMsg
} from '../../Components';
import { Controller } from 'react-hook-form';

import labels from '../../../utils/labels';

export default () => {
  // const { setAuthData } = useContext(AuthContext);
  const {
    handleSubmit,
    control,
    errors,
    register,
    watch,
    setError
  } = useForm();
  const [selectedDate, handleDateChange] = useState(null);

  const onSubmit = data => {
    const firstSymptomsPresence =
      Object.keys(data).filter(key => data[key] === 'present').length > 0
        ? 'present'
        : 'unknown';
    const result = Object.assign(data, {
      date_of_onset: selectedDate,
      first_symptoms_presence: firstSymptomsPresence
    });
    console.log(result);
  };
  // const onLogOut = () => setAuthData(null);
  return (
    <>
      <form id="patient-monitoring" onSubmit={handleSubmit(onSubmit)}>
        <Grid container direction="column" xs>
          <Box mt={2} mr={2} ml={1}>
            <Typography variant="h5" component="h1">
              {labels.LABEL_ASSESSMENT}
            </Typography>
            <Divider />
          </Box>
          <Box mt={1} mr={1} ml={1} >
            <IdentityCard />
          </Box>
          <Box>
            <Box m={1}>
          <Typography variant="h6" component="h2">Patient Symptomps</Typography>
          </Box>
            {labels.SYMPTOMPS.map(symptom => {
              const { name, choices, label } = symptom;
              return (
                <RadioGroup
                  control={control}
                  name={name}
                  choices={choices}
                  label={label}
                  errors={errors}
                />
              );
            })}
          </Box>
          <Box m={1} >
            <OtherSymptomps
              control={control}
              register={register}
              watch={watch}
            />
          </Box>
          <Box m={1} >
            <Temperature
              control={control}
              errors={errors}
              register={register}
              required
              setError={setError}
              control={control}
              name="body_temperature_degrees_C"
            />
          </Box>
          <Box m={1} >
            <Controller
              as={
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    emptyLabel=""
                    maxDate={new Date()}
                    inputVariant="outlined"
                    format="dd-MM-yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    label="Date symptomps first apeared"
                    fullWidth
                  />
                </MuiPickersUtilsProvider>
              }
              control={control}
              name={'date_of_onset'}
            />
            <ErrorMsg>
              {errors && errors.date_of_onset && 'This field is required'}
            </ErrorMsg>
          </Box>
        </Grid>
      </form>
      <BottomToolBar form="patient-monitoring" />
    </>
  );
};
