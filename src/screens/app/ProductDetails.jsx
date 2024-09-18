import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import HomeHeader from './components/HomeHeader';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import {useCart} from '../../context/CartContext';
import {useWishlist} from '../../context/WishlistContext';
import CommonButton from '../../components/CommonButton';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../redux/CartSlice';
import {toggleWishlist} from '../../redux/WishlistSlice';
const sizes = ['XS', 'S', 'M', 'L', 'XL'];
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6'];
export default function ProductDetails({route, navigation}) {
  const {item} = route.params;

  const [selectedSize, setSelectedSize] = useState('XS');
  const [selectedColor, setSelectedColor] = useState('#3498db');
  const showToast = () => {
    ToastAndroid.showWithGravity(
      'An item added to cart!',
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
    );
  };
  // const {addToCart} = useCart();

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };
  const wishlistItems = useSelector(state => state?.wishList.items);
  const isInWishlist = wishlistItems?.some(i => i.id === item.id);
  return (
    <>
      <ScrollView className="bg-white px-3">
        <HomeHeader title={'Product Details'} />

        <Image
          source={{uri: item.image}}
          className="w-[100%] rounded-md h-72 mx-auto"
        />
        <View className="mb-32">
          <View className="flex-row justify-between items-center my-3 space-y-2">
            <View className="">
              <Text className="text-xl font-bold text-black">{item.name}</Text>
              <View className="flex-row space-x-2 mx-2">
                <Text className="text-base text-black">
                  <FontAwesome name="star" size={15} color={'gray'} />
                  {item.rating}
                </Text>
                <Text className="text-base text-black">
                  <FontAwesome name="triangle" size={10} color={'gray'} />
                  {item.numReviews}
                </Text>
              </View>
            </View>

            <Pressable
              className="border border-black rounded-full p-2"
              onPress={() =>
                // setLiked(prev => {
                //   const temp = [...prev];
                //   temp[index] = !temp[index];
                //   return temp;
                // })
                dispatch(toggleWishlist(item))
              }>
              <FontAwesome
                name={isInWishlist ? 'heart' : 'heart-outline'}
                size={20}
                color={'black'}
              />
            </Pressable>
          </View>
          <Text className="text-xl text-black">${item.price}</Text>
          <View className="border border-gray-300 border-dashed my-2 "></View>
          {/* vouchers  */}
          <View className="flex-row justify-between items-center my-4">
            <Text className="text-black text-xl">Available Vouchers</Text>
            <Pressable onPress={() => navigation.navigate('Vouchers')}>
              <Text className="text-black">View All</Text>
            </Pressable>
          </View>
          <View className="bg-gray-100  border border-gray-200 w-[99%] p-2 rounded-l-md">
            <Text className="text-black text-md font-bold">
              📎Best Deal: 20% OFF
            </Text>
            <Text className="text-black text-md">
              20DEALS *Min Spend $150 Valid till 12/12/2024
            </Text>
          </View>
          {/* Sizes  */}
          <View>
            <Text className="text-black text-xl">Size</Text>
            <View className="flex-row space-x-2 my-2">
              {sizes.map(item => {
                return (
                  <Pressable
                    onPress={() => setSelectedSize(item)}
                    className={` h-12   mx-2   p-3 rounded-lg ${
                      selectedSize == item ? 'bg-black' : 'bg-gray-200'
                    }`}>
                    <Text
                      className={` text-center ${
                        selectedSize == item ? 'text-white' : 'text-black'
                      }`}>
                      {item}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
          {/* colors  */}
          <View className="">
            <Text className="text-black text-xl">Colors</Text>
            <View className="flex-row space-x-2 my-2">
              {colors.map((item, ind) => {
                return (
                  <Pressable
                    key={ind}
                    onPress={() => setSelectedColor(item)}
                    className={`w-12   mx-2   p-4 rounded-lg border ${
                      selectedColor == item ? 'border-black' : 'border-white'
                    }`}
                    style={{backgroundColor: item}}></Pressable>
                );
              })}
            </View>
          </View>
          {/* product info  */}
          <View>
            <Text className="text-black text-xl">Product Information </Text>
            <ProductInfo title="Material" desc="100% Acrylic" />
            <ProductInfo title="Care Label" desc="100% Acrylic" />
            <ProductInfo title="SKU" desc="UBL-SS-S5-C6-245" />
            <ProductInfo title="Care Label" desc="Vary" />
            <ProductInfo title="Care Label" desc="High Neck" />
            <ProductInfo title="Pattern" desc="Solid" />
          </View>
          {/* ratings & review  */}
          <View className="flex-row justify-between items-center my-4">
            <Text className="text-black text-xl">Rating & Reviews </Text>
            <Pressable onPress={() => navigation.navigate('Ratings')}>
              <Text className="text-black">View All</Text>
            </Pressable>
          </View>

          <View className="flex-row justify-between">
            <View className="w-[40%]">
              <Text className="text-black text-2xl font-semibold text-center">
                4.8
              </Text>
              <View className="flex-row justify-center space-x-1 ">
                {[...Array(5)].map((_, index) => (
                  <FontAwesome
                    key={index}
                    name={'star'}
                    size={10}
                    color={'gray'}
                  />
                ))}
              </View>
              <Text className="text-black text-sm text-center">
                563 ratings *100 reviews
              </Text>
            </View>
            <View className="border-[0.5px] border-gray-300"></View>
            <View className="w-[40%]">
              {[...Array(5)].map((_, index) => (
                <View className="flex-row items-center space-x-1">
                  <Text className="text-black text-sm">{index + 1}</Text>
                  <FontAwesome
                    key={index}
                    name={'star'}
                    size={10}
                    color={'gray'}
                  />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      {/* addtocart buttons  */}
      <View className="flex-row justify-between absolute bottom-0 items-center  bg-white w-[100%]">
        <CommonButton
          title1={'Buy Now'}
          title2={'Add to Cart'}
          onPress1={() => {
            navigation.navigate('CheckOut', {item});
          }}
          onPress2={() => {
            // addToCart(item),
            handleAddToCart(item);
            showToast();
          }}
        />
      </View>
    </>
  );
}

const ProductInfo = ({title, desc}) => {
  return (
    <View className="flex-row ju my-1 ">
      <View className="w-[45%]">
        <Text className="text-black text-sm ">{title} </Text>
      </View>
      <View className="w-[45%]">
        <Text className="text-black text-sm text-start ">: {desc} </Text>
      </View>
    </View>
  );
};
