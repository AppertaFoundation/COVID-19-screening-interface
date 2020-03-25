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
import Profile from '../../common/Pages/Profile';
import ProfileHeartAndCirculation from '../../common/Pages/Profile/ProfileHeartAndCirculation';
import ProfileMyMedications from '../../common/Pages/Profile/ProfileMyMedication';
import ProfileOther from '../../common/Pages/Profile/ProfileOther';
import ProfileDASI from '../../common/Pages/Profile/ProfileDASI';
import ProfileDisability from '../../common/Pages/Profile/ProfileDisability';
import ProfilePastMedicalHistory from '../../common/Pages/Profile/ProfilePastMedicalHistory';
import ProfileCognition from '../../common/Pages/Profile/ProfileCognition';
import ProfileConifrmation from '../../common/Pages/Profile/ProfileConifrmation';

export default () => (
  <BrowserRouter>
    <Switch>
      <OpenRoute theme={theme.login} path="/intro" component={Intro} />
      <OpenRoute
        appBar
        theme={theme.main}
        path="/check-emergency"
        component={CheckEmergency}
      />
      <OpenRoute appBar theme={theme.main} path="/terms" component={Terms} />
      <OpenRoute
        theme={theme.main}
        path="/create-profile"
        component={CreateProfile}
      />
      <PrivateRoute exact theme={theme.main} path="/" component={Dashboard} />
      <PrivateRoute
        exact
        theme={theme.main}
        path="/profile"
        component={Profile}
      />
      <PrivateRoute
        exact
        theme={theme.main}
        path="/profile/heart"
        component={ProfileHeartAndCirculation}
      />
      <PrivateRoute
        exact
        theme={theme.main}
        path="/profile/medications"
        component={ProfileMyMedications}
      />
      <PrivateRoute
        exact
        theme={theme.main}
        path="/profile/other"
        component={ProfileOther}
      />
      <PrivateRoute
        exact
        theme={theme.main}
        path="/profile/dasi"
        component={ProfileDASI}
      />
      <PrivateRoute
        exact
        theme={theme.main}
        path="/profile/disability"
        component={ProfileDisability}
      />
      <PrivateRoute
        exact
        theme={theme.main}
        path="/profile/past-medical-history"
        component={ProfilePastMedicalHistory}
      />
      <PrivateRoute
        exact
        theme={theme.main}
        path="/profile/cognition"
        component={ProfileCognition}
      />
      <PrivateRoute
        exact
        theme={theme.main}
        path="/profile/confirmation"
        component={ProfileConifrmation}
      />
    </Switch>
  </BrowserRouter>
);
