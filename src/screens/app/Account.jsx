import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import React from 'react';
import HomeHeader from './components/HomeHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import {useAuth} from '../../context/AuthContext';
export default function Profile({navigation}) {
  const {logout} = useAuth();
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
      <Button
        title="Manage Address"
        icon="location-dot"
        onPress={() => navigation.navigate('ManageAddress')}
      />
      <Button
        title="Payment Methods"
        icon="money-check"
        onPress={() => navigation.navigate('PaymentMethods')}
      />
      <Button
        title="Language"
        icon="language"
        onPress={() => navigation.navigate('SelectLanguage')}
      />
      <Button
        title="Account & Security"
        icon="lock"
        onPress={() => navigation.navigate('Security')}
      />
      <Button
        title="My Profile"
        icon="user"
        onPress={() => navigation.navigate('MyProfile')}
      />
      <Button
        title="App Appearance"
        icon="sun"
        onPress={() => navigation.navigate('AppAppearence')}
      />
      <Button
        title="Notifiactions"
        icon="bell"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button
        title="Data & Analytics"
        icon="chart-line"
        onPress={() => navigation.navigate('AnalyticsPage')}
      />
      <Button
        title="Help & Support "
        icon="question"
        onPress={() => navigation.navigate('HelpPage')}
      />
      <Button title="Logout" icon="arrow-right" onPress={logout} />
    </ScrollView>
  );
}

const Button = ({title, icon, onPress}) => {
  return (
    <Pressable onPress={onPress} className="mt-3">
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
    </Pressable>
  );
};
