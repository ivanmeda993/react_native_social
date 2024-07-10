import React from 'react';
import {SafeAreaView} from 'react-native';
import {globalStyle} from './assets/styles/global-style.ts';
import UserPosts from './components/posts/user-posts.tsx';

function App() {
  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <UserPosts />
    </SafeAreaView>
  );
}

export default App;
