import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import Button from '../../components/atoms/Button';
import auth from '@react-native-firebase/auth';

import {PublicStackParamList} from '../../navigation/public';

const CustomInput = styled.TextInput`
  padding: 8px;
  margin: 8px;
  border-radius: 8px;
  border-color: blue;
  border-style: solid;
  border-width: 1px;
`;

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(c => {
        console.log('Logueado');
        console.log('Crendentials', c);
      })
      .catch(e => {
        console.error(e);
      });
  };

  return (
    <View>
      <Text>Login</Text>
      <CustomInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize={false}
        autoComplete={false}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        autoCapitalize={false}
        autoComplete={false}
      />

      <Button label={'Login'} onPress={handleLogin} />
    </View>
  );
}
