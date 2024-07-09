import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../libs/getFontFamily.ts';

export const storyStyle = StyleSheet.create({
  userStoriesContainer: {
    marginTop: 10,
    marginHorizontal: 28,
  },
  storyContainer: {
    marginRight: 10,
  },
  firstName: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 14,
    color: '#1D1D26',
    marginTop: 8,
    textAlign: 'center',
  },
  imageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    padding: 4,
    borderRadius: 65,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 65,
  },
});
