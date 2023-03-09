import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import PrivateStack from './private';
import PublicStack from './public';

export default function Navigation() {
  const isLogged = false;

  return (
    <NavigationContainer>
      {isLogged ? <PrivateStack /> : <PublicStack />}
    </NavigationContainer>
  );
}
