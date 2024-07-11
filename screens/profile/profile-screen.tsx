import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {globalStyle} from '../../assets/styles/globalStyle.ts';
import {ProfilePagePropsType} from '../../types/navigation';
import {profileStyle} from './style.ts';
import {ProfileTabsNavigation} from '../../navigation/main-navigation.tsx';
import {USER_PROFILE} from '../../mocks/user.ts';

const ProfileScreen = ({navigation}: ProfilePagePropsType) => {
  return (
    <SafeAreaView style={globalStyle.screenContainer}>
      <ScrollView
        style={globalStyle.pageContainer}
        contentContainerStyle={[globalStyle.flexGrow]}>
        <View style={profileStyle.profileImageContainer}>
          <View style={profileStyle.profileImageContent}>
            <Image
              style={profileStyle.profileImage}
              source={{uri: USER_PROFILE.profileImage}}
            />
          </View>
        </View>
        <Text style={profileStyle.userName}>{USER_PROFILE.name}</Text>
        <View style={profileStyle.statContainer}>
          <View>
            <Text style={profileStyle.statAmount}>
              {USER_PROFILE.following}
            </Text>
            <Text style={profileStyle.statLabel}>Following</Text>
          </View>
          <View style={profileStyle.statBorder} />
          <View>
            <Text style={profileStyle.statAmount}>
              {USER_PROFILE.followers}
            </Text>
            <Text style={profileStyle.statLabel}>Followers</Text>
          </View>
          <View style={profileStyle.statBorder} />
          <View>
            <Text style={profileStyle.statAmount}>{USER_PROFILE.posts}</Text>
            <Text style={profileStyle.statLabel}>Posts</Text>
          </View>
        </View>
        <View style={globalStyle.flexGrow}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
