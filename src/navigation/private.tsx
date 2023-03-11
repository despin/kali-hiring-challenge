import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {
  HomeScreen,
  DetailsScreen,
  ProfileScreen,
  SearchScreen,
} from '../screens';
import {StatusBar} from 'react-native';
import IconButton from '../components/atoms/IconButton';

export type PrivateStackParamList = {
  Home: undefined;
  Details: {movie: any};
  Search: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<PrivateStackParamList>();

export type PrivateStackRouteProp<T extends keyof PrivateStackParamList> =
  NativeStackNavigationProp<PrivateStackParamList, T>;

export default function PrivateStack() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <>
                <IconButton
                  icon="🔎"
                  onPress={() => navigation.navigate('Search')}
                />
                <IconButton
                  icon="👤"
                  spacingLeft
                  onPress={() => navigation.navigate('Profile')}
                />
              </>
            ),
          })}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerSearchBarOptions: {
              placeholder: 'Search here...',
            },
          }}
        />
      </Stack.Navigator>
    </>
  );
}
