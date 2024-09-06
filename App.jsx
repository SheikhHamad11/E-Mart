import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Routes from './src/navigation/index';
import AuthProvider from './src/context/AuthContext';
import {LikeProvider} from './src/context/LikedContext';
export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <AuthProvider>
      <LikeProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </LikeProvider>
    </AuthProvider>
  );
}
