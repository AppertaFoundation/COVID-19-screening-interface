import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FaceIcon from '@material-ui/icons/Face';
import AssignmentIcon from '@material-ui/icons/Assignment';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookIcon from '@material-ui/icons/Book';
import { NavContext } from '../../core/context/NavContext';

const useStyles = makeStyles({
  root: {
    minWidth: 75
  },
  wrapper: {
    position: 'fixed',
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
    backgroundColor: '#efefef',
    textAlign: 'center',
    paddingTop: 5
  }
});
export default () => {
  const classes = useStyles();
  const { navPath, setNavContext } = useContext(NavContext);
  const handleChange = (event, newValue) => {
    setNavContext(newValue);
  };
  return (
    <div
      className={classes.wrapper}
    >
      <BottomNavigation
        value={navPath}
        showLabels
        onChange={handleChange}
      >
        <BottomNavigationAction
          className={classes.root}
          label="Family"
          value="/family"
          icon={<FavoriteBorderIcon />}
        />
        <BottomNavigationAction
          className={classes.root}
          label="Tasks"
          value="/"
          icon={<AssignmentIcon />}
        />
        <BottomNavigationAction
          className={classes.root}
          label="Booking"
          value="/booking"
          disabled
          icon={<BookIcon />} />

        <BottomNavigationAction
          className={classes.root}
          label="AskDoctor"
          value="/doctor"
          disabled
          icon={<FaceIcon />}
        />
        <BottomNavigationAction
          className={classes.root}
          label="Notifications"
          value="/notifications"
          disabled
          icon={<NotificationsIcon />}
        />
      </BottomNavigation>
    </div>
  );
};
