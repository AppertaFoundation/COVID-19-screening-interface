import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../../common/Layout';
import AppBarOpenRoute from '../../common/Layout/AppBarOpenRoute';

export default ({ component: Component, theme, appBar, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => (
        <Layout theme={theme} appBar={appBar && <AppBarOpenRoute />}>
          <Component {...routeProps} />
        </Layout>
      )}
    />
  );
};
