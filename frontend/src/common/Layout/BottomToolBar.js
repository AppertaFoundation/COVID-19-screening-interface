import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '../Components';
// import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    width: '100%'
  }
});

export default ({ disabled, form }) => {
  return (
    <div
      style={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 100,
        backgroundColor: '#efefef',
        textAlign: 'center',
        paddingTop: 5
      }}
    >
      <Button form={form} type="submit" disabled={disabled}>
        Finish assessment
      </Button>
    </div>
  );
};
