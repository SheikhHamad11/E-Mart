import React, {useContext, useState} from 'react';
import MainApp from '../navigation/MainApp/index';
import Auth from '../navigation/Auth/';
import {AuthContext} from '../context/AuthContext';

export default function index() {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);
  return isLoggedIn ? <MainApp /> : <Auth />;
}
