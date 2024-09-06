import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import HomeHeader from './components/HomeHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
export default function Profile() {
  return (
    <ScrollView className="px-3 bg-white flex-1">
      <HomeHeader title="Account" share={true} />
      <View className="bg-black p-3 rounded-lg flex-row justify-between space-x-2 ">
        <Image
          source={require('../../images/logo.jpg')}
          className="w-12 h-12 rounded-full"
        />
        <View>
          <Text className="text-lg text-white">Sheikh Hamad</Text>
          <Text className="text-sm text-white">Sheikhhamad1830@gmail.com</Text>
        </View>
        <View className="bg-white p-3 rounded-full">
          <FontAwesome name={'barcode'} size={20} color={'black'} />
        </View>
      </View>
      <Button title="Manage Address" icon="location-dot" />
      <Button title="Payment Methods" icon="money-check" />
      <Button title="Language" icon="language" />
      <Button title="Account & Security" icon="lock" />
      <Button title="My Profile" icon="user" />
      <Button title="App Appearance" icon="sun" />
      <Button title="Notifiactions" icon="bell" />
      <Button title="Data & Analytics" icon="chart-line" />
      <Button title="Help & Support " icon="?" />
      <Button title="Logout" icon="arrow-right" />
    </ScrollView>
  );
}

const Button = ({title, icon, onPress}) => {
  return (
    <View className="mt-3">
      <View className="flex-row items-center justify-between my-2">
        <View className="flex-row items-center space-x-2">
          <View className="bg-gray-100 rounded-full p-3">
            <FontAwesome name={icon} size={20} color={'black'} />
          </View>
          <Text className="text-sm text-black">{title}</Text>
        </View>
        <FontAwesome name="angle-right" size={15} color={'gray'} />
      </View>
      <View className="border-b border-b-gray-200 border-dashed"></View>
    </View>
  );
};
