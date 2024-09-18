// import React, {createContext, useContext, useState} from 'react';
// import {Appearance, useColorScheme} from 'react-native';

// // Create ThemeContext
// const ThemeContext = createContext();

// // Custom hook to use theme
// export const useTheme = () => useContext(ThemeContext);

// export const ThemeProvider = ({children}) => {
//   const systemTheme = useColorScheme(); // Get system theme by default
//   const [theme, setTheme] = useState(systemTheme || 'light');

//   const toggleTheme = () => {
//     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{theme, toggleTheme}}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

import React, {createContext, useContext, useState} from 'react';
import {useColorScheme, View} from 'react-native';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const systemTheme = useColorScheme(); // This detects the system's current theme
  const [theme, setTheme] = useState(systemTheme); // Use system theme initially

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <View className={theme === 'dark' ? 'dark' : ''} style={{flex: 1}}>
        {children}
      </View>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
