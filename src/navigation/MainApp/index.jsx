import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CartScreen from '../../screens/app/CartScreen';
import WishList from '../../screens/app/WishList';
import Account from '../../screens/app/Account';
import OrderScreen from '../../screens/app/OrderScreen';
import Home from '../../screens/app/Home';
import AllProducts from '../../screens/app/components/AllProducts';
import ProductDetails from '../../screens/app/ProductDetails';
import Vouchers from '../../screens/app/Vouchers';
import Ratings from '../../screens/app/Ratings';
import CheckOut from '../../screens/app/CheckOut';
import TrackOrder from '../../screens/app/TrackOrder';
import OrderDetails from '../../screens/app/OrderDetails';
import LeaveAReview from '../../screens/app/LeaveAReview';
import SubmitReview from '../../components/CommonReview';
import GenerateInvoice from '../../screens/app/GenerateInvoice';
import CommonReview from '../../components/CommonReview';
export default function MainApp() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const Tabs = () => {
    return (
      <View className="bg-white flex-1">
        <Tab.Navigator
          initialRouteName="Home"
          // screenOptions={{
          //   tabBarStyle: {
          //     backgroundColor: 'black',

          //     height: 70,
          //     paddingBottom: 10,
          //     borderTopLeftRadius: 30,
          //     borderTopRightRadius: 30,
          //   },
          //   headerShown: false,
          // }}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'WishList') {
                iconName = focused ? 'heart' : 'heart-outline';
              } else if (route.name === 'Cart') {
                iconName = focused ? 'cart' : 'cart-outline';
              } else if (route.name === 'Order') {
                iconName = focused ? 'document-text' : 'document-text-outline';
              } else if (route.name === 'Account') {
                iconName = focused ? 'settings' : 'settings-outline';
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: 'black',

              height: 70,
              paddingBottom: 10,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            },
            headerShown: false,
          })}>
          {/* <Tab.Screen name="HomeTabs" component={HomeTabs} />  */}
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="WishList" component={WishList} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Order" component={OrderScreen} />
          <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
      </View>
    );
  };

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="AllProducts" component={AllProducts} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Vouchers" component={Vouchers} />
      <Stack.Screen name="Ratings" component={Ratings} />
      <Stack.Screen name="CheckOut" component={CheckOut} />
      <Stack.Screen name="TrackOrder" component={TrackOrder} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
      <Stack.Screen name="LeaveAReview" component={LeaveAReview} />
      <Stack.Screen name="CommonReview" component={CommonReview} />
      <Stack.Screen name="GenerateInvoice" component={GenerateInvoice} />
    </Stack.Navigator>
  );
}
