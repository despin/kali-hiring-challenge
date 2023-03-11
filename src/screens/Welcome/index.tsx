import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import Button from '../../components/atoms/Button';
import PublicStack, {PublicStackRouteProp} from '../../navigation/public';

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const Body = styled.Text`
  font-size: 16px;
  // font-weight: bold;
`;

const Container = styled.View``;

export default function WelcomeScreen() {
  const navigation = useNavigation<PublicStackRouteProp<'Welcome'>>();

  return (
    <Container>
      <Title>Welcome</Title>
      <Body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis
        tristique tellus. Aenean in commodo enim. Suspendisse euismod eros
        pharetra neque congue, et porta turpis luctus.
      </Body>
      <Button label={'Login'} onPress={() => navigation.navigate('Login')} />
      <Button
        secondary
        label={'Signup'}
        onPress={() => navigation.navigate('SignUp')}
      />
    </Container>
  );
}
