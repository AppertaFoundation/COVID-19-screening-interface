import React /* useContext */ from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Typography, Divider, Box } from '@material-ui/core';
// import { AuthContext } from '../../../core/context/AuthContext';
import BottomToolBar from '../../Layout/BottomToolBar';
import {
  IdentityCard,
  RadioGroup,
  Temperature,
  DatePicker,
  OtherSymptomps
} from '../../Components';
import labels from '../../../utils/labels';

export default () => {
  // const { setAuthData } = useContext(AuthContext);
  const { handleSubmit, control, errors, register } = useForm();

  const onSubmit = data => console.log('subn', data, errors);

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
          <Box mt={1} mr={1} ml={1} width={300}>
            <IdentityCard />
          </Box>
          <Box>
            {labels.AVAIBLE_SYMPTOMS.map(symptom => {
              const { name, choices, label } = labels.SYMPTOMPS(symptom)[
                symptom
              ];
              return (
                <RadioGroup
                  control={control}
                  name={name}
                  choices={choices}
                  label={label}
                  required
                />
              );
            })}
          </Box>
          <Box m={1} width={300}>
            <Temperature
              control={control}
              errors={errors}
              register={register}
              required
              name="temp"
            />
          </Box>
          <Box m={1} width={300}>
            <DatePicker
              control={control}
              name="date"
              label="Date symptomps first apeared"
              required
            />
          </Box>
          <Box m={1} width={300}>
            <OtherSymptomps />
          </Box>
        </Grid>
      </form>
      <BottomToolBar form="patient-monitoring" />
    </>
  );
};
