import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import {PrivateStackParamList} from '../../navigation/private';

type HomeScreenRouteProp = NativeStackNavigationProp<
  PrivateStackParamList,
  'Home'
>;

export default function HomeScreen() {
  return <Text>Home</Text>;
}
