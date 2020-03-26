import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import BottomToolBar from './BottomToolBar';

const Layout = ({ children, theme, appBar, bottomToolbar }) => {
  return (
    <ThemeProvider theme={theme}>
      {appBar}
      <CssBaseline />
      {children}
      {bottomToolbar && <BottomToolBar />}
    </ThemeProvider>
  );
};

export default Layout;
