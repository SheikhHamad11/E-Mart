import React, {useContext} from 'react';
import {View, Text, FlatList, Pressable, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import HomeHeader from './components/HomeHeader';
import {LikeContext} from '../../context/LikedContext';

const Wishlist = ({navigation}) => {
  const {liked} = useContext(LikeContext);

  return (
    <View className="px-3">
      <HomeHeader title="WishList" length={liked?.length} />
      {liked.length > 0 ? (
        <FlatList
          data={liked}
          renderItem={({item, index}) => (
            <RenderProduct item={item} index={index} navigation={navigation} />
          )}
          keyExtractor={item => item?.id}
          numColumns={1}
          contentContainerStyle={{paddingHorizontal: 10, marginBottom: 50}}
        />
      ) : (
        <Text className="text-black text-xl">No items in wishlist</Text>
      )}
    </View>
  );
};

export default Wishlist;

const RenderProduct = ({item, index, navigation}) => {
  const {liked, setLiked} = useContext(LikeContext);
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
        onPress={() =>
          setLiked(prev => {
            const temp = [...prev];
            temp[index] = !temp[index];
            return temp;
          })
        }
        className="absolute right-5 top-5 bg-white p-2 rounded-full">
        <FontAwesome
          name={liked[index] ? 'heart' : 'heart-outline'}
          size={20}
          color={'black'}
        />
      </Pressable>
    </Pressable>
  );
};
