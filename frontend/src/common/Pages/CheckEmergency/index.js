import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import uniqid from 'uniqid';

import texts from '../../../resources/texts';
import DitoLogo from '../../../resources/img/dito.png';
import Button from '../../Components/Button';

const ListItemText = ({ value, desc }) => (
  <Typography variant="body2" component="div">
    <Box component="div" display="inline" fontWeight="fontWeightBold">
      {value}
    </Box>
    <Box component="div" display="inline" fontWeight="fontWeightRegular">
      {desc}
    </Box>
  </Typography>
);
export default ({ history }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const handleAcceptTerms = () => history.replace('/terms');
  const handleCancel = () => history.replace('/');

  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      style={{ height: '100%' }}
      spacing={4}
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
        <Box {...(matches ? { mt: 6 } : {})} color="warning.main">
          <Typography align="center" variant="h5" component="h2">
            {texts.EMERGENCY_CHECK_TITLE}{' '}
          </Typography>
        </Box>
        <Typography align="center" variant="h6" component="h3">
          <Box fontWeight="fontWeightMedium" {...(matches ? { mt: 4 } : {})}>
            {texts.EMERGENCY_CHECK_SUBTITLE}
          </Box>
        </Typography>

        <Box {...(matches ? { pr: 8, pl: 8 } : {})}>
          <ul style={{ paddingInlineStart: 15 }}>
            {texts.EMERGENCY_CASES.map(item => (
              <li key={uniqid()}>
                <ListItemText {...item} />
              </li>
            ))}
          </ul>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box {...(matches ? { mt: 8 } : {})}>
          <Grid
            container
            direction="column"
            justify="space-around"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Button
                width={300}
                type="success"
                variant="contained"
                onClick={handleAcceptTerms}
              >
                {texts.EMERGENCY_BUTTON_CONFIRM}
              </Button>
            </Grid>
            <Grid item>
              <Button width={300} type="secondary" onClick={handleCancel}>
                {texts.BUTTON_CANCEL}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
