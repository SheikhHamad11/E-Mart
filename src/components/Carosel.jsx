import React from 'react';
import {View, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

const {width} = Dimensions.get('window');

const ParallaxCarousel = () => {
  const images = [
    {
      uri: 'https://orient.com.pk/cdn/shop/articles/season_end_sale.jpg?v=1597754442',
    },
    {
      uri: 'https://stores.vijaysales.com/files/outlet/outlet_facebook_images/outlet_cover_photo/280506/Banner_4_jpg.jpg',
    },
    {
      uri: 'https://orient.com.pk/cdn/shop/articles/season_end_sale.jpg?v=1597754442',
    },
  ];

  return (
    <Carousel
      loop
      width={width}
      height={width / 2}
      autoPlay={true}
      data={images}
      scrollAnimationDuration={5000}
      // onSnapToItem={index => console.log('current index:', index)}
      renderItem={({item, index}) => (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Image source={item} className="w-96 h-48" />
        </View>
      )}
    />
  );
};

export default ParallaxCarousel;
