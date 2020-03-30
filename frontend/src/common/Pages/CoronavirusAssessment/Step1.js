import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Box, Typography } from '@material-ui/core';
import texts from '../../../resources/texts';
import Button from '../../Components/Button';
import RadioGroup from '../../Components/RadioGroup';

export default ({ onSubmit }) => {
    const { control, errors, handleSubmit, watch } = useForm({});
    const [valid, setValid] = useState(false);
    const watchedValues = watch();

    useEffect(() => {
        const keys = Object.keys(watchedValues);
        if (keys.length !== 0 && keys.every((k) => !!watchedValues[k])) {
            setValid(true);
        }
    }, [watchedValues]);

    return (
        <>
            <form id="profile-terms" onSubmit={handleSubmit(onSubmit)}>
                <Grid container direction="column" spacing={1} justify="space-around">
                    <Grid item xs={12}>
                        <Box mt={2}>
                            <Typography align="center" variant="h4" component="h2">
                                <Box fontWeight="fontWeightMedium">Profile Name</Box>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box ml={2}>
                            <Typography align="left" variant="h5" component="h3">
                                <Box fontWeight="fontWeightMedium">
                                    {texts.CORONAVIRUS_ASSESSMENT_TITLE}
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box ml={2}>
                            <Typography align="left" variant="body1" component="h4">
                                {texts.CORONAVIRUS_ASSESSMENT_SUBTITLE}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box ml={2}>
                            <Typography align="left" variant="caption" component="h4">
                                {texts.CORONAVIRUS_ASSESSMENT_INTRO1}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box ml={2}>
                            <Typography align="left" variant="caption" component="h4">
                                {texts.CORONAVIRUS_ASSESSMENT_INTRO2}
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12}>
                        <Box style={{ width: '100%' }}>
                            <RadioGroup
                                control={control}
                                errors={errors}
                                options={texts.CORONAVIRUS_ASSESSMENT_RADIO}
                            />
                        </Box>
                    </Grid>
                    <Grid item width="100%">
                        <Grid align="center">
                            <Button
                                color="success"
                                variant="contained"
                                type="submit"
                                form="profile-terms"
                                disabled={!valid}
                                width={300}
                            >
                                {texts.BUTTON_CONTINUE}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};