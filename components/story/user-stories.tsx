import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import StoryItem from './story-item.tsx';
import {storyStyle} from './style.ts';

const PAGE_SIZE = 5;

interface UserStoriesProps {
  userStories: UserStory[];
}

const pagination = (data: UserStory[], page: number, pageSize: number) => {
  const start = (page - 1) * pageSize;
  const end = page * pageSize;

  if (start > data.length) {
    console.log('No more data to show');
    return [];
  }

  return data.slice(start, end);
};

const UserStories = ({userStories}: UserStoriesProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [renderedStories, setRenderedStories] = useState<UserStory[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const paginatedStories = pagination(userStories, currentPage, PAGE_SIZE);
    setRenderedStories(paginatedStories);
    setIsLoading(false);
  }, [userStories]);

  console.log('renderedStories ->', renderedStories.length);

  return (
    <View style={storyStyle.userStoriesContainer}>
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          console.log('End of the list');
          if (isLoading) {
            return;
          }
          setIsLoading(true);
          const paginatedStories = pagination(
            userStories,
            currentPage + 1,
            PAGE_SIZE,
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
