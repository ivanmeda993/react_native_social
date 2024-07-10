import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import StoryItem from './story-item.tsx';
import {storyStyle} from './style.ts';
import {STORIES_PAGE_SIZE} from '../../libs/constants.ts';
import {USER_STORIES} from '../../mocks/user.ts';

const pagination = (data: UserStory[], page: number, pageSize: number) => {
  const start = (page - 1) * pageSize;
  const end = page * pageSize;

  if (start > data.length) {
    return [];
  }

  return data.slice(start, end);
};

const UserStories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [renderedStories, setRenderedStories] = useState<UserStory[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const paginatedStories = pagination(
      USER_STORIES,
      currentPage,
      STORIES_PAGE_SIZE,
    );
    setRenderedStories(paginatedStories);
    setIsLoading(false);
  }, []);

  return (
    <View style={storyStyle.userStoriesContainer}>
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (isLoading) {
            return;
          }
          setIsLoading(true);
          const paginatedStories = pagination(
            USER_STORIES,
            currentPage + 1,
            STORIES_PAGE_SIZE,
          );
          if (paginatedStories.length > 0) {
            setCurrentPage(currentPage + 1);
            setRenderedStories(prev => [...prev, ...paginatedStories]);
          }
          setIsLoading(false);
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={renderedStories}
        renderItem={({item}) => <StoryItem story={item} key={item.id} />}
      />
    </View>
  );
};

export default UserStories;
