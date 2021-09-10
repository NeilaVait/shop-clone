import React, { useState } from 'react';

export const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});
AuthContext.displayName = 'AuthContext';

export default function AuthProvider({ children }) {
  // state, useEffect
  const [token, setToken] = useState('sdsd');

  // infered value - apskaiciuojama priklausoma reikme
  // const isLoggedIn = token ? true : false;
  // !'' === true
  // !!'' === false
  // !'123' === false
  // !!'123' === true
  const isLoggedIn = !!token;

  function loginHandler(token) {
    setToken(token);
    console.log('loginHandler() has set the token');
  }
  function logoutHandler(token) {
    setToken('');
  }

  const ctx = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: () => {},
  };
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}
