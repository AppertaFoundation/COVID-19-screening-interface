import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid
} from '@material-ui/core';
import { Controller } from 'react-hook-form';
import ErrorMsg from '../ErrorMsg';

const RadioItem = ({ value, label, size = 'small' }) => (
  <FormControlLabel
    value={value}
    control={<Radio size={size} color="primary" />}
    label={label}
  />
);

export default ({
  choices,
  label,
  name,
  size,
  defaultValue,
  control,
  errors
}) => {
  const [selection, setSelection] = useState({
    value: ''
  });
  const handleChange = value => {
    setSelection(value);
  };
  return (
    <Controller
      as={
        <Box p={1} m={1}>
          <FormControl component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <RadioGroup
              value={selection}
              onChange={event => handleChange(event.target.value)}
            >
              <Grid container direction="row">
                {choices &&
                  choices.map(item => (
                    <Box mr={6}>
                      <RadioItem
                        size={size}
                        value={item.id}
                        label={item.name}
                      />
                    </Box>
                  ))}
              </Grid>
              <ErrorMsg>
                {errors && errors[`${name}`] && 'This field is required'}
              </ErrorMsg>
            </RadioGroup>
          </FormControl>
        </Box>
      }
      control={control}
      rules={{ required: true }}
      name={name}
      defaultValue={defaultValue}
    />
  );
};
