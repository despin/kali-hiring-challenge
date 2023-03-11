import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {PrivateStackParamList} from '../../navigation/private';
import auth from '@react-native-firebase/auth';
import useFirebaseAuthProvider from '../../hooks/useFirebaseAuthProvider';
import DataItem from '../../components/atoms/DataItem';
import {ROLES} from '../../constants';
import Button from '../../components/atoms/Button';

type ProfileScreenRouteProp = NativeStackNavigationProp<
  PrivateStackParamList,
  'Profile'
>;

export default function ProfileScreen() {
  const {user} = useFirebaseAuthProvider();

  const handleLogOff = () => {
    auth().signOut();
  };

  return (
    <View>
      <DataItem label={'Name'} value={user?.displayName} />
      <DataItem label={'Email'} value={user?.email} />
      <DataItem label={'Rol'} value={ROLES[user?.photoURL]} />
      <Button secondary label="Sign out" onPress={handleLogOff} />
    </View>
  );
}
