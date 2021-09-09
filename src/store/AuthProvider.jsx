import React from 'react';

const AuthContext = React.createContext({
  token: '',
  login: (token) => {},
  logout: () => {},
});

export default function AuthProvider({ children }) {
  const ctx = {
    token: '',
    login: (token) => {},
    logout: () => {},
  };
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}
