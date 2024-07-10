import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../libs/getFontFamily.ts';

export const storyStyle = StyleSheet.create({
  userStoriesContainer: {
    marginTop: 10,
    marginHorizontal: 10,
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
});
