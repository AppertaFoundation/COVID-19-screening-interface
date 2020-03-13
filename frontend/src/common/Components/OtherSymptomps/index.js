import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

import { Button, InputAdornment, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import AddIcon from '@material-ui/icons/Add';
import Input from '../Input/Input';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default ({ control, name = 'other_symptomps', watch, register }) => {
  const [symptompsCounter, setSymptompsCounter] = useState(0);
  const [symptomps, setSymptomps] = useState(null);
  const classes = useStyles();
  const handleAddSymptomps = event => {
    event.preventDefault();
    setSymptompsCounter(symptompsCounter + 1);
    createSymptomp(symptompsCounter + 1);
  };

  const createSymptomp = length => {
    const renderedInputs = [];
    Array(...Array(length)).map((item, index) => {
      return renderedInputs.push(
        <Controller
          as={
            <Input
              label="Other Symptomps"
              //[TODO] Remove symptom
              // endAdornment={
              //   <InputAdornment position="end">
              //     <IconButton onClick={() => handleClickRemoveField(key, renderedInputs)}>
              //       <DeleteOutlineIcon />
              //     </IconButton>
              //   </InputAdornment>
              // }
            />
          }
          control={control}
          name={`${name}[${index}]`}
        />
      );
    });
    return setSymptomps(renderedInputs);
  };
  return (
    <>
      {symptomps}
      <Button
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={event => handleAddSymptomps(event)}
      >
        Add Other Symptomps
      </Button>
    </>
  );
};
