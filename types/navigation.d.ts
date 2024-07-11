import {NativeStackScreenProps} from 'react-native-screens/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// Define the parameter list for ProfileTabs
type ProfileTabsParamList = {
  Photos: undefined;
  Videos: undefined;
  Saved: undefined;
};
type ProfileTabsProps = NativeStackScreenProps<
  ProfileTabsParamList,
  keyof ProfileTabsParamList
>;
type RootStackParamList = {
  Drawer: undefined;
  Home: undefined;
  Profile: {userId: string};
};

type HomePageProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type ProfilePagePropsType = NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>;
