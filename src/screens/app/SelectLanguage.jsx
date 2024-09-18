import {View, Text, ScrollView, Pressable} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from './components/HomeHeader';
import {languages} from '../../components/Languages';

export default function SelectLanguage() {
  const [language, SetLanguage] = useState('English');
  return (
    <ScrollView className="px-3 bg-white flex-1">
      <HomeHeader title={'Language'} />
      <Text className="text-lg font-bold text-zinc-600 mt-4">
        Select your language
      </Text>
      <View className="border border-zinc-200 rounded-md  mx-3 my-3">
        {languages.map(lang => {
          return (
            <View className="mx-3 my-3">
              <View className="flex-row justify-between items-center">
                <Text className="text-lg font-bold text-zinc-600 p-2">
                  {lang.name}
                </Text>
                <View className="w-6 h-6 rounded-full border justify-center items-center">
                  <Pressable
                    onPress={() => SetLanguage(lang.name)}
                    className={`w-4 h-4 rounded-full border  ${
                      language === lang.name && 'bg-black'
                    }  `}></Pressable>
                </View>
              </View>
              <View className="border-b border-b-zinc-200"></View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
