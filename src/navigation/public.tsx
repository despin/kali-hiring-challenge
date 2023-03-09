import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, WelcomeScreen, SignUpScreen} from '../screens';

export type PublicStackParamList = {
  Login: undefined;
  Welcome: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<PublicStackParamList>();

export default function PublicStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
