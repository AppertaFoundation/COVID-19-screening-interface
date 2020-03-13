import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Authoriztion from '../../common/Pages/Authoriztion';
import Screening from '../../common/Pages/Screening';
import Welcome from '../../common/Pages/Welcome';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/welcome" component={Welcome} />
      <Route path="/sign-in" component={Authoriztion} />
      <PrivateRoute path="/" component={Screening} />
    </Switch>
  </BrowserRouter>
);
