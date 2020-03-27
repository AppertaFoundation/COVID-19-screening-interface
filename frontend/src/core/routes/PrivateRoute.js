import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import Layout from '../../common/Layout';
import AppBarDashboard from '../../common/Layout/AppBarDashboard';

export default ({ component: Component, theme, appBar, bottomToolbar, ...rest }) => {
  const { auth } = useContext(AuthContext);
  const { loading, error } = auth;
  if (error) {
    return <Route
      {...rest}
      render={() => {
        return <p>{error}</p>;
      }}
    />;
  }
  if (loading) {
    return (
      <Route
        {...rest}
        render={() => {
          return <p>Loading...</p>;
        }}
      />
    );
  }
  return (
    <Route
      {...rest}
      render={routeProps =>
        auth.data
          ? (
            <Layout theme={theme} bottomToolbar={bottomToolbar} {...(appBar ? { appBar: <AppBarDashboard /> } : {})}>
              <Component {...routeProps} />
            </Layout>
          ) : (
            <Redirect to="/intro" />
          )
      }
    />
  );
};
