import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import images from '../../assets';
import Button from '../../components/atoms/Button';
import {PublicStackRouteProp} from '../../navigation/public';

const Backdrop = styled.ImageBackground`
  height: 400px;
`;

const Gradient = styled(LinearGradient)`
  flex: 1;
  flex-direction: column-reverse;
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const Body = styled.Text`
  font-size: 16px;
  color: white;
  margin: 16px;
`;

const Container = styled.View`
  background-color: black;
  flex: 1;
`;

const styles = StyleSheet.create({
  backdrop: {
    height: 400,
  },
});

export default function WelcomeScreen() {
  const navigation = useNavigation<PublicStackRouteProp<'Welcome'>>();

  useFocusEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <Container>
      <StatusBar barStyle={'light-content'} />
      <Backdrop source={images.welcomeBackground} imageStyle={styles.backdrop}>
        <Gradient colors={['#0000', '#000']}>
          <SafeAreaView>
            <Title>🍿 Welcome 🥤</Title>
          </SafeAreaView>
        </Gradient>
      </Backdrop>
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
