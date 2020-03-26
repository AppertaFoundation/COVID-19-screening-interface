import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import DitoLogo from '../../resources/img/dito.png';
import SideBar from './SideBar';
import UserAvatar from './UserAvatar';


const useStyles = makeStyles(theme => ({
    spacer: {
        flex: 1
    },
    root: {
        backgroundColor: '#005EB8',
        marginBottom: theme.spacing(4)
    }
}));

export default () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = isOpen => setOpen(isOpen);
    const classes = useStyles();
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <>
            <AppBar className={classes.root} position="sticky">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Menu"
                        onClick={() => toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <span className={classes.spacer} />
                    <Box p={1}>
                        <img height="50" src={DitoLogo} alt="logo" />
                    </Box>
                    <span className={classes.spacer} />
                    <UserAvatar />
                </Toolbar>
            </AppBar>
            <SideBar open={open} toggleDrawer={toggleDrawer} />
        </>
    );
};
