import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import {
  Button,
  Dialog,
  Box,
  Slide,
  Typography,
  Grid
} from '@material-ui/core';
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle
      disableTypography
      className={classes.root}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...other}
    >
      <Box mr={2} ml={2}>
        <Typography variant="h5">{children}</Typography>
      </Box>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(6)
  }
}))(MuiDialogContent);

export default ({ title, children, open, openAction, handleClose }) => {
  //   const [open, setOpen] = React.useState(false);

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button> */}
      {openAction}
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <DialogTitle onClose={() => handleClose()}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          {title}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </div>
  );
};
