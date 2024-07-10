import React from 'react';
import {FlatList, View} from 'react-native';
import StoryItem from './story-item.tsx';
import {storyStyle} from './style.ts';
import {STORIES_PAGE_SIZE} from '../../libs/constants.ts';
import {USER_STORIES} from '../../mocks/user.ts';
import {usePagination} from '../../hooks/usePagination.ts';

const UserStories = () => {
  const {renderedData, fetchMore} = usePagination(
    USER_STORIES,
    STORIES_PAGE_SIZE,
  );

  return (
    <View style={storyStyle.userStoriesContainer}>
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={fetchMore}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={renderedData}
        renderItem={({item}) => <StoryItem story={item} key={item.id} />}
      />
    </View>
  );
};

export default UserStories;
