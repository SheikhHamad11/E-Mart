import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../../screens/app/Home';
import Contact from '../../screens/app/Contact';
export default function MainApp() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}
