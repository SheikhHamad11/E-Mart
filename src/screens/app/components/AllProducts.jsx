import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Categories from './Categories';
import Products from './Products';
import HomeHeader from './HomeHeader';

export default function AllProducts() {
  return (
    <ScrollView>
      <View className="mb-2">
        <Categories />
      </View>
      <Products />
    </ScrollView>
  );
}
