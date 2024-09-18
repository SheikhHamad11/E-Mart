import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import HomeHeader from './components/HomeHeader';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import ExampleProduct from '../../components/ExampleProduct';
import CommonButton from '../../components/CommonButton';
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
      <CommonButton
        title1={'Submit Review'}
        onPress1={() =>
          navigation.navigate('CommonReview', {
            title: 'Review Posted Successfully!',
            title2: 'Review',
            btitle: 'Okay',
          })
        }
        title2={'Maybe Later'}
        onPress2={() => navigation.navigate('Home')}
      />
    </View>
  );
}
