import React from 'react';
import {Image, Text, View} from 'react-native';
import ProfileImage from '../profile/profile-image.tsx';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
import {postStyle} from './style.ts';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

interface PostItemProps {
  post: UserPost;
}
const PostItem = ({post}: PostItemProps) => {
  return (
    <View style={postStyle.userPostContainer}>
      <View style={postStyle.user}>
        <View style={postStyle.userContainer}>
          <ProfileImage imgSrc={post.profileImage} imageDimensions={45} />
          <View style={postStyle.userTextContainer}>
            <Text style={postStyle.userName}>{post.name}</Text>
            <Text style={postStyle.userLocation}>{post.location}</Text>
          </View>
        </View>

        <FontAwesomeIcon icon={faEllipsisH} color="#79869F" size={24} />
      </View>

      <View style={postStyle.imageContainer}>
        <Image source={{uri: post.postImage}} style={postStyle.image} />
      </View>
      <View style={postStyle.actionsContainer}>
        <View style={postStyle.iconContainer}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" size={24} />
          <Text style={postStyle.iconText}>{post.likes}</Text>
        </View>
        <View style={postStyle.iconContainer}>
          <FontAwesomeIcon icon={faMessage} color="#79869F" size={24} />
          <Text style={postStyle.iconText}>{post.comments}</Text>
        </View>
        <View style={postStyle.iconContainer}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" size={24} />
          <Text style={postStyle.iconText}>{post.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
