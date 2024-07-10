import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import UserPosts from '../../components/posts/user-posts.tsx';
import {globalStyle} from '../../assets/styles/globalStyle.ts';

const HomeScreen = () => {
  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <View style={globalStyle.pageContainer}>
        <StatusBar />
        <UserPosts />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
