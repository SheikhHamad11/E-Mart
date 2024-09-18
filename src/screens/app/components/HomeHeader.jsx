import {View, Text, Pressable} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../../context/ThemeContext';
export default function HomeHeader({title, share, length}) {
  const navigation = useNavigation();
  const {theme} = useTheme();
  return (
    <View className="flex-row justify-between items-center my-5">
      <View className="flex-row">
        <Pressable
          className={`${
            theme === 'dark' ? 'border-black' : 'border-white'
          } border  rounded-full w-7 h-7 items-center justify-center mr-5`}
          onPress={() => navigation.goBack()}>
          <FontAwesome
            name="angle-left"
            size={15}
            color={theme === 'dark' ? 'black' : 'white'}
          />
        </Pressable>
        <Text
          className={`${
            theme === 'dark' ? 'text-black' : 'text-white'
          } text-2xl font-bold`}>
          {title}
        </Text>
        {length >= 0 && (
          <Text className="text-black text-2xl font-bold">({length})</Text>
        )}
      </View>

      {share == true && (
        <FontAwesome
          name="qrcode"
          size={20}
          color={theme === 'dark' ? 'white' : 'black'}
        />
      )}
    </View>
  );
}
