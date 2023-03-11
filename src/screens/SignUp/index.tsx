import {Picker} from '@react-native-picker/picker';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import Button from '../../components/atoms/Button';
import {PublicStackParamList} from '../../navigation/public';
import auth from '@react-native-firebase/auth';
import CustomInput from '../../components/atoms/Input';
import {ROLES} from '../../constants';

const ErrorText = styled.Text`
  color: red;
`;

export default function SignUpScreen() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (error !== '' && error !== undefined) {
      setError('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password, confirmPassword]);

  const handleLogin = () => {
    if (displayName === '') {
      setError('The display name cannot be empty');
      return;
    }

    if (password.length < 6) {
      setError('The password must be more long than 6 characters');
      return;
    }

    if (password.length < 6) {
      setError('The password must be more long than 6 characters');
    }

    if (password !== confirmPassword) {
      setError('The password and confirmation field are not the same');
    }

    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        auth()
          .currentUser?.updateProfile({displayName, photoURL: role})
          .then(() => {
            console.log('Piola 👍');
          })
          .catch(e => {
            console.error(e);
          });
      })
      .catch(e => {
        if (e.code === 'auth/email-already-in-use') {
          setError('That email address is already in use!');
        }

        if (e.code === 'auth/invalid-email') {
          setError('That email address is invalid!');
        }

        console.error(e, JSON.stringify(e));
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <View>
      <Text>Signup</Text>
      <CustomInput
        placeholder="Display Name"
        value={displayName}
        onChangeText={setDisplayName}
        keyboardType="ascii-capable"
      />
      <CustomInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCorrect={false}
        autoCapitalize={'none'}
      />
      <CustomInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        keyboardType="ascii-capable"
        secureTextEntry
      />
      <CustomInput
        placeholder="Confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        keyboardType="ascii-capable"
        secureTextEntry
      />
      <ErrorText>{error || '✅'}</ErrorText>
      <Picker selectedValue={role} onValueChange={item => setRole(item)}>
        {Object.entries(ROLES).map(([roleName, displayRoleName]) => (
          <Picker.Item label={displayRoleName} value={roleName} />
        ))}
      </Picker>

      <Button label={'Signup'} onPress={handleLogin} />
    </View>
  );
}
