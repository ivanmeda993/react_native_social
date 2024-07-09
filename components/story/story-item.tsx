import React from 'react';
import {Image, Text, View} from 'react-native';
import {storyStyle} from './style.ts';

interface StoryItemProps {
  story: UserStory;
}
const StoryItem = ({story}: StoryItemProps) => {
  return (
    <View style={storyStyle.storyContainer}>
      <View style={storyStyle.imageContainer}>
        <Image style={storyStyle.image} source={{uri: story.profileImage}} />
      </View>
      <Text style={storyStyle.firstName}>{story.firstName}</Text>
    </View>
  );
};

export default StoryItem;
