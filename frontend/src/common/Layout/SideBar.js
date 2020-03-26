import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Grid, Box } from '@material-ui/core';
import Button from "../Components/Button";
import { AuthContext } from '../../core/context/AuthContext';

const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: 'auto'
    }
});

export default ({ open, toggleDrawer }) => {
    const { setAuthData } = useContext(AuthContext);
    const handleLogout = () => setAuthData(null);

    const classes = useStyles();
    const content = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
        >
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}>
                <Grid item>
                    <Box mt={2}>
                        <Button
                            width={200}
                            color="success"
                            variant="contained"
                            onClick={handleLogout}
                        >
                            Log out
                    </Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );

    return (
        <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
            {content('left')}
        </Drawer>
    );
};
