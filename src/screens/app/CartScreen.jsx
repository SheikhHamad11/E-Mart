import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import React from 'react';
import {products} from '../../components/Products';
import HomeHeader from './components/HomeHeader';

export default function CartScreen({navigation}) {
  return (
    <>
      <ScrollView className="bg-white flex-1 px-3 ">
        <HomeHeader title="Cart" />
        {products.map(item => {
          return (
            <View className="bg-gray-200 p-3 space-x-2 flex-row rounded-lg my-5 ">
              <Image
                source={{uri: item.image}}
                className="h-32 w-24 rounded-lg"
              />
              <View>
                <Text className="text-lg font-bold text-black">
                  {item.name}
                </Text>
                <Text className="text-black">${item.price}</Text>
                <Text className="text-black">{item.category}</Text>
                <Text className="text-black">{item.brand}</Text>
                <Text className="text-black">{item.stock}</Text>
                <Text className="text-black">{item.rating}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View className="flex-row justify-between absolute bottom-0 items-center p-3 z-10 bg-white w-[100%]">
        <Pressable
          className="bg-black w-[95%] mx-auto rounded-md p-3"
          onPress={() => navigation.navigate('CheckOut')}>
          <Text className="text-white text-center">CheckOut(5)</Text>
        </Pressable>
      </View>
    </>
  );
}
