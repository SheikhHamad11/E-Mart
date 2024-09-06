import {View, Text} from 'react-native';
import React from 'react';
import HomeHeader from './components/HomeHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function TrackOrder() {
  return (
    <View className="px-3">
      <HomeHeader title={'Track Order'} />
      <View className="border border-gray-300 w-[99%] p-5 rounded-md my-3">
        <View className="flex-row justify-between">
          <View className="rounded-full border p-2">
            <FontAwesome name={'star'} size={15} color={'black'} />
          </View>
          <View className="rounded-full border p-2">
            <FontAwesome name={'car'} size={15} color={'black'} />
          </View>
          <View className="rounded-full border p-2">
            <FontAwesome name={'star'} size={15} color={'black'} />
          </View>
          <View className="rounded-full border p-2">
            <FontAwesome name={'bus'} size={15} color={'black'} />
          </View>
        </View>
        <View className="flex-row justify-between items-center my-5">
          <View className="rounded-full border w-5 h-5 "></View>
          <FontAwesome name={'arrow-right'} size={10} color={'black'} />

          <View className="rounded-full border w-5 h-5 items-center justify-center ">
            <FontAwesome name={'circle'} size={10} color={'black'} />
          </View>
          <FontAwesome name={'arrow-right'} size={10} color={'black'} />
          <View className="rounded-full border w-5 h-5 items-center "></View>
          <FontAwesome name={'arrow-right'} size={10} color={'black'} />
          <View className="rounded-full border w-5 h-5 items-center justify-center ">
            <FontAwesome name={'check'} size={10} color={'black'} />
          </View>
        </View>
        <Text className="text-black text-center text-md">
          Order In Delivery
        </Text>
      </View>

      <Text className="text-black text-lg">Delivery Status</Text>

      <View className="flex-row justify-between  border border-gray-300 w-[99%] p-5 rounded-md my-3">
        <View className="flex-col  justify-between items-center">
          <View className="rounded-full border w-5 h-5 items-center justify-center ">
            <FontAwesome name={'circle'} size={10} color={'black'} />
          </View>
          <View className="border-l border-l-gray-700 border-dashed">
            <Text></Text>
          </View>
          <View className="rounded-full border w-5 h-5 items-center justify-center ">
            <FontAwesome name={'circle'} size={10} color={'black'} />
          </View>
          <View className="border-l border-l-gray-700 border-dashed">
            <Text></Text>
          </View>
          <View className="rounded-full border w-5 h-5 items-center justify-center ">
            <FontAwesome name={'circle'} size={10} color={'black'} />
          </View>
          <View className="border-l border-l-gray-700 border-dashed">
            <Text></Text>
          </View>
          <View className="rounded-full border w-5 h-5 items-center justify-center ">
            <FontAwesome name={'circle'} size={10} color={'black'} />
          </View>
        </View>
        <View className="flex-col justify-between items-center">
          <View className="border-b border-b-gray-300 border-dashed py-1">
            <Text className="text-black text-md font-bold">
              Order is being Delivered-Dec 23 09-44am
            </Text>
            <Text className="text-gray-400 text-xs">
              20DEALS *Min Spend $150 Valid till 12/12/2024
            </Text>
          </View>
          <View className="border-b border-b-gray-300 border-dashed py-1">
            <Text className="text-black text-md font-bold">
              Order is being Delivered-Dec 23 09-44am
            </Text>
            <Text className="text-gray-400 text-xs">
              20DEALS *Min Spend $150 Valid till 12/12/2024
            </Text>
          </View>
          <View className="border-b border-b-gray-300 border-dashed py-1">
            <Text className="text-black text-md font-bold">
              Order is being Delivered-Dec 23 09-44am
            </Text>
            <Text className="text-gray-400 text-xs">
              20DEALS *Min Spend $150 Valid till 12/12/2024
            </Text>
          </View>
          <View className="border-b border-b-gray-300 border-dashed py-1">
            <Text className="text-black text-md font-bold">
              Order is being Delivered-Dec 23 09-44am
            </Text>
            <Text className="text-gray-400 text-xs">
              20DEALS *Min Spend $150 Valid till 12/12/2024
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
