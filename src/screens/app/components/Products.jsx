import {View, Text, FlatList, StyleSheet, Image, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import {products} from '../../../components/Products';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import {useWishlist} from '../../../context/WishlistContext';
import {useDispatch, useSelector} from 'react-redux';
import {toggleWishlist} from '../../../redux/WishlistSlice';
export default function Products({item}) {
  const navigation = useNavigation();

  return (
    <FlatList
      data={products}
      renderItem={({item, index}) => (
        <RenderProduct item={item} index={index} navigation={navigation} />
      )}
      keyExtractor={item => item.id}
      numColumns={2}
      contentContainerStyle={{paddingHorizontal: 10, marginBottom: 50}}
    />
  );
}

const RenderProduct = ({item, index, navigation}) => {
  // const {toggleItemInWishlist, liked, setLiked} = useWishlist();
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishList.items);
  const isInWishlist = wishlistItems?.some(i => i.id === item.id);
  return (
    <Pressable
      className="flex-1 items-center p-4"
      onPress={() => {
        navigation.navigate('ProductDetails', {
          item,
          index,
        });
      }}>
      <Image
        source={{uri: item.image}}
        sharedTransitionTag={item.image}
        className="w-40 h-60 rounded-lg items-center border border-gray-300"
      />
      <Text className="text-black text-base text-center  font-bold">
        {item.name}
      </Text>
      <Text className="text-md text-gray-500">${item.price}</Text>
      <Pressable
        onPress={() => {
          // setLiked(prev => {
          //   const temp = [...prev];
          //   temp[index] = !temp[index];
          //   return temp;
          // });
          // toggleItemInWishlist(item);
          dispatch(toggleWishlist(item));
        }}
        className="absolute right-5 top-5 bg-white p-2 rounded-full">
        <FontAwesome
          name={isInWishlist ? 'heart' : 'heart-outline'}
          size={20}
          color={'black'}
        />
      </Pressable>
    </Pressable>
  );
};
