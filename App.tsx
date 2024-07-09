import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Title from './components/title/Title.tsx';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {globalStyle} from './assets/styles/global-style.ts';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={globalStyle.header}>
        <Title title="Let's Explore" />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <FontAwesomeIcon icon={faEnvelope} color="#898DAE" size={20} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>3</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default App;
