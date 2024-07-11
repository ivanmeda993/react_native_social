import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/home-screen.tsx';
import ProfileScreen from '../screens/profile/profile-screen.tsx';
import {ProfileTabsParamList, RootStackParamList} from '../types/navigation';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabTitle from '../components/tabs/tab-title.tsx';
import PhotosTab from '../components/tabs/photos-tab.tsx';
import SavedTab from '../components/tabs/saved-tab.tsx';
import VideosTab from '../components/tabs/videos-tab.tsx';

const RootStack = createStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();
const ProfileTabs = createMaterialTopTabNavigator<ProfileTabsParamList>();

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
          height: 3,
        },
      }}>
      <ProfileTabs.Screen
        name="Photos"
        options={{
          tabBarLabel: ({focused}) => (
            <TabTitle isFocused={focused} title="Photos" />
          ),
        }}
        component={PhotosTab}
      />
      <ProfileTabs.Screen
        name="Videos"
        options={{
          tabBarLabel: ({focused}) => (
            <TabTitle isFocused={focused} title="Videos" />
          ),
        }}
        component={VideosTab}
      />
      <ProfileTabs.Screen
        name="Saved"
        options={{
          tabBarLabel: ({focused}) => (
            <TabTitle isFocused={focused} title="Saved" />
          ),
        }}
        component={SavedTab}
      />
    </ProfileTabs.Navigator>
  );
};

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => null,
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        header: () => null,
        headerShown: false,
      }}
      initialRouteName="Home">
      <RootStack.Screen name="Drawer" component={DrawerNavigation} />
    </RootStack.Navigator>
  );
};

export default MainNavigation;
