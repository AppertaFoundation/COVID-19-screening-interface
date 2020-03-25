import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

const Layout = ({ children, theme, appBar }) => {
  return (
    <ThemeProvider theme={theme}>
      {appBar}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
