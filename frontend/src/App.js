import React from 'react';
import AuthProvider from './core/context/AuthContext';
import Routes from './core/routes';

export default () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
