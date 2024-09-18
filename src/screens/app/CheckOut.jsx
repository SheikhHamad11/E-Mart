import {View, Text, Pressable, ScrollView, Image} from 'react-native';
import React from 'react';
import HomeHeader from './components/HomeHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function CheckOut({navigation, route}) {
  const {cartItems, item, totalCartItems} = route.params;

  const subtotal = cartItems?.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const total = subtotal + 10;
  const itemTotal = item?.price + 10;
  return (
    <ScrollView className="px-3">
      <HomeHeader title={'CheckOut'} />
      {cartItems ? (
        cartItems?.map((item, index) => {
          return (
            <View
              key={index}
              className="bg-gray-200 p-3 space-x-2 flex-row rounded-lg my-5 ">
              <Image
                source={{uri: item.image}}
                className="h-32 w-24 rounded-lg"
              />

              <View>
                <Text className="text-lg font-bold text-black">
                  {item.name}
                </Text>
                <Text className="text-black">Price : ${item.price}</Text>
                <Text className="text-black">Cat. : {item.category}</Text>
                <Text className="text-black">Qty.:{item.quantity}</Text>
                <View className="border-b border-b-gray-500 border-dashed my-2 "></View>
                <Text className="text-black text-lg">
                  Total : ${(item.quantity * item.price).toFixed(2)}
                </Text>
              </View>
            </View>
          );
        })
      ) : (
        <View className="bg-gray-200 p-3 space-x-2 flex-row rounded-lg my-5 ">
          <Image source={{uri: item.image}} className="h-32 w-24 rounded-lg" />
          <View>
            <Text className="text-lg font-bold text-black">{item.name}</Text>
            <Text className="text-black text-md">Price: ${item.price}</Text>
            <Text className="text-black">Category: {item.category}</Text>
            <Text className="text-black">Brand: {item.brand}</Text>
            <Text className="text-black">Stock: {item.stock}🗼</Text>
            <Text className="text-black">Ratings: {item.rating}⭐</Text>
          </View>
        </View>
      )}

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
            <Text className="text-black text-lg">Subtotal</Text>
            {subtotal ? (
              <Text className="text-black text-lg">
                ${subtotal?.toFixed(2)}
              </Text>
            ) : (
              <Text className="text-black text-lg">
                ${item.price?.toFixed(2)}
              </Text>
            )}
          </View>
          <View className="flex-row justify-between">
            <Text className="text-black text-md">Delivery Charges</Text>
            <Text className="text-black text-md">${totalCartItems * 10}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-black text-xl">Total</Text>
            {total ? (
              <Text className="text-black text-xl">${total?.toFixed(2)}</Text>
            ) : (
              <Text className="text-black text-lg">
                ${itemTotal.toFixed(2)}
              </Text>
            )}
          </View>
        </View>

        <Pressable
          className="bg-black w-[95%] mx-auto rounded-md p-3 mb-3"
          onPress={() =>
            navigation.navigate('CommonReview', {
              title: 'Place Order Successfully',
              title2: 'order',
              btitle: 'View Order',
              onPress: () =>
                navigation.navigate(
                  'OrderScreen',
                  cartItems?.length > 0 ? {cartItems} : {item},
                ),
            })
          }>
          <Text className="text-white text-center">Place Order</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
