import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import {PublicStackParamList} from '../../navigation/public';

type LoginScreenRouteProp = NativeStackNavigationProp<
  PublicStackParamList,
  'Login'
>;

export default function LoginScreen() {
  return <Text>Login</Text>;
}
