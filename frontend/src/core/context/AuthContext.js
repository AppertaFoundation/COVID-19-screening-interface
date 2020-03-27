import React, { createContext, useState, useEffect } from 'react';
import useApiRequest from '../hooks/useApiRequest';
import { TOKEN_OBTAIN } from '../../config';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [params, setParams] = useState({});
  const [{ status, response, loading, error }, makeRequest] = useApiRequest(
    TOKEN_OBTAIN,
    {
      verb: 'post',
      params
    }
  );
  const [auth, setAuth] = useState({ loading, data: response, status, error });
  const [user, setUser] = useState({ data: null });
  const setUserData = data => setUser(data);

  const setAuthData = data => {
    if (process.env.REACT_APP_NO_BACKEND) {
      setAuth({ data, loading: false });
    }
    setParams(data);
  };

  useEffect(() => {
    makeRequest();
  }, [params]);


  useEffect(() => {
    setAuth({ ...auth, loading: true });
  }, []);



  useEffect(() => {
    if (status === 'useApiRequest/SUCCESS') {
      const authData = { accessToken: response.data.access, refreshToken: response.data.refresh };
      setAuth({
        loading: false,
        data: authData,
        status
      });
      window.localStorage.setItem('authData', JSON.stringify(authData));
    }
    if (status === 'useApiRequest/ERROR') {
      setAuth({
        ...auth,
        loading: false,
        error: error.response.statusText
      });
    }
  }, [status]);

  return (
    <AuthContext.Provider value={{ auth, setAuthData, user, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
