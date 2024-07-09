import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../libs/getFontFamily.ts';

export const globalStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
  },
  messageIcon: {
    padding: 14,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 12,
  },
  messageNumber: {
    color: '#fff',
    fontSize: 6,
    fontFamily: getFontFamily('Inter', '600'),
  },
});
