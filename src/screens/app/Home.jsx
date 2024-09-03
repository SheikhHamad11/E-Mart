import {View, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthContext';

export default function Home() {
  const navigation = useNavigation();
  const {logout} = useContext(AuthContext);
  return (
    <View style={{}}>
      <View className="flex flex-row justify-between">
        <Text className="text-black">E-Mart</Text>
        <Text className="text-black text-2xl">E-Mart</Text>
        <Text className="text-black">E-Mart</Text>
      </View>
      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'blue'}}
        onPress={logout}>
        <Text style={{color: 'white', textAlign: 'center'}}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
