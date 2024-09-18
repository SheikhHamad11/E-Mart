import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../../context/AuthContext';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Products from './components/Products';
import Categories from './components/Categories';
import Carosel from '../../components/Carosel';

export default function Home() {
  const navigation = useNavigation();
  const {logout} = useContext(AuthContext);
  return (
    <ScrollView className="flex-1 pt-5 px-2  bg-white">
      <View className="flex flex-row justify-between items-center">
        <Image
          source={require('../../images/logo.jpg')}
          style={{height: 50, width: 50}}
        />
        <Text className="text-black text-2xl font-playfair_b dark:text-white">
          E-Mart
        </Text>
        <FontAwesome name="bell" size={25} color={'black'} />
      </View>
      <View className="flex-row justify-between mt-5">
        <View className="flex-row border border-gray-300 rounded-md items-center pl-2 space-x-4  w-80">
          <FontAwesome name="search" size={20} color={'black'} />
          <TextInput
            placeholder="Search Here"
            placeholderTextColor={'gray'}
            className="text-black"
          />
        </View>
        <View className="bg-black w-12 rounded-lg  items-center justify-center">
          <FontAwesome name="search" size={25} color={'white'} />
        </View>
      </View>
      <Carosel />

      <Categories />

      <View className="flex-row justify-between items-center my-4">
        <Text className="text-black text-lg font-playfair_b">Most Popular</Text>
        <Pressable onPress={() => navigation.navigate('AllProducts')}>
          <Text className="text-black">View All</Text>
        </Pressable>
      </View>
      <View>
        <Products />
      </View>
    </ScrollView>
  );
}
