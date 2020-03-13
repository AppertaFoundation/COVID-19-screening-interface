import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Warinning = () => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity="warning">
        Wipe screen before use
      </Alert>
    </Snackbar>
  );
};
const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    backgroundColor: '#9FC9D9'
  }
}));
export default () => {
  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={6}
    >
      <Warinning />
      <Grid item spacing={0}>
        <Typography
          style={{ color: '#58585A' }}
          align="center"
          variant="h2"
          component="h1"
        >
          COVID-19
        </Typography>
        <Typography
          style={{ color: '#58585A' }}
          align="center"
          variant="h2"
          component="h1"
        >
          Assessmen
        </Typography>
      </Grid>
      <Grid item spacing={0}>
        <Typography
          style={{ color: '#58585A' }}
          align="center"
          variant="body1"
          component="p"
        >
          App created in association with... (Lorem ipsum)
        </Typography>
      </Grid>
      <Link to="/sign-in">Let's start</Link>
    </Grid>
  );
};
