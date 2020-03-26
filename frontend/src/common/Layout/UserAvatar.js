import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
    root: {
        color: '#fff',
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderStyle: 'solid',
    }
}));

export default ({ initials = 'AB' }) => {
    const classes = useStyles();

    return (
        <Avatar className={classes.root}>{initials}</Avatar>
    );
};
