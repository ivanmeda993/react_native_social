import React from 'react';
import {FlatList, View} from 'react-native';
import {USER_POSTS} from '../../mocks/user.ts';
import PostItem from './post-item.tsx';
import PostHeader from './post-header.tsx';
import UserStories from '../story/user-stories.tsx';
import {usePagination} from '../../hooks/usePagination.ts';
import {POSTS_PAGE_SIZE} from '../../libs/constants.ts';

const UserPosts = () => {
  const {renderedData, fetchMore} = usePagination(USER_POSTS, POSTS_PAGE_SIZE);

  return (
    <View>
      <FlatList
        onEndReachedThreshold={0.5}
        onEndReached={fetchMore}
        ListHeaderComponent={
          <>
            <PostHeader />
            <UserStories />
          </>
        }
        data={renderedData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <PostItem post={item} key={item.id} />}
      />
    </View>
  );
};

export default UserPosts;
