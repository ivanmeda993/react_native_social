import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../libs/scailng.ts';

export const globalStyle = StyleSheet.create({
  screenContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
  },
  pageContainer: {
    marginLeft: horizontalScale(10),
    marginRight: verticalScale(10),
  },
  flexGrow: {
    flexGrow: 1,
  },
});
