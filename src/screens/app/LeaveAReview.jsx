import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import HomeHeader from './components/HomeHeader';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import ExampleProduct from '../../components/ExampleProduct';
export default function LeaveAReview({navigation}) {
  return (
    <View className="px-3">
      <HomeHeader title={'Leave a Review'} />
      <ExampleProduct />
      <View className="bg-gray-200 p-3 space-x-2 items-center rounded-lg my-5 ">
        <Text className="text-lg font-bold text-black">
          How was Your Order?
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {[...Array(5)].map((_, index) => (
            <FontAwesome key={index} name={'star'} size={24} color={'gray'} />
          ))}
        </View>
      </View>
      <View className="flex-row justify-between">
        <Text className="text-lg font-bold text-black">Leave a Review</Text>
        <Text className="text-md  text-gray-500">Max 250 words</Text>
      </View>

      <View className="bg-gray-200 p-5 space-x-2  rounded-lg my-5 ">
        <TextInput
          multiline
          placeholder="Write your Review"
          placeholderTextColor={'gray'}
          className="text-black"
        />
      </View>
      <View className="flex-row justify-between  items-center p-3 z-10  w-[100%]">
        <Pressable
          className="bg-black w-[48%] rounded-md p-3"
          onPress={() =>
            navigation.navigate('CommonReview', {
              title: 'Review Posted Successfully!',
              title2: 'Review',
              btitle: 'Okay',
            })
          }>
          <Text className="text-white text-center">Submit Review</Text>
        </Pressable>
        <Pressable
          className="border border-black w-[48%] rounded-md p-3"
          onPress={() => navigation.navigate('Home')}>
          <Text className="text-black text-center">Maybe Later</Text>
        </Pressable>
      </View>
    </View>
  );
}
