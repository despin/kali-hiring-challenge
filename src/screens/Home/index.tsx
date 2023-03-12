import React from 'react';
import styled from 'styled-components/native';

import NowPlayingSection from './NowPlayingSection';
import NextMoviesSection from './NextMoviesSection';
import PopularSection from './PopularSection';
import TopRatedSection from './TopRatedSection';
import ScreenContainer from '../../components/atoms/ScreenContainer';
import useHasRole from '../../hooks';
import {ROLES} from '../../constants';

const ScrollableScreen = styled.ScrollView``;

export default function HomeScreen() {
  const isPreRelease = useHasRole(ROLES.prerelease);

  return (
    <ScreenContainer>
      <ScrollableScreen>
        <NextMoviesSection />
        {isPreRelease && <NowPlayingSection />}
        <PopularSection />
        <TopRatedSection />
      </ScrollableScreen>
    </ScreenContainer>
  );
}
