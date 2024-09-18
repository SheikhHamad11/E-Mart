import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Routes from './src/navigation/index';
import AuthProvider from './src/context/AuthContext';
import CartContextProvider from './src/context/CartContext';
import WishListProvider from './src/context/WishlistContext';
import {ThemeProvider} from './src/context/ThemeContext';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
export default function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <CartContextProvider>
            <WishListProvider>
              <NavigationContainer>
                <Routes />
              </NavigationContainer>
            </WishListProvider>
          </CartContextProvider>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}
