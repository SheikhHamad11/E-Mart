import {React, createContext, useState} from 'react';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const login = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider value={{isLoggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}
