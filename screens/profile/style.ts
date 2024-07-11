import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../libs/scailng.ts';
import {getFontFamily} from '../../libs/getFontFamily.ts';

export const profileStyle = StyleSheet.create({
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    padding: horizontalScale(4),
    borderRadius: horizontalScale(90),
  },
  profileImage: {
    width: horizontalScale(90),
    height: horizontalScale(90),
    borderRadius: horizontalScale(90) / 2,
  },
  userName: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
    textAlign: 'center',
    marginTop: verticalScale(5),
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: verticalScale(20),
    paddingBottom: verticalScale(30),
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
  },
  statAmount: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(20),
    color: '#022150',
    textAlign: 'center',
  },
  statLabel: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    color: '#022150',
    textAlign: 'center',
  },
  statBorder: {
    borderRightWidth: 1,
    borderRightColor: '#E9EFF1',
  },
});
