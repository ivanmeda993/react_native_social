import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Title from '../title/Title.tsx';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {postStyle} from './style.ts';

const PostHeader = () => {
  return (
    <View style={postStyle.header}>
      <Title title="Let's Explore" />
      <TouchableOpacity style={postStyle.messageIcon}>
        <FontAwesomeIcon icon={faEnvelope} color="#898DAE" size={20} />
        <View style={postStyle.messageNumberContainer}>
          <Text style={postStyle.messageNumber}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PostHeader;
