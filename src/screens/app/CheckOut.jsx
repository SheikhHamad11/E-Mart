import {View, Text, Pressable, ScrollView, Image} from 'react-native';
import React from 'react';
import HomeHeader from './components/HomeHeader';
import {product} from '../../components/Products';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function CheckOut({navigation}) {
  return (
    <ScrollView className="px-3">
      <HomeHeader title={'CheckOut'} />
      {product.map(item => {
        return (
          <View className="bg-gray-200 p-3 space-x-2 flex-row rounded-lg my-5 ">
            <Image
              source={{uri: item.image}}
              className="h-32 w-24 rounded-lg"
            />
            <View>
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
      <View className="flex-row justify-between items-center my-4">
        <Text className="text-black text-xl">Available Vouchers</Text>
        <Pressable onPress={() => navigation.navigate('Vouchers')}>
          <Text className="text-black">View All</Text>
        </Pressable>
      </View>
      <View className="bg-gray-200  border border-gray-200 w-[99%] p-2 rounded-l-md">
        <Text className="text-black text-md font-bold">
          📎Best Deal: 20% OFF
        </Text>
        <Text className="text-black text-md">
          20DEALS *Min Spend $150 Valid till 12/12/2024
        </Text>
      </View>
      <View className="space-y-2 mt-2">
        <Text className="text-black text-md">Delivery</Text>
        <View className="flex-row justify-between bg-gray-200  border border-gray-200 w-[99%] p-5 rounded-md my-3">
          <Text className="text-black text-md">Choose Delivery</Text>
          <FontAwesome name={'angle-right'} size={20} color={'black'} />
        </View>
      </View>

      <View className="space-y-2 mt-2">
        <Text className="text-black text-md">Select Payment Method</Text>
        <View className="flex-row  justify-between bg-gray-200  border border-gray-200 w-[99%] p-5 rounded-md my-3">
          <Text className="text-black text-md">Choose Payment Method</Text>
          <FontAwesome name={'angle-right'} size={20} color={'black'} />
        </View>
      </View>

      <View className="space-y-2 mt-2">
        <Text className="text-black text-md">Order Summary</Text>
        <View className="bg-gray-200 w-[99%] p-5 rounded-md my-3 space-y-2">
          <View className="flex-row justify-between">
            <Text className="text-black text-md">Subtotal</Text>
            <Text className="text-black text-md">$316</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-black text-md">Subtotal</Text>
            <Text className="text-black text-md">$316</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-black text-md">Subtotal</Text>
            <Text className="text-black text-md">$316</Text>
          </View>
        </View>

        <Pressable
          className="bg-black w-[95%] mx-auto rounded-md p-3 mb-3"
          onPress={() =>
            navigation.navigate('CommonReview', {
              title: 'Place Order Successfully',
              title2: 'order',
              btitle: 'View Order',
            })
          }>
          <Text className="text-white text-center">Place Order</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
