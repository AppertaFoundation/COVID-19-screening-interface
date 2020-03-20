import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import texts from '../../../resources/texts';
import DitoLogo from '../../../resources/img/dito.png';
import TempLogo from '../../../resources/img/tempLogo.png';
import Button from '../../Components/Button';

export default ({ history }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const handleCancel = () => history.replace('/');
  const handleAccept = () => history.replace('/create-profile');
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      spacing={2}
    >
      <Grid item xs={12}>
        <Box mt={4}>
          <img
            {...(matches ? { width: 150 } : { width: 100 })}
            src={DitoLogo}
            alt="logo"
          />
        </Box>
      </Grid>

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
        <Box {...(matches ? { mt: 12, pr: 6, pl: 6 } : {})}>
          <Typography align="center" variant="h6" component="h3">
            <Box fontWeight="fontWeightMedium" {...(matches ? { mt: 4 } : {})}>
              {texts.TERMS_INTRO}
            </Box>
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box {...(matches ? { pr: 6, pl: 6, mt: 4 } : { pr: 1, pl: 1 })}>
          <Typography align="center" variant="caption" component="h3">
            <Box fontWeight="fontWeightMedium" {...(matches ? { mt: 4 } : {})}>
              {texts.TERMS_TEXT({ terms: '/#', conditions: '/#' })}
            </Box>
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box {...(matches ? { pr: 6, pl: 6 } : { pr: 1, pl: 1 })}>
          <Typography align="center" variant="caption" component="h3">
            <Box fontWeight="fontWeightMedium" {...(matches ? { mt: 4 } : {})}>
              {texts.TERMS_NHS_NO_INFO}
            </Box>
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box>
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
                type="success"
                variant="contained"
                onClick={handleAccept}
              >
                {texts.ACCEPT_TERMS}
              </Button>
            </Grid>
            <Grid item>
              <Button width={300} onClick={handleCancel} type="secondary">
                {texts.BUTTON_CANCEL}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
