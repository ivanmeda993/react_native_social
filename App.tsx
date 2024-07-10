import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/main-navigation.tsx';

function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
