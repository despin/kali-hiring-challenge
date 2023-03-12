import React, {useState} from 'react';
import Button from '../../components/atoms/Button';
import auth from '@react-native-firebase/auth';
import ScreenContainer from '../../components/atoms/ScreenContainer';
import Input from '../../components/atoms/Input';

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
    <ScreenContainer>
      <Input
        placeholderTextColor={'#FFF'}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize={'none'}
        autoComplete={'email'}
      />
      <Input
        placeholderTextColor={'#FFF'}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
        autoCapitalize={'none'}
        autoComplete={'password'}
      />

      <Button label={'Login'} onPress={handleLogin} />
    </ScreenContainer>
  );
}
