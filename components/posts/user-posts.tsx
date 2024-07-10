import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {USER_POSTS} from '../../mocks/user.ts';
import PostItem from './post-item.tsx';
import PostHeader from './post-header.tsx';
import UserStories from '../story/user-stories.tsx';

const UserPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [renderedPosts, setRenderedPosts] = useState<UserPost[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <>
            <PostHeader />
            <UserStories />
          </>
        }
        data={USER_POSTS}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <PostItem post={item} key={item.id} />}
      />
    </View>
  );
};

export default UserPosts;
