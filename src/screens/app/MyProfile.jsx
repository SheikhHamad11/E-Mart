import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import HomeHeader from './components/HomeHeader';

import ButtonOnly from '../../components/ButtonOnly';

export default function MyProfile({navigation}) {
  return (
    <View className="px-3">
      <HomeHeader title={'My Profile'} />
      <Image
        className="h-32 w-32 rounded-full self-center"
        source={{
          uri: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg',
        }}
      />

      <CustomInput text="Name" placeholder={'Hamad'} />
      <CustomInput text="Email" placeholder={'sheikhhamad1830@gmail.com'} />
      <CustomInput text="Mobile No." placeholder={'0312-4047953'} />
      <CustomInput text="Gender" placeholder={'Male'} />
      <CustomInput text="Date of Birth" placeholder={'20-02-2001'} />
      <ButtonOnly text={'Save'} onPress={() => navigation.goBack()} />
    </View>
  );
}

const CustomInput = ({text, icon, value, placeholder, onChange}) => {
  return (
    <>
      <Text className="text-black">{text}</Text>
      <View>
        <TextInput
          className="border border-zinc-400 my-3 rounded-md p-2 text-black"
          placeholder={placeholder}
          value={value}
          placeholderTextColor={'rgba(0,0,0,0.8)'}
          onChange={onChange}
        />
      </View>
    </>
  );
};
