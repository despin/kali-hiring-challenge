import React from 'react';
import useFirebaseAuthProvider from '../../hooks/useFirebaseAuthProvider';
import DataItem from '../../components/atoms/DataItem';
import {ROLES} from '../../constants';
import Button from '../../components/atoms/Button';
import ScreenContainer from '../../components/atoms/ScreenContainer';
import useHasRole from '../../hooks';
import auth from '@react-native-firebase/auth';

export default function ProfileScreen() {
  const {user} = useFirebaseAuthProvider();

  const isPreRelease = useHasRole(ROLES.prerelease);

  const handleLogOff = () => {
    auth().signOut();
  };

  return (
    <ScreenContainer>
      <DataItem label={'Name'} value={user?.displayName} />
      <DataItem label={'Email'} value={user?.email} />
      {isPreRelease && (
        <DataItem label={'Rol'} value={ROLES[user?.photoURL ?? 'release']} />
      )}
      <Button secondary label="Sign out" onPress={handleLogOff} />
    </ScreenContainer>
  );
}
