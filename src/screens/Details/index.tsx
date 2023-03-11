import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import ScreenContainer from '../../components/atoms/ScreenContainer';
import {PrivateStackParamList} from '../../navigation/private';
import {LazyLoadImage} from 'react-native-lazy-load-image';
import GenreBadgeRow from '../../components/atoms/GenreBadgeRow';
import OverviewCollapsable from '../../components/atoms/OverviewCollapsable';
import HorizontalMovieList from '../../components/molecules/HorizontalMovieList';
import useCustomSWR from '../../hooks/useCustomSWR';
import requestMovieDb from '../../api';
import CastList from '../../components/molecules/CastList';

const Scrollable = styled.ScrollView``;

const ImageBackground = styled.ImageBackground`
  justify-content: center;
  height: 250px;
`;

const Gradient = styled(LinearGradient)`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: column-reverse;
  border-radius: 16px;
  padding-bottom: 20px;
`;

const PosterImage = styled(LazyLoadImage)`
  height: 150px;
  aspect-ratio: 2 / 3;
  border-radius: 10px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
`;

const TitleInfoContainer = styled.View`
  margin-left: 8px;
  flex-direction: column;
  justify-content: flex-end;
`;

const ItemTitle = styled.Text`
  font-size: 22px;
  text-align: left;
  color: white;
  font-weight: bold;
`;
const ItemOriginalTitle = styled.Text`
  font-size: 14px;
  color: grey;
`;
const ItemReleaseDate = styled.Text`
  font-size: 16px;
  color: grey;
`;
const RatingGenresRow = styled.View`
  border-width: 1px;
  align-items: baseline;
  flex-direction: row;
  margin-bottom: 16px;
  margin-left: 16px;
`;
const RatingText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

type Props = NativeStackScreenProps<PrivateStackParamList, 'Details'>;

type Navigation = NativeStackNavigationProp<PrivateStackParamList, 'Details'>;

export default function DetailsScreen({route}: Props) {
  const navigation = useNavigation<Navigation>();
  const movie = route?.params?.movie;

  const {data: releatedData, isLoading: relatedIsLoading} = useCustomSWR(
    `/movie/${movie?.id}/recommendations`,
    requestMovieDb,
  );

  console.log(movie);

  useFocusEffect(() => {
    navigation.setOptions({
      title: movie.title,
    });
  });

  return (
    <ScreenContainer>
      <Scrollable>
        <ImageBackground
          imageStyle={{borderRadius: 16}}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`,
          }}>
          <Gradient colors={['#0000', '#000']}>
            <TitleContainer>
              <PosterImage
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
                }}
              />
              <TitleInfoContainer>
                <ItemTitle>
                  {movie?.title}{' '}
                  <ItemReleaseDate>
                    {movie?.release_date.slice(0, 4)}
                  </ItemReleaseDate>
                </ItemTitle>
                <ItemOriginalTitle>{movie?.original_title}</ItemOriginalTitle>
              </TitleInfoContainer>
            </TitleContainer>
          </Gradient>
        </ImageBackground>
        <RatingGenresRow>
          <RatingText>
            {movie?.vote_average}/10 ⭐️ | {movie?.vote_count} votes{' '}
          </RatingText>
          <GenreBadgeRow genreIds={movie?.genre_ids} />
        </RatingGenresRow>
        <OverviewCollapsable text={movie?.overview} />
        <CastList movieId={movie?.id} />
        <HorizontalMovieList
          title="If your like it, here is more..."
          isLoading={relatedIsLoading}
          movies={releatedData?.results}
        />
      </Scrollable>
    </ScreenContainer>
  );
}
