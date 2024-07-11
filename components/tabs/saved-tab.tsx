import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {tabStyle} from './style.ts';
import {USER_PROFILE} from '../../mocks/user.ts';

const SavedTab = () => {
  return (
    <ScrollView style={tabStyle.tabContentContainer}>
      <View style={tabStyle.tabContent}>
        {USER_PROFILE.saved.map((photo, index) => (
          <Image key={index} style={tabStyle.image} source={{uri: photo}} />
        ))}
      </View>
    </ScrollView>
  );
};

export default SavedTab;
