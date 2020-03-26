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
import ErrorMessage from '../ErrorMsg';


const RadioItem = ({ value, label, size = 'small' }) => (
  <FormControlLabel
    value={value}
    control={<Radio size={size} color="primary" />}
    label={label}
  />
);

export default ({
  options,
  size,
  defaultValue,
  control,
  errors,
  required = 'This is required field'
}) => {

  const defaultCheked = {};
  options.map(item => Object.assign(defaultCheked, { [item.name]: '' }));
  const [selection, setSelection] = useState(defaultCheked);
  const handleChange = event => {
    setSelection({ ...selection, [event.target.name]: event.target.value });
  };

  return (
    options.map(question => {
      const { name, choices, label } = question;
      return (
        < Controller
          as={
            < Box p={1} m={1} >
              <FormControl component="fieldset">
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup
                  value={selection[name]}
                  onChange={event => handleChange(event)}
                  name={name}
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
                  <ErrorMessage name={name} errors={errors} />
                </RadioGroup>
              </FormControl>
            </Box>
          }
          control={control}
          rules={{ required }}
          name={name}
          defaultValue={defaultValue}
        />
      );
    })
  );
};
