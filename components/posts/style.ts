import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../libs/getFontFamily.ts';

export const postStyle = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

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

  userPostContainer: {
    marginTop: 35,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userTextContainer: {justifyContent: 'center', marginLeft: 8},
  userName: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 16,
    color: '#000',
  },
  userLocation: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 14,
    color: '#898DAE',
    marginTop: 3,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 30,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  actionsContainer: {
    flexDirection: 'row',

    alignItems: 'center',
    marginTop: 10,
    gap: 20,
  },
  iconContainer: {flexDirection: 'row', gap: 4, alignItems: 'center'},
  iconText: {color: '#79869F'},
});
