import {View, Text} from 'react-native';
import React from 'react';
import HomeHeader from './components/HomeHeader';

export default function Notifications() {
  return (
    <View className="px-3">
      <HomeHeader title={'Notifications'} />
    </View>
  );
}
