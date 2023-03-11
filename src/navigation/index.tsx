import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import PrivateStack from './private';
import PublicStack from './public';
import useFirebaseAuthProvider from '../hooks/useFirebaseAuthProvider';

export default function Navigation() {
  const {initializing, user} = useFirebaseAuthProvider();
  const isLogged = !!user;

  return (
    <NavigationContainer>
      {isLogged ? <PrivateStack /> : <PublicStack />}
    </NavigationContainer>
  );
}
