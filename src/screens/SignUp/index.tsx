import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import {PublicStackParamList} from '../../navigation/public';

type SignUpScreenRouteProp = NativeStackNavigationProp<
  PublicStackParamList,
  'SignUp'
>;

export default function SignUpScreen() {
  return <Text>SignUp</Text>;
}
