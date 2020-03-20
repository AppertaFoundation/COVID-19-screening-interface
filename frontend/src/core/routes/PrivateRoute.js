import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import Layout from '../../common/Layout';

export default ({ component: Component, theme, ...rest }) => {
  const { auth } = useContext(AuthContext);
  const { loading } = auth;

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
        auth.data ? (
          <Layout theme={theme}>
            <Component {...routeProps} />
          </Layout>
        ) : (
          <Redirect to="/intro" />
        )
      }
    />
  );
};
