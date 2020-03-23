import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import theme from '../../common/Layout/theme';
import PrivateRoute from './PrivateRoute';
import OpenRoute from './OpenRoute';
import Dashboard from '../../common/Pages/Dashboard';
import Intro from '../../common/Pages/Intro';
import CheckEmergency from '../../common/Pages/CheckEmergency';
import Terms from '../../common/Pages/Terms';
import CreateProfile from '../../common/Pages/CreateProfile';

export default () => (
  <BrowserRouter>
    <Switch>
      <OpenRoute theme={theme.login} path="/intro" component={Intro} />
      <OpenRoute
        theme={theme.main}
        path="/check-emergency"
        component={CheckEmergency}
      />
      <OpenRoute theme={theme.main} path="/terms" component={Terms} />
      <OpenRoute
        theme={theme.main}
        path="/create-profile"
        component={CreateProfile}
      />
      <PrivateRoute theme={theme.main} path="/" component={Dashboard} />
    </Switch>
  </BrowserRouter>
);
