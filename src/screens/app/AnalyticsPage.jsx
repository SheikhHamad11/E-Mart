import {View, Text} from 'react-native';
import React from 'react';
import HomeHeader from './components/HomeHeader';

export default function AnalyticsPage() {
  return (
    <View className="px-3">
      <HomeHeader title={'Data & Analytics'} />
    </View>
  );
}
