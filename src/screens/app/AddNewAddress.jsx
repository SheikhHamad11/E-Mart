import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import HomeHeader from './components/HomeHeader';
import ButtonOnly from '../../components/ButtonOnly';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
export default function AddNewAddress() {
  return (
    <ScrollView className="flex-1">
      <View className="mx-3">
        <HomeHeader title={'Add New Address'} />
      </View>

      <Image
        className="w-[100%] h-[500]"
        source={{
          uri: 'https://www.mapsofworld.com/style_2019/images/world-map.png?v:1',
        }}
      />
      <View className="mx-3">
        <View className="w-24 bg-zinc-300  h-[2px] mx-auto my-3 "></View>
        <Text className="text-zinc-500">Confirm Your Delivery Location</Text>
        <View className="border-b border-dashed border-b-zinc-200 my-2"></View>
        <View className="flex-row space-x-2 items-center">
          <FontAwesome name={'map'} size={20} color={'gray'} />
          <View>
            <Text className="text-black text-xl">New York</Text>
            <Text className="text-zinc-400 text">
              701 7th Ave,NY 10036 ,USA
            </Text>
          </View>
        </View>
        <ButtonOnly text={'Select Location & Fill Address'} />
      </View>
    </ScrollView>
  );
}
