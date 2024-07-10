import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/home-screen.tsx';
import {ROUTES} from './routes.ts';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        headerShown: false,
      }}
      initialRouteName={ROUTES.Home}>
      <Stack.Screen name={ROUTES.Home} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
