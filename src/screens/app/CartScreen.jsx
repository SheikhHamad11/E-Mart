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
import {useDispatch, useSelector} from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../../redux/CartSlice';
export default CartScreen = ({navigation}) => {
  // const {cartItems, setCartItems} = useCart();
  const cartItems = useSelector(state => state.cart.items);
  const updateQuantity = (item, increment) => {
    const updatedCartItems = cartItems.map(cartItem =>
      cartItem.id === item.id
        ? {...cartItem, quantity: cartItem.quantity + increment}
        : cartItem,
    );
    setCartItems(updatedCartItems);
  };
  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  // console.log('cartItems', cartItems);
  return (
    <View className="px-3 flex-1 bg-white">
      <HomeHeader title={'Cart'} length={cartItems.length} />
      {cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            renderItem={({item, index}) => (
              <CartItem
                item={item}
                index={index}
                updateQuantity={updateQuantity}
              />
            )}
            keyExtractor={item => item.id}
          />
          <Pressable
            className="bg-black w-[95%] mx-auto rounded-md p-3 my-3"
            onPress={() =>
              navigation.navigate('CheckOut', {cartItems, totalCartItems})
            }>
            <Text className="text-white text-center">
              CheckOut({totalCartItems})
            </Text>
          </Pressable>
        </>
      ) : (
        <Text className="text-black text-xl">No items in Cart</Text>
      )}
    </View>
  );
};

const CartItem = ({item, index, updateQuantity}) => {
  // const [count, setCount] = useState(1);
  // const {removeFromCart} = useCart();
  const dispatch = useDispatch();
  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };
  return (
    <View className="bg-gray-200 p-3 space-x-2 flex-row rounded-lg my-5 ">
      <View>
        <Image source={{uri: item.image}} className="h-32 w-24 rounded-lg" />
        <View className="flex-row justify-between mt-2">
          <Pressable
            className="bg-white w-6 h-6 items-center justify-center rounded-full"
            // onPress={() => updateQuantity(item, -1)}
            onPress={() => dispatch(decreaseQuantity(item.id))}
            disabled={item.quantity === 1}>
            <Text className="text-black">-</Text>
          </Pressable>
          <Text className="text-black text-lg">{item.quantity}</Text>
          <Pressable
            className="bg-white w-6 h-6 items-center justify-center rounded-full"
            // onPress={() => updateQuantity(item, 1)}
            onPress={() => dispatch(increaseQuantity(item.id))}>
            <Text className="text-black">+</Text>
          </Pressable>
        </View>
      </View>
      <View>
        <Text className="text-lg font-bold text-black">{item.name}</Text>
        <Text className="text-black">Price : ${item.price}</Text>
        <Text className="text-black">Cat. : {item.category}</Text>
        <Text className="text-black">Brand : {item.brand}</Text>
        <Text className="text-black">Stock : {item.stock}</Text>
        <Text className="text-black">Rating : {item.rating}⭐</Text>

        <TouchableOpacity
          className="bg-black rounded-md p-2 items-center mt-2"
          // onPress={() => removeFromCart(item.id)}
          onPress={handleRemoveFromCart}>
          <Text className="text-white">Remove from Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
