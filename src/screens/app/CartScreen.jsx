import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useCart} from '../../context/CartContext';
import HomeHeader from './components/HomeHeader';

export default CartScreen = ({navigation}) => {
  const {cartItems} = useCart();
  console.log('cartItems', cartItems);
  return (
    <View className="px-3 flex-1 bg-white">
      <HomeHeader title={'Cart'} length={cartItems.length} />
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={({item}) => <CartItems item={item} />}
            keyExtractor={item => item.id}
          />
          <Pressable
            className="bg-black w-[95%] mx-auto rounded-md p-3 my-3"
            onPress={() => navigation.navigate('CheckOut')}>
            <Text className="text-white text-center">
              CheckOut({cartItems.length})
            </Text>
          </Pressable>
        </>
      ) : (
        <Text className="text-black text-xl">No items in Cart</Text>
      )}
    </View>
  );
};

const CartItems = ({item}) => {
  const {removeFromCart} = useCart();
  return (
    <View className="bg-gray-200 p-3 space-x-2 flex-row rounded-lg my-5 ">
      <Image source={{uri: item.image}} className="h-32 w-24 rounded-lg" />
      <View>
        <Text className="text-lg font-bold text-black">{item.name}</Text>
        <Text className="text-black">${item.price}</Text>
        <Text className="text-black">{item.category}</Text>
        <Text className="text-black">{item.brand}</Text>
        <Text className="text-black">{item.stock}</Text>
        <Text className="text-black">{item.rating}</Text>
        <TouchableOpacity
          className="bg-black rounded-md p-2 items-center"
          onPress={() => removeFromCart(item.id)}>
          <Text className="text-white">Remove from Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
