import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import HomeHeader from './components/HomeHeader';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import {LikeContext} from '../../context/LikedContext';
import {useCart} from '../../context/CartContext';
import {useWishlist} from '../../context/WishlistContext';
const sizes = ['XS', 'S', 'M', 'L', 'XL'];
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6'];
export default function ProductDetails({route, navigation}) {
  const {item, index} = route.params;
  const {liked, setLiked} = useWishlist();
  const [selectedSize, setSelectedSize] = useState('XS');
  const [selectedColor, setSelectedColor] = useState('#3498db');
  const {addToCart} = useCart();

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
                setLiked(prev => {
                  const temp = [...prev];
                  temp[index] = !temp[index];
                  return temp;
                })
              }>
              <FontAwesome
                name={liked[index] ? 'heart' : 'heart-outline'}
                size={20}
                color={'black'}
              />
            </Pressable>
          </View>
          <Text className="text-xl text-black">${item.price}</Text>
          <View className="border border-gray-300 border-dashed my-2 "></View>
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
          <View>
            <Text className="text-black text-xl">Product Information </Text>
            <ProductInfo title="Material" desc="100% Acrylic" />
            <ProductInfo title="Care Label" desc="100% Acrylic" />
            <ProductInfo title="SKU" desc="UBL-SS-S5-C6-245" />
            <ProductInfo title="Care Label" desc="Vary" />
            <ProductInfo title="Care Label" desc="High Neck" />
            <ProductInfo title="Pattern" desc="Solid" />
          </View>
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
                <FontAwesome name="star" size={10} color={'gray'} />
                <FontAwesome name="star" size={10} color={'gray'} />
                <FontAwesome name="star" size={10} color={'gray'} />
                <FontAwesome name="star" size={10} color={'gray'} />
                <FontAwesome name="star" size={10} color={'gray'} />
              </View>
              <Text className="text-black text-sm text-center">
                563 ratings *100 reviews
              </Text>
            </View>
            <View className="border-[0.5px] border-gray-300"></View>
            <View className="w-[40%]">
              <Text className="text-black">
                5 <FontAwesome name="star" size={10} color={'gray'} />
              </Text>
              <Text className="text-black">
                4 <FontAwesome name="star" size={10} color={'gray'} />
              </Text>
              <Text className="text-black">
                3 <FontAwesome name="star" size={10} color={'gray'} />
              </Text>
              <Text className="text-black">
                2 <FontAwesome name="star" size={10} color={'gray'} />
              </Text>
              <Text className="text-black">
                1 <FontAwesome name="star" size={10} color={'gray'} />
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="flex-row justify-between absolute bottom-0 items-center p-3 z-10 bg-white w-[100%]">
        <Pressable
          className="bg-black w-[48%] rounded-md p-3"
          onPress={() => navigation.navigate('CheckOut')}>
          <Text className="text-white text-center">Buy Now</Text>
        </Pressable>
        <TouchableOpacity
          className="border border-black w-[48%] rounded-md p-3"
          onPress={() => {
            addToCart(item), navigation.navigate('Cart');
          }}>
          <Text className="text-black text-center">Add to Cart</Text>
        </TouchableOpacity>
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
