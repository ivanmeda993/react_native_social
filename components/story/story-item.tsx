import React from 'react';
import {Text, View} from 'react-native';
import {storyStyle} from './style.ts';
import ProfileImage from '../profile/profile-image.tsx';

interface StoryItemProps {
  story: UserStory;
}
const StoryItem = ({story}: StoryItemProps) => {
  return (
    <View style={storyStyle.storyContainer}>
      <ProfileImage imageDimensions={65} imgSrc={story.profileImage} />
      <Text style={storyStyle.firstName}>{story.firstName}</Text>
    </View>
  );
};

export default StoryItem;
