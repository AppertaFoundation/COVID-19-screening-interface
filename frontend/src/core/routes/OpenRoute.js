import React from 'react';
import { Route } from 'react-router-dom';

import Layout from '../../common/Layout';

export default ({ component: Component, theme, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps => (
        <Layout theme={theme}>
          <Component {...routeProps} />
        </Layout>
      )}
    />
  );
};
