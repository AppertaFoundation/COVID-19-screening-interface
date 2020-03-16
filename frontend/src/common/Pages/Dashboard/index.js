import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Typography, Divider, Box } from '@material-ui/core';
import { AuthContext } from '../../../core/context/AuthContext';
import BottomToolBar from '../../Layout/BottomToolBar';
import {
  IdentityCard,
  RadioGroup,
  Temperature,
  OtherSymptomps,
  ErrorMsg,
  Dialog,
  DatePicker,
  Button
} from '../../Components';
import labels from '../../../utils/labels';

import useApiRequest from '../../../core/hooks/useApiRequest';
import {
  FETCHING,
  SUCCESS,
  ERROR
} from '../../../core/hooks/useApiRequest/actionTypes';

export default () => {
  const { auth, setAuthData } = useContext(AuthContext);
  const {
    handleSubmit,
    control,
    errors,
    register,
    watch,
    setError
  } = useForm();
  const [params, setParams] = useState({});
  const [open, setOpen] = useState(false);
  const [{ status, response }, makeRequest] = useApiRequest(
    'https://jsonplaceholder.typicode.com/users/',
    {
      verb: 'get',
      params
    }
  );

  const onSubmit = data => {
    const firstSymptomsPresence =
      Object.keys(data).filter(key => data[key] === 'present').length > 0
        ? 'present'
        : 'unknown';
    const other_symptomps = data.other_symptomps
      ? data.other_symptomps.filter(element => element !== undefined)
      : [];
    const result = Object.assign(data, {
      first_symptoms_presence: firstSymptomsPresence,
      other_symptomps
    });
    setParams(result);
    makeRequest();
    setOpen(true);
  };
  const onLogOut = () => setAuthData(null);
  return (
    <>
      {status === SUCCESS && (
        <Dialog open={open} title="Result and recommendation">
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={6}
          >
            <Grid item>{response.result}</Grid>
            <Grid item>
              <Button type="button" onClick={() => onLogOut()}>
                Create New Assasment
              </Button>
            </Grid>
          </Grid>
        </Dialog>
      )}
      {status === FETCHING && <div>Loading...</div>}
      {status === ERROR && <ErrorMsg>{JSON.stringify(response)}</ErrorMsg>}
      <form id="patient-monitoring" onSubmit={handleSubmit(onSubmit)}>
        <Grid style={{ marginBottom: 45 }} container direction="column" xs>
          <Box mt={2} mr={2} ml={1}>
            <Typography variant="h5" component="h1">
              {labels.LABEL_ASSESSMENT}
            </Typography>
            <Divider />
          </Box>
          <Box mt={1} mr={1} ml={1}>
            <IdentityCard nhsNo={auth.data} />
          </Box>
          <Box>
            <Box m={1}>
              <Typography variant="h6" component="h2">
                Patient Symptomps
              </Typography>
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
          <Box m={1}>
            <OtherSymptomps
              control={control}
              register={register}
              watch={watch}
            />
          </Box>
          <Box m={1}>
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
          <Box m={1}>
            <DatePicker
              control={control}
              errors={errors}
              register={register}
              required
              control={control}
              name="date_of_onset"
            />
          </Box>
        </Grid>
      </form>
      <BottomToolBar form="patient-monitoring" />
    </>
  );
};
