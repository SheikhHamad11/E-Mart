import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function CommonButton({title1, title2, onPress1, onPress2}) {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between  items-center p-3 z-10  w-[100%]">
      <Pressable className="bg-black w-[48%] rounded-md p-3" onPress={onPress1}>
        <Text className="text-white text-center">{title1}</Text>
      </Pressable>
      <Pressable
        className="border border-black w-[48%] rounded-md p-3"
        onPress={onPress2}>
        <Text className="text-black text-center">{title2}</Text>
      </Pressable>
    </View>
  );
}
