import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import {PrivateStackParamList} from '../../navigation/private';

type ProfileScreenRouteProp = NativeStackNavigationProp<
  PrivateStackParamList,
  'Profile'
>;

export default function ProfileScreen() {
  return <Text>Profile</Text>;
}
