import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// const useStyles = makeStyles(theme => ({
//   withAppBar: {
//     marginTop: '85px',
//     marginBottom: 54
//   },
//   withoutAppBar: {
//     marginTop: 0,
//     marginBottom: 24
//   }
// }));

const Layout = ({ children, theme }) => {
  //   const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* {appBar && <CustomAppBar open={true} />} */}
      {/* <div className={appBar ? classes.withAppBar : classes.withoutAppBar}> */}
      {children}
      {/* </div> */}
      {/* {!loginPage && <BottomToolBar />} */}
    </ThemeProvider>
  );
};

export default Layout;
