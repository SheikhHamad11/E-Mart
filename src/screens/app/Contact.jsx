import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Contact() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={{color: 'black'}}>Contact</Text>
      <TouchableOpacity
        style={{backgroundColor: 'green', padding: 10, alignItems: 'center'}}
        onPress={() => navigation.navigate('Home')}>
        <Text>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}
