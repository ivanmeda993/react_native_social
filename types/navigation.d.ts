import {NativeStackScreenProps} from 'react-native-screens/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
};

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type ProfilePagePropsType = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;
