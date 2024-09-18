import React from 'react';
import {View, Text, Switch, Pressable} from 'react-native';
import {useTheme} from '../../context/ThemeContext'; // Use the custom theme context
import HomeHeader from './components/HomeHeader';

const ThemeToggleButton = () => {
  const {theme, toggleTheme} = useTheme(); // Access theme and toggle function from context

  return (
    <View
      className={`${
        theme === 'dark' ? 'bg-slate-500' : 'bg-white'
      } px-3 flex-1`}>
      <HomeHeader title={'App Appearence'} />
      <View className="flex-row justify-between items-center border rounded-md border-zinc-300 p-5">
        <Text className={`${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
        </Text>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggleTheme}
          thumbColor={theme === 'dark' ? '#f5dd4b' : '#f4f3f4'}
          trackColor={{false: '#767577', true: '#81b0ff'}}
        />
        <Pressable onPress={toggleTheme}>
          <Text className="p-4 mt-4 bg-blue-500 text-white">Toggle Theme</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ThemeToggleButton;
