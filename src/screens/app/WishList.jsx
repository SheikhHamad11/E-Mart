import React from 'react';
import {View, Text, FlatList, Pressable, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import HomeHeader from './components/HomeHeader';
import {useWishlist} from '../../context/WishlistContext';
import {toggleWishlist} from '../../redux/WishlistSlice';
import {useDispatch, useSelector} from 'react-redux';

const Wishlist = ({navigation}) => {
  // const {wishlistItems} = useWishlist();
  const wishlistItems = useSelector(state => state.wishList.items);
  console.log(wishlistItems);

  return (
    <View className="px-3 bg-white flex-1">
      <HomeHeader title="WishList" length={wishlistItems?.length} />
      {wishlistItems?.length > 0 ? (
        <FlatList
          data={wishlistItems}
          renderItem={({item, index}) => (
            <RenderProduct
              item={item}
              index={index}
              navigation={navigation}
              wishlistItems={wishlistItems}
            />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={{paddingHorizontal: 10, marginBottom: 50}}
        />
      ) : (
        <Text className="text-black text-xl">No items in wishlist</Text>
      )}
    </View>
  );
};

export default Wishlist;

const RenderProduct = ({item, index, navigation, wishlistItems}) => {
  // const {toggleItemInWishlist, liked, setLiked} = useWishlist();
  const isInWishlist = wishlistItems?.some(i => i.id === item.id);
  const dispatch = useDispatch();
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
        className="w-40 h-48 rounded-lg items-center border border-gray-300"
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
