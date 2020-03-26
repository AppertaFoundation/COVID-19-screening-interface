import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import AuthProvider from './core/context/AuthContext';
import NavProvider from './core/context/NavContext';
import Routes from './core/routes';
import theme from './common/Layout/theme';

export default () => {
  return (
    <AuthProvider>
      <NavProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </NavProvider>
    </AuthProvider>
  );
};
