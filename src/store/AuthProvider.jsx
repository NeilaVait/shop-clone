import React from 'react';

export const AuthContext = React.createContext({
  token: '',
  login: (token) => {},
  logout: () => {},
});
AuthContext.displayName = 'AuthContext';

export default function AuthProvider({ children }) {
  // state, useEffect

  const ctx = {
    token: '',
    login: (token) => {},
    logout: () => {},
  };
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}
