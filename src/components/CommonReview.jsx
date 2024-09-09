import {View, Text, Pressable} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/Ionicons';
export default function CommonReview({navigation, route}) {
  const {title, title2, btitle, onPress} = route.params;
  return (
    <View className="flex-1 justify-center items-center">
      <View className="bg-black w-24 h-24 items-center justify-center rounded-full mb-44">
        <FontAwesome name={'checkmark'} size={50} color={'white'} />
      </View>
      <Text className="text-black  text-xl text-center">{title}</Text>
      <Text className="text-gray-400 text-center ">
        Your {title2} has been posted Successfully.
      </Text>
      <Pressable
        className="bg-black w-[90%] p-3 rounded-md   text-center my-24"
        onPress={onPress}>
        <Text className="text-white   text-center">{btitle}</Text>
      </Pressable>
    </View>
  );
}
