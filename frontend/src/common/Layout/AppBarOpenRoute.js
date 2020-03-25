import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import DitoLogo from '../../resources/img/dito.png';

const useStyles = makeStyles(theme => ({
    spacer: {
        flex: 1
    },
    root: {
        backgroundColor: '#9FC9D9',
        marginBottom: theme.spacing(4)
    }
}));

export default () => {
    const classes = useStyles();
    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <>
            <AppBar className={classes.root} position="sticky">
                <Toolbar>
                    <span className={classes.spacer} />
                    <Box p={1}>
                        <img height="50" src={DitoLogo} alt="logo" />
                    </Box>
                    <span className={classes.spacer} />
                </Toolbar>
            </AppBar>
        </>
    );
};
