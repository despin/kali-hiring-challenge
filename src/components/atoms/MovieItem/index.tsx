import React from 'react';
import styled from 'styled-components/native';
import {LazyLoadImage} from 'react-native-lazy-load-image';
import useGenres from '../../../hooks/useGenres';
import {Text} from 'react-native';

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

const CardText = styled.Text`
  color: white;
`;

const MovieTitle = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
  flex-shrink: 1;
  /* background-color: #faf; */
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
  /* background-color: #ffa; */
`;
const MovieOverview = styled.Text`
  font-size: 16px;
  color: grey;
  /* background-color: #ffa; */
`;
const InfoRow = styled.View`
  flex-direction: row;
  align-items: baseline;
  align-self: stretch;
  flex-grow: 1;
  flex-wrap: nowrap;
  flex-flow: nowrap;
`;
const GenreText = styled.Text`
  color: white;
  padding: 2px;
  border-color: white;
  border-width: 1px;
  border-radius: 2px;
  margin-right: 6px;
  margin-top: 8px;
`;

type MovieItemProps = {
  item: {genre_ids: number[]};
};

export default function MovieItem({item}: MovieItemProps) {
  const genres = useGenres();

  return (
    <CardContainer>
      <LazyLoadImage
        source={{uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`}}
        style={{
          width: 100,
          height: 150,
          aspectRatio: 2 / 3,
          borderRadius: 10,
        }}
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
          {item?.genre_ids
            ?.map(id => genres?.find(gId => gId.id == id)?.name)
            ?.sort()
            ?.map(name => (
              <GenreText>{name}</GenreText>
            ))}
        </InfoRow>
      </CardInfoContainer>
    </CardContainer>
  );
}
