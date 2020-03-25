import React, { useState } from 'react';
import { Typography, Grid, Box, Link } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, makeStyles } from '@material-ui/core/styles';

import texts from '../../../resources/texts';
import DocumentDialog from './DocumentDialog';
import TempLogo from '../../../resources/img/tempLogo.png';
import Button from '../../Components/Button';

const useStyle = makeStyles(theme => ({
  root: {
    display: 'inline',
    padding: 0,
    border: 0,
    backgroundColor: 'transparent',
    fontSize: '1em',
    color: theme.palette.primary.main,
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    }
  }
}));
export default ({ history }) => {
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [terms, setTerms] = useState(false);
  const [disclaimer, setDisclaimer] = useState(false);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const handleCancel = () => history.replace('/');
  const handleAccept = () => history.replace('/create-profile');
  return (
    <>
      <DocumentDialog open={terms} handleClose={() => setTerms(false)} title="Terms amd Conditions" />
      <DocumentDialog open={disclaimer} handleClose={() => setDisclaimer(false)} title="Disclaimer" />
      <DocumentDialog open={privacyPolicy} handleClose={() => setPrivacyPolicy(false)} title="Privacy Policy" />
      <Grid
        container
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Box>
            <img
              {...(matches ? { width: 300 } : { width: 150 })}
              src={TempLogo}
              alt="logo"
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box {...(matches ? { mt: 12, pr: 6, pl: 6 } : { mt: 1 })}>
            <Typography align="center" variant="h6" component="h3">
              <Box fontWeight="fontWeightBold" >
                {texts.TERMS_INTRO}
              </Box>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box {...(matches ? { mt: 12, pr: 6, pl: 6 } : { mt: 1 })}>
            <Typography align="center" variant="h6" component="h3">
              <Box fontWeight="fontWeightBold">
                {texts.TERMS_INTRO2}
              </Box>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box {...(matches ? { pr: 6, pl: 6, mt: 4 } : { mt: 4, pr: 1, pl: 1 })}>
            <Typography align="center" variant="caption" component="h3">
              <Box fontWeight="fontWeightMedium" {...(matches ? { mt: 4 } : {})}>
                {texts.TERMS_TEXT({
                  terms: <input type='submit' className={classes.root} onClick={() => setTerms(true)} value='Terms & Conditions' />,
                  disclaimer: <input type='submit' className={classes.root} onClick={() => setDisclaimer(true)} value='Disclaimer' />,
                  privacyPolicy: <input type='submit' className={classes.root} onClick={() => setPrivacyPolicy(true)} value='Privacy Policy' />
                })}
              </Box>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box {...(matches ? { pr: 6, pl: 6 } : { mt: 1, pr: 1, pl: 1 })}>
            <Typography align="center" variant="caption" component="h3">
              <Box fontWeight="fontWeightMedium" {...(matches ? { mt: 4 } : {})}>
                {texts.TERMS_NHS_NO_INFO}
              </Box>
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box width={300} mt={2}>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Button
                  width={300}
                  color="success"
                  variant="contained"
                  onClick={handleAccept}
                >
                  {texts.ACCEPT_TERMS}
                </Button>
              </Grid>
              <Grid item>
                <Button width={300} onClick={handleCancel} color="secondary">
                  {texts.BUTTON_CANCEL}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
