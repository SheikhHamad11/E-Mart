import {View, Text} from 'react-native';
import React from 'react';
import HomeHeader from './components/HomeHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import ButtonOnly from '../../components/ButtonOnly';
export default function ManageAddress({navigation}) {
  return (
    <View className="px-3 bg-white flex-1">
      <HomeHeader title={'Manage Address'} />
      <Address
        text="Lahore,Pakistan"
        address={'New York,USA'}
        number={'0312-4047953'}
      />
      <Address
        text="Islamabad,Pakistan"
        address={'New York,USA'}
        number={'0312-4047953'}
      />
      <Address
        text="Karachi,Pakistan"
        address={'New York,USA'}
        number={'0312-4047953'}
      />
      <ButtonOnly
        text={'Add New Address'}
        onPress={() => navigation.navigate('AddNewAddress')}
      />
    </View>
  );
}

const Address = ({text, address, number}) => {
  return (
    <View className="border border-zinc-300 p-3 rounded-md my-2">
      <View className="flex-row justify-between">
        <Text className="text-zinc-400">{text}</Text>
        <FontAwesome name={'share'} size={20} color={'gray'} />
      </View>
      <View className="flex-row space-x-1 my-2">
        <FontAwesome name={'map'} size={20} color={'gray'} />
        <Text className="text-zinc-400">{address}</Text>
      </View>
      <View className="flex-row space-x-1 my-2">
        <FontAwesome name={'phone'} size={20} color={'gray'} />
        <Text className="text-zinc-400">{number}</Text>
      </View>
      <ButtonOnly text="Change Address" />
    </View>
  );
};
