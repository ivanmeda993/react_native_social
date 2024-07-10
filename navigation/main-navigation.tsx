import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/home-screen.tsx';
import ProfileScreen from '../screens/profile/profile-screen.tsx';
import {RootStackParamList} from '../types/navigation';

const RootStack = createStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        header: () => null,
        headerShown: false,
      }}
      initialRouteName="Home">
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Profile" component={ProfileScreen} />
    </RootStack.Navigator>
  );
};

export default MainNavigation;
