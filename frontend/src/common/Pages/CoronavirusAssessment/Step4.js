import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Box, Typography } from '@material-ui/core';
import texts from '../../../resources/texts';
import Button from '../../Components/Button';
import RadioGroup from '../../Components/RadioGroup';
import Checkbox from '../../Components/Checkbox';
import Input from '../../Components/Input/Input';

export default ({ onSubmit }) => {
    const { control, errors, handleSubmit, watch, register } = useForm({});
    const [valid, setValid] = useState(false);
    const [otherSymptomps, setOtherSymptomps] = useState(false);

    const watchedValues = watch();

    useEffect(() => {
        const keys = Object.keys(watchedValues);
        if (keys.length !== 0 && keys.every((k) => !!watchedValues[k])) {
            setValid(true);
        }
    }, [watchedValues]);

    useEffect(() => {
        if (watchedValues.otherSymptomps === 'yes')
            return setOtherSymptomps(true);
        return setOtherSymptomps(false);
    }, [watchedValues.otherSymptomps]);

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
                        <Box style={{ width: '100%' }}>
                            <RadioGroup
                                control={control}
                                errors={errors}
                                options={texts.CORONAVIRUS_ASSESSMENT_RADIO3}
                            />
                        </Box>
                    </Grid>
                    {otherSymptomps && (
                        <>
                            <Grid item xs={12}>
                                <Box style={{ width: '100%' }}>
                                    <Checkbox
                                        options={texts.COVID_ASSESSMENT_CHECKBOXES}
                                        register={register}
                                        title="Tick all that apply"
                                    />
                                </Box>
                            </Grid>
                            <Grid item>
                                <Input
                                    errors={errors}
                                    label="Other"
                                    placeholder="Other, please enter"
                                    name="other"
                                    inputRef={register}
                                />
                            </Grid>
                        </>
                    )}
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