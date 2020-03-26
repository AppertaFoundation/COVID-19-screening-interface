import React, { useContext } from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import texts from '../../../resources/texts';
import DitoLogo from '../../../resources/img/dito.png';
import Button from '../../Components/Button';
import Input from '../../Components/Input/Input';
import { AuthContext } from '../../../core/context/AuthContext';

export default ({ history }) => {
    const { register, errors, handleSubmit } = useForm();
    const { setAuthData } = useContext(AuthContext);
    const onSubmit = data => {
        setAuthData(data.username);
        history.replace('/');
    };

    return (
        <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
            style={{ height: '100vh' }}
        >
            <Grid item>
                <img width={150} src={DitoLogo} alt="logo" />
            </Grid>
            <Grid item>
                <Grid
                    container
                    direction="column"
                    justify="space-around"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item >
                        <Box m={4} >
                            <Typography
                                style={{ color: '#58585A' }}
                                align="center"
                                variant="h6"
                                component="h2"
                            >
                                {texts.SING_IN_TEXT}
                            </Typography>
                        </Box>
                    </Grid>
                    <form onSubmit={handleSubmit(onSubmit)} id='sing-in'>
                        <Grid item>
                            <Input
                                errors={errors}
                                inputRef={register({ required: 'This is required field' })}
                                variant='outlined' label='Username' name='username' />
                        </Grid>
                        <Grid item>
                            <Input
                                inputRef={register({ required: 'This is required field' })}
                                errors={errors}
                                variant='outlined' label='Password' type='password' name='password' />
                        </Grid>
                    </form>
                    <Grid item>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography display='inline'>Forgotten</Typography>
                            </Grid>
                            <Grid item>
                                <Button style={{ textDecoration: 'underline' }} color="secondary">Username</Button>
                            </Grid>
                            <Grid item>
                                <Typography>or</Typography>
                            </Grid>
                            <Grid item>
                                <Button style={{ textDecoration: 'underline' }} color="secondary">Password</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid>
                    <Button
                        width={200}
                        color="success"
                        variant="contained"
                        type='submit'
                        form='sing-in'
                    >
                        {texts.BUTTON_CONFIRM}
                    </Button>
                </Grid>

            </Grid>
        </Grid>
    );
};
