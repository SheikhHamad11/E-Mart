import {View, Text, Pressable} from 'react-native';
import React from 'react';

export default function ButtonOnly({text, onPress}) {
  return (
    <Pressable
      className="bg-black p-3 items-center rounded-md my-3"
      onPress={onPress}>
      <Text className="text-white">{text}</Text>
    </Pressable>
  );
}
