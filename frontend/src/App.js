import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import AuthProvider from './core/context/AuthContext';
import Routes from './core/routes';
import theme from './common/Layout/theme';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

export default () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Routes />
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};
