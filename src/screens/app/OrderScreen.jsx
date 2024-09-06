import {View, Text, Pressable, Image} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from './components/HomeHeader';
import {product} from '../../components/Products';
const status = ['Active', 'Completed', 'Cancelled'];
export default function OrderScreen({navigation}) {
  const [selectedTab, setSelectedTab] = useState('Active');

  // Conditional rendering based on selected tab
  const renderContent = () => {
    switch (selectedTab) {
      case 'Active':
        return (
          <>
            <View className="flex-row justify-between">
              <Text className="text-black text-lg">Total Item</Text>
              <Text className="text-black text-lg">(4)</Text>
            </View>
            {product.map(item => {
              return (
                <View className="bg-gray-200 p-3 flex-row space-x-2  rounded-lg my-5 ">
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
                    <View className="flex-row justify-between   items-center">
                      <Pressable
                        className="bg-black p-2 rounded-md "
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
              );
            })}
          </>
        );
      case 'Completed':
        return (
          <>
            <View className="flex-row justify-between">
              <Text className="text-black text-lg">Total Item</Text>
              <Text className="text-black text-lg">(5)</Text>
            </View>
            {product.map(item => {
              return (
                <View className="bg-gray-200 p-3 flex-row space-x-2  rounded-lg my-5 ">
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
          </>
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
                <View className="bg-gray-200 p-3 flex-row space-x-2  rounded-lg my-5 ">
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
    <View className="px-3">
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

      {renderContent()}
    </View>
  );
}
