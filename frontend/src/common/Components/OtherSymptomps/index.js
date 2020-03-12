import React, { useState } from 'react';
import { Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import Input from '../Input/Input';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default () => {
  //   const [symptomps, setSymptomps] = useState([]);
  const [symptompsCounter, setSymptompsCounter] = useState(0);
  const classes = useStyles();
  const handleAddSymptomps = event => {
    event.preventDefault();
    setSymptompsCounter(symptompsCounter + 1);
  };

  const otherSymptomps = () => {
    const renderedInputs = [];
    Array(...Array(symptompsCounter)).map(item => {
      return renderedInputs.push(
        <Box m={1}>
          <Input label="Other Symptomps" />{' '}
        </Box>
      );
    });
    return renderedInputs;
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={event => handleAddSymptomps(event)}
      >
        Add Other Symptomps
      </Button>
      {otherSymptomps()}
    </>
  );
};
