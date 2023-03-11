import React from 'react';
import styled from 'styled-components/native';
import {LazyLoadImage} from 'react-native-lazy-load-image';
import {useNavigation} from '@react-navigation/native';
import GenreBadgeRow from '../GenreBadgeRow';

const CardContainer = styled.TouchableOpacity`
  background-color: #fff4;
  margin: 8px;
  border-radius: 16px;
  flex-direction: row;
  height: 150px;
`;

const CardInfoContainer = styled.View`
  flex-direction: column;
  flex: 1;
  padding: 8px;
`;

const PosterImage = styled(LazyLoadImage)`
  width: 100;
  height: 150;
  aspect-ratio: 2 / 3;
  border-radius: 10;
`;

const MovieTitle = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
  flex-shrink: 1;
`;
const MovieOriginalTitle = styled.Text`
  font-size: 14px;
  color: grey;
`;
const MovieRating = styled.Text`
  font-size: 14px;
  color: grey;
  margin-left: 8px;
`;
const MovieYear = styled.Text`
  font-size: 16px;
  margin-left: 8px;
  color: grey;
  font-weight: bold;
`;
const MovieOverview = styled.Text`
  font-size: 16px;
  color: grey;
`;
const InfoRow = styled.View`
  flex-direction: row;
  align-items: baseline;
  align-self: stretch;
  flex-grow: 1;
  flex-wrap: nowrap;
  flex-flow: nowrap;
`;
type MovieItemProps = {
  item: {genre_ids: number[]};
};

export default function MovieItem({item}: MovieItemProps) {
  const navigation = useNavigation();

  return (
    <CardContainer
      onPress={() => navigation.navigate('Details', {movie: item})}>
      <PosterImage
        source={{uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`}}
      />
      <CardInfoContainer>
        <InfoRow>
          <MovieTitle numberOfLines={1}>{item?.title}</MovieTitle>
          <MovieYear>({item?.release_date?.slice(0, 4)})</MovieYear>
        </InfoRow>
        <InfoRow>
          <MovieOriginalTitle numberOfLines={1}>
            {item?.original_title}
          </MovieOriginalTitle>
          <MovieRating>{item?.vote_average}/10 ⭐️</MovieRating>
        </InfoRow>
        <InfoRow>
          <MovieOverview numberOfLines={3}>{item?.overview}</MovieOverview>
        </InfoRow>
        <InfoRow>
          <GenreBadgeRow genreIds={item?.genre_ids} />
        </InfoRow>
      </CardInfoContainer>
    </CardContainer>
  );
}
