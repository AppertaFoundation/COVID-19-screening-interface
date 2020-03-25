import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { Dialog, Slide, Grid, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  subtitle: {
    margin: 0,
    paddingTop: 0,
    paddingLeft: theme.spacing(4)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

export const Transition = React.forwardRef(function Transition(props, ref) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogTitle = withStyles(styles)(props => {
  const { title, classes, onClose, align, handleClose, handleSave, ...other } = props;
  return (
    <MuiDialogTitle
      disableTypography
      className={classes.root}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      <Grid
        container
        direction='row'
        alignItems='center'
        alignContent='center'
        spacing={2}

      >
        <Grid item>
          {handleClose && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>)}
        </Grid>
        <Grid item>
          <Typography align="center" variant="h5">{title}</Typography>
        </Grid>
      </Grid>

    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(6)
  }
}))(MuiDialogContent);

export default ({ title, children, open, openAction, fullScreen, handleClose, alignTitle }) => {
  return (
    <>
      {openAction}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        {title && <DialogTitle title={title} onClose={() => handleClose()} handleClose={handleClose} align={alignTitle} />}
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </>
  );
};
