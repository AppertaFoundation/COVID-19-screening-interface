import React, { useContext } from 'react';
import { AuthContext } from '../../../core/context/AuthContext';

export default () => {
  const { setAuthData, auth } = useContext(AuthContext);

  const onLogOut = () => setAuthData(null);
  return (
    <>
      <p>{`Hi ${auth.data}`}</p>
      <button type="button" onClick={onLogOut}>
        logout
      </button>
    </>
  );
};
