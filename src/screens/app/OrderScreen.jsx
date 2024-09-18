import {View, Text, Pressable, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from './components/HomeHeader';
import {product} from '../../components/Products';
const status = ['Active', 'Completed', 'Cancelled'];
export default function OrderScreen({navigation, route}) {
  const [selectedTab, setSelectedTab] = useState('Active');
  const {cartItems, item} = route.params || {};
  // console.log('item', cartItems, item);
  // Conditional rendering based on selected tab
  const RenderContent = () => {
    switch (selectedTab) {
      case 'Active':
        return (
          // {cartItems}
          <>
            <View className="flex-row justify-between">
              <Text className="text-black text-lg">Total Item</Text>
              {cartItems ? (
                <Text className="text-black text-lg">
                  ({cartItems?.length})
                </Text>
              ) : item ? (
                <Text className="text-black text-lg">(1)</Text>
              ) : (
                <Text className="text-black text-lg">(0)</Text>
              )}
            </View>
            {cartItems ? (
              cartItems.map((item, index) => (
                <View
                  key={index}
                  className="bg-gray-200 p-3 flex-row space-x-2 rounded-lg my-5 ">
                  <Image
                    source={{uri: item.image}}
                    className="h-40 w-24 rounded-lg"
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

                    <View className="flex-row  space-x-2">
                      <Pressable
                        className="bg-black p-2 rounded-md"
                        onPress={() => navigation.navigate('TrackOrder')}>
                        <Text className="text-white text-center">
                          Track Order
                        </Text>
                      </Pressable>
                      <Pressable
                        className="border border-black p-2 rounded-md"
                        onPress={() => navigation.navigate('OrderDetails')}>
                        <Text className="text-black text-center">
                          Order Details
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              ))
            ) : item ? (
              <View>
                <View className="bg-gray-200 p-3 flex-row space-x-2 rounded-lg my-5 ">
                  <Image
                    source={{uri: item.image}}
                    className="h-40 w-24 rounded-lg"
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

                    <View className="flex-row justify-between items-center">
                      <Pressable
                        className="bg-black p-2 rounded-md"
                        onPress={() => navigation.navigate('TrackOrder')}>
                        <Text className="text-white text-center">
                          Track Order
                        </Text>
                      </Pressable>
                      <Pressable
                        className="border border-black p-2 rounded-md"
                        onPress={() =>
                          navigation.navigate(
                            'OrderDetails',
                            cartItems?.length > 0 ? {cartItems} : {item},
                          )
                        }>
                        <Text className="text-black text-center">
                          Order Details
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              <Text className="text-black">Nothing in Order</Text>
            )}
          </>
        );
      case 'Completed':
        return (
          <ScrollView>
            <View className="flex-row justify-between">
              <Text className="text-black text-lg">Total Item</Text>
              <Text className="text-black text-lg">(5)</Text>
            </View>
            {product.map((item, index) => {
              return (
                <View
                  key={index}
                  className="bg-gray-200 p-3 flex-row space-x-2  rounded-lg my-5 ">
                  <Image
                    source={{uri: item.image}}
                    className="h-40 w-24 rounded-lg"
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

                    <Pressable
                      className="border bg-black p-2 rounded-md"
                      onPress={() => navigation.navigate('LeaveAReview')}>
                      <Text className="text-white text-center">
                        Submit Review
                      </Text>
                    </Pressable>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        );
      case 'Cancelled':
        return (
          <>
            <View className="flex-row justify-between">
              <Text className="text-black text-lg">Total Item</Text>
              <Text className="text-black text-lg">(1)</Text>
            </View>
            {product.map(item => {
              return (
                <View
                  key={item}
                  className="bg-gray-200 p-3 flex-row space-x-2  rounded-lg my-5 ">
                  <Image
                    source={{uri: item.image}}
                    className="h-40 w-24 rounded-lg"
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

                    <Pressable className="border border-black p-2 rounded-md">
                      <Text className="text-black text-center">Cancelled</Text>
                    </Pressable>
                  </View>
                </View>
              );
            })}
          </>
        );
      default:
        return null;
    }
  };
  return (
    <ScrollView className="px-3 bg-white">
      <HomeHeader title="My Order" />
      <View className="flex-row justify-between mx-3">
        {status.map((item, index) => {
          return (
            <>
              <Pressable
                key={index}
                className="w-[33.33%]"
                onPress={() => {
                  setSelectedTab(item);
                }}>
                <Text className={`text-black text-xl text-center   `}>
                  {item}
                </Text>
                <View
                  className={`my-2 border-b-2  ${
                    selectedTab == item ? 'border-black' : 'border-gray-300'
                  }`}></View>
              </Pressable>
            </>
          );
        })}
      </View>

      {RenderContent()}
    </ScrollView>
  );
}
