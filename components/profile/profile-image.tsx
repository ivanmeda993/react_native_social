import React from 'react';
import {Image, View} from 'react-native';
import {profileStyle} from './style.ts';

interface StoryItemProps {
  imgSrc: string;
  imageDimensions: number;
}
const ProfileImage = ({imgSrc, imageDimensions}: StoryItemProps) => {
  return (
    <View
      style={[profileStyle.imageContainer, {borderRadius: imageDimensions}]}>
      <Image
        source={{uri: imgSrc}}
        style={{
          width: imageDimensions,
          height: imageDimensions,
          borderRadius: imageDimensions / 2,
        }}
      />
    </View>
  );
};

export default ProfileImage;
