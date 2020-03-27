import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ loading: true, data: null });
  const [user, setUser] = useState({ data: null });
  const setUserData = data => setUser(data);
  const setAuthData = (data) => {
    setAuth({ data });
  };
  useEffect(() => {
    setAuth({
      loading: false,
      data: JSON.parse(window.localStorage.getItem('authData'))
    });
  }, []);
  useEffect(() => {
    window.localStorage.setItem('authData', JSON.stringify(auth.data));
  }, [auth.data]);
  return (
    <AuthContext.Provider value={{ auth, setAuthData, user, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
