import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/atoms/Button';
import {PrivateStackRouteProp} from '../../navigation/private';
import {ActivityIndicator, ScrollView, Text} from 'react-native';
import styled from 'styled-components/native';

import NowPlayingSection from './NowPlayingSection';
import NextMoviesSection from './NextMoviesSection';
import PopularSection from './PopularSection';
import TopRatedSection from './TopRatedSection';
import ScreenContainer from '../../components/atoms/ScreenContainer';

type HomeScreenRouteProp = PrivateStackRouteProp<'Home'>;

const ScrollableScreen = styled.ScrollView`
  /* padding: 0 0 0 8px; */
`;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenRouteProp>();

  return (
    <ScreenContainer>
      <ScrollableScreen>
        <Button
          label="Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        <NextMoviesSection />
        <NowPlayingSection />
        <PopularSection />
        <TopRatedSection />
      </ScrollableScreen>
    </ScreenContainer>
  );
}
