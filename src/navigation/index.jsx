import React from 'react';
import MainApp from '../navigation/MainApp/index';
import Auth from '../navigation/Auth/';
import {useAuth} from '../context/AuthContext';

export default function Routes() {
  const {isLoggedIn} = useAuth();
  return isLoggedIn ? <MainApp /> : <Auth />;
}
