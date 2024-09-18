import {View, Text} from 'react-native';
import React from 'react';
import HomeHeader from './components/HomeHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import ButtonOnly from '../../components/ButtonOnly';
export default function PaymentMethods({navigation}) {
  return (
    <View className="bg-white flex-1 px-3">
      <HomeHeader title={'Payment Methods'} />
      <Payments title="Paypal" icon="paypal" />
      <Payments title="Payoneer" icon="shuffle" />
      <Payments title="Bank Transfer" icon="building" />
      <Payments title="MasterCard" icon="cc-mastercard" />
      <Payments title="Card" icon="money-check" />
      <ButtonOnly
        text="Add New Payment Method"
        onPress={() => navigation.navigate('AddNewPayment')}
      />
    </View>
  );
}

const Payments = ({title, icon}) => {
  return (
    <View className="border my-3 border-gray-200 rounded-md p-4 flex-row justify-between">
      <View className="flex-row space-x-2">
        <FontAwesome name={icon} size={20} color={'gray'} />
        <Text className="text-zinc-500">{title}</Text>
      </View>
      <Text className="text-zinc-500">Connected</Text>
    </View>
  );
};
