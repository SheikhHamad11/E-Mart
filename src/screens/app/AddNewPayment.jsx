import {View, Text, TextInput} from 'react-native';
import React from 'react';
import HomeHeader from './components/HomeHeader';
import ButtonOnly from '../../components/ButtonOnly';

export default function AddNewPayment({navigation}) {
  return (
    <View className="px-3">
      <HomeHeader title={'Add New Payment'} />
      <CustomInput text="Card Holder Name" placeholder={'Amin Smith'} />
      <CustomInput text="Card Number" placeholder={'****6586'} />
      <View className="flex-row  space-x-2">
        <View className="w-[49%]">
          <CustomInput text="Exp.Date" placeholder={'dd.mm.yy'} />
        </View>
        <View className="w-[49%]">
          <CustomInput text="CVC" placeholder={'****'} />
        </View>
      </View>

      <CustomInput text="Country" placeholder={'United States'} />
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
