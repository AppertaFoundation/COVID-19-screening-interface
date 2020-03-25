import React from 'react';
import { Typography, Grid, Box, Dialog, DialogContent, DialogActions } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import texts from '../../../resources/texts';
import Button from '../../Components/Button';
import Input from '../../Components/Input/Input';
import { Transition } from '../../Components/Dialog';

export default ({ matches, handleConfirmPostCode, tryAgainYes, tryAgainNo, onClose, open }) => {
    const { handleSubmit, register, errors, watch } = useForm();
    const valid = watch('postcode') && errors;
    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={onClose}
            >
                <DialogContent>
                    <Box p={2} m={4}>
                        <Typography align="center" variant="h6" component="h3">
                            <Box fontWeight="fontWeightMedium">
                                These details are not linked to a GP. Try again?
                        </Box>
                        </Typography>
                    </Box>
                </DialogContent>
                <Box mb={2}>
                    <DialogActions>
                        <Grid
                            container
                            direction="row"
                            justify="space-around"
                            alignItems="center"
                        >
                            <Grid item>
                                <Button
                                    width={120}
                                    onClick={tryAgainNo}
                                    color="secondary"
                                >
                                    {texts.BUTTON_NO}
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    width={120}
                                    color="success"
                                    variant="contained"
                                    onClick={tryAgainYes}
                                >
                                    {texts.BUTTON_YES}
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </Box>
            </Dialog>

            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
            >
                <Grid item xs={12}>
                    <Typography align="center" variant="h4" component="h2">
                        <Box
                            fontWeight="fontWeightMedium"
                            {...(matches ? { mt: 2 } : { mt: 1 })}
                        >
                            {texts.CREATE_PROFILE_TITLE}
                        </Box>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box mt={12} mb={4}>
                        <Typography align="center" variant="h6" component="h3">
                            <Box fontWeight="fontWeightMedium" {...(matches ? { mt: 8 } : {})}>
                                {texts.CREATE_PROFILE_SUBTITLE_POSTCODE}
                            </Box>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <form id='form-postcode' onSubmit={handleSubmit(handleConfirmPostCode)}>
                        <Input
                            errors={errors}
                            label="Postcode"
                            name="postcode"
                            inputRef={register({ required: 'This is required field' })}
                        />
                    </form>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        width={150}
                        color="success"
                        variant="contained"
                        type='submit'
                        form='form-postcode'
                        disabled={!valid}
                    >
                        {texts.BUTTON_CONFIRM}
                    </Button>
                </Grid>

            </Grid>
        </>
    );
};
