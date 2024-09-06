import {View, Text, TextInput} from 'react-native';
import React from 'react';
import HomeHeader from './components/HomeHeader';

export default function Vouchers() {
  return (
    <View className="mx-3">
      <HomeHeader title={'Promos & Vouchers'} />
      <Text className="text-black text-lg">Have a Promo Code?</Text>
      <View className="flex-row justify-between my-5">
        <View className="w-[270px] border border-gray-300 rounded-md ">
          <TextInput
            placeholder="Enter Code Here"
            placeholderTextColor={'gray'}
            className="text-black"
          />
        </View>
        <View className="bg-black w-20 p-2 rounded-lg  items-center justify-center">
          <Text className="text-white">Reedem</Text>
        </View>
      </View>
      <Voucher />
      <Voucher />
      <Voucher />
      <Voucher />
      <Voucher />
    </View>
  );
}

const Voucher = () => {
  return (
    <View className="bg-gray-100  border border-gray-200 w-[99%] my-3 p-2 rounded-l-md">
      <Text className="text-black text-md font-bold">📎Best Deal: 20% OFF</Text>
      <Text className="text-black text-md">
        20DEALS *Min Spend $150 Valid till 12/12/2024
      </Text>
    </View>
  );
};
