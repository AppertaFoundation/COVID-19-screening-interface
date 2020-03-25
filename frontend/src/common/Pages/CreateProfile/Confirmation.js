import React from 'react';
import { withStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';

import { Grid, Typography, Slide, Box } from '@material-ui/core';
import RegistrationComplete from '../../../resources/img/registration-complete.png';
import texts from '../../../resources/texts';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DialogContent = withStyles(theme => ({
  root: {
    margin: theme.spacing(6)
  }
}))(MuiDialogContent);
export default ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        <DialogContent>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <img
                width={150}
                src={RegistrationComplete}
                alt="Registation Complete"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography align="center" variant="h6" component="h3">
                <Box fontWeight="fontWeightMedium">
                  {texts.REGISTRATION_COMPLETE}
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};
