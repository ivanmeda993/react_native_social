import React from 'react';
import {FlatList, View} from 'react-native';
import StoryItem from './story-item.tsx';
import {storyStyle} from './style.ts';

interface UserStoriesProps {
  userStories: UserStory[];
}
const UserStories = ({userStories}: UserStoriesProps) => {
  return (
    <View style={storyStyle.userStoriesContainer}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={userStories}
        renderItem={({item}) => <StoryItem story={item} key={item.id} />}
      />
    </View>
  );
};

export default UserStories;
