import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../libs/getFontFamily.ts';
import {scaleFontSize} from '../../libs/scailng.ts';

export const style = StyleSheet.create({
  title: {
    fontSize: scaleFontSize(24),
    fontFamily: getFontFamily('Inter', '600'),
  },
});
