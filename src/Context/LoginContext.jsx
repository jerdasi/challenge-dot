import React, { useState, createContext, useMemo } from 'react';
import propTypes from 'prop-types';

const LoginContext = createContext();

export function LoginProvider({ children }) {
  const authenticated = JSON.parse(localStorage.getItem('authenticated'));
  const iniateAuth = authenticated || null;
  const [auth, setAuth] = useState(iniateAuth);
  const value = useMemo(() => ({ auth, setAuth }), [auth]);

  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  );
}
export default LoginContext;

LoginProvider.propTypes = {
  children: propTypes.element.isRequired,
};
