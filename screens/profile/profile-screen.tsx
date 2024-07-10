import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {globalStyle} from '../../assets/styles/globalStyle.ts';
import {ProfilePagePropsType} from '../../types/navigation';

const ProfileScreen = ({navigation}: ProfilePagePropsType) => {
  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <Text>Profile screen</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
