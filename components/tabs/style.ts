import {StyleSheet} from 'react-native';
import {horizontalScale, scaleFontSize} from '../../libs/scailng.ts';
import {getFontFamily} from '../../libs/getFontFamily.ts';

export const tabStyle = StyleSheet.create({
  title: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    color: '#79869F',
  },
  titleFocused: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(16),
    color: '#022150',
  },
  tabContentContainer: {
    backgroundColor: 'white',
  },
  tabContent: {
    paddingHorizontal: horizontalScale(20),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: '48%',
    height: 100,
    marginVertical: 5,
    borderRadius: 10,
  },
});
