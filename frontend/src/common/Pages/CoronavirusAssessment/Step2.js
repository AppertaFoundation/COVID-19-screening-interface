import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Box, Typography, Link } from '@material-ui/core';
import uniqid from 'uniqid';
import texts from '../../../resources/texts';
import Button from '../../Components/Button';

export default ({ onSubmit, symptomps }) => {


    return (
        <>
            <Grid container direction="column" justify="space-around" alignItems='center'>
                <Grid item xs={12}>
                    <Box mt={2}>
                        <Typography align="center" variant="h4" component="h2">
                            <Box fontWeight="fontWeightMedium">Profile Name</Box>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box m={1} p={1} mt={2}>
                        <Grid container direction="column" justify="space-around" spacing={1}>
                            <Grid item xs={12}>
                                <Box >
                                    <Typography align="left" variant="h4" component="h3">
                                        <Box fontWeight="fontWeightMedium">
                                            {symptomps ?
                                                texts.COVID_ASSESSMENT_SYMPTOMPS_TITLE
                                                :
                                                texts.COVID_ASSESSMENT_NO_SYMPTOMPS_TITLE}
                                        </Box>
                                    </Typography>
                                </Box>
                            </Grid>
                            {symptomps && (
                                <>
                                    <Grid item>
                                        <Box>
                                            <Typography align="left" variant="h6" component="h4">
                                                {texts.COVID_ASSESSMENT_SYMPTOMPS_SUBTITLE}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="body1" component="h3">
                                            <Box fontWeight="fontWeightMedium">
                                                {symptomps ? texts.COVID_ASSESSMENT_SYMPTOMPS_TEXT1 : texts.COVID_ASSESSMENT_NO_SYMPTOMPS_TEXT}
                                            </Box>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align="left" variant="body1" component="h3">
                                            <Box fontWeight="fontWeightMedium">
                                                {symptomps ? texts.COVID_ASSESSMENT_SYMPTOMPS_TEXT2 : texts.COVID_ASSESSMENT_NO_SYMPTOMPS_TEXT}
                                            </Box>
                                        </Typography>
                                    </Grid>
                                </>
                            )}
                            <Grid item>
                                <Box>
                                    <Typography align="left" variant="body1" component="h3">
                                        <Box fontWeight="fontWeightMedium">
                                            {symptomps ? texts.COVID_ASSESSMENT_SYMPTOMPS_LIST_TITLE : texts.COVID_ASSESSMENT_NO_SYMPTOMPS_LIST_TITLE}
                                        </Box>
                                    </Typography>
                                </Box>
                                <ul style={{ paddingInlineStart: 15 }}>
                                    {texts[symptomps ? 'COVID_ASSESSMENT_SYMPTOMPS_LIST' : 'COVID_ASSESSMENT_NO_SYMPTOMPS_LIST'].map(item => (
                                        <li key={uniqid()}>
                                            <Box m={0.5}>
                                                <Typography variant="body1" component="div">
                                                    <Box component="div" display="inline" fontWeight="fontWeightRegular">
                                                        {item}
                                                    </Box>
                                                </Typography>
                                            </Box>
                                        </li>
                                    ))}
                                </ul>
                            </Grid>
                            <Grid item>
                                <Typography align="left" variant="body1" component="h3">
                                    <Box fontWeight="fontWeightMedium">
                                        {symptomps ? texts.COVID_ASSESSMENT_SYMPTOMPS_TEXT3 : texts.COVID_ASSESSMENT_NO_SYMPTOMPS_TEXT}
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box >
                        {symptomps ?
                            (
                                <Grid item width="100%">
                                    <Grid align="center">                                            <Button
                                        color="success"
                                        variant="contained"
                                        width={300}
                                        onClick={onSubmit}
                                    >

                                        {texts.BUTTON_CONTINUE}
                                    </Button>
                                    </Grid>
                                </Grid>
                            ) : (
                                <Grid item width="100%">
                                    <Grid align="center">
                                        <Link href='https://111.nhs.uk/'>
                                            <Button
                                                color="success"
                                                variant="contained"
                                                width={300}
                                            >

                                                {texts.USE111_BUTTON}
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            )}
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};