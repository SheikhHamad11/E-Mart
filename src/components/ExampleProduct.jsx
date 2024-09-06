import {View, Text, Image} from 'react-native';
import React from 'react';
import {product} from './Products';

export default function ExampleProduct() {
  return (
    <View>
      {product.map(item => {
        return (
          <View className="bg-gray-200 p-3 space-x-2 flex-row rounded-lg my-5 ">
            <Image
              source={{uri: item.image}}
              className="h-32 w-24 rounded-lg"
            />
            <View className="">
              <Text className="text-lg font-bold text-black">{item.name}</Text>
              <Text className="text-black">${item.price}</Text>
              <Text className="text-black">{item.category}</Text>
              <Text className="text-black">{item.brand}</Text>
              <Text className="text-black">{item.stock}</Text>
              <Text className="text-black">{item.rating}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}
