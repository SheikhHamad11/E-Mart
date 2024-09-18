import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
const categories = ['All', 'Men', 'Kids', 'Cloth', 'Electronics', 'Mobile'];
export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-10">
      {categories.map(item => {
        return (
          <Pressable
            key={item}
            className={`h-12 mx-2 p-3 rounded-lg ${
              selectedCategory === item ? 'bg-black' : 'bg-gray-200'
            }`}
            onPress={() => setSelectedCategory(item)}>
            <Text
              className={`${
                selectedCategory === item ? 'text-white' : 'text-black'
              }`}>
              {item}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
