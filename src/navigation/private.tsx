import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  DetailsScreen,
  ProfileScreen,
  SearchScreen,
} from '../screens';

export type PrivateStackParamList = {
  Home: undefined;
  Details: {movieId: number};
  Search: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<PrivateStackParamList>();

export default function PrivateStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Search" component={ProfileScreen} />
      <Stack.Screen name="Profile" component={SearchScreen} />
    </Stack.Navigator>
  );
}
