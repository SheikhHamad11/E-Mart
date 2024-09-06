import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/app/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CartScreen from '../../screens/app/CartScreen';
import WishList from '../../screens/app/WishList';
import Profile from '../../screens/app/Profile';
import OrderScreen from '../../screens/app/OrderScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome6';
import {View} from 'react-native';
import Products from '../../screens/app/components/Products';
import AllProducts from '../../screens/app/components/AllProducts';
import ProductDetails from '../../screens/app/ProductDetails';
import Vouchers from '../../screens/app/Vouchers';
import Ratings from '../../screens/app/Ratings';
import CheckOut from '../../screens/app/CheckOut';
import TrackOrder from '../../screens/app/TrackOrder';
import OrderDetails from '../../screens/app/OrderDetails';
import LeaveAReview from '../../screens/app/LeaveAReview';
import SubmitReview from '../../screens/app/SubmitReview';
export default function MainApp() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const Tabs = () => {
    return (
      <View className="bg-white flex-1">
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarStyle: {
              backgroundColor: 'black',

              height: 70,
              paddingBottom: 10,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            },
            headerShown: false,
          }}>
          {/* <Tab.Screen name="HomeTabs" component={HomeTabs} />  */}
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesome5 name="house" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="WishList"
            component={WishList}
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesome5 name="heart" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesome5 name="cart-shopping" color={color} size={size} />
              ),
              tabBarBadge: 4,
            }}
          />
          <Tab.Screen
            name="Order"
            component={OrderScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesome5 name="file-alt" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarIcon: ({color, size}) => (
                <FontAwesome5 name="user" color={color} size={size} />
              ),
            }}
          />
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
      <Stack.Screen name="SubmitReview" component={SubmitReview} />
    </Stack.Navigator>
  );
}
