import React from 'react';
import styled from 'styled-components/native';
import {LazyLoadImage} from 'react-native-lazy-load-image';

interface MovieContainerProps {
  first: boolean;
}
const MovieContainer = styled.TouchableOpacity<MovieContainerProps>`
  flex-direction: column;
  width: 166px;
  margin-right: 16px;
  margin-left: ${props => (props.first ? '16px' : '0px')};
`;
const MovieTitle = styled.Text`
  font-size: 16px;
  margin-top: 4px;
  color: white;
`;
const MovieOriginalTitle = styled.Text`
  font-size: 14px;
  color: grey;
`;
const MovieYear = styled.Text`
  font-size: 14px;
  color: grey;
`;
const MoviePoster = styled(LazyLoadImage)`
  width: 166px;
  height: 250px;
  aspect-ratio: 2 / 3;
  border-radius: 10px;
`;

export default function HorizontalMovieListItem({
  item,
  index,
  onPress,
  showRating,
}) {
  return (
    <MovieContainer first={index === 0} onPress={onPress}>
      <MoviePoster
        source={{uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`}}
      />
      <MovieTitle numberOfLines={1} testID={'test:/movieTitle'}>
        {item?.title}
      </MovieTitle>
      <MovieOriginalTitle numberOfLines={1}>
        {item?.original_title}
      </MovieOriginalTitle>
      <MovieYear>{item?.release_date?.slice(0, 4)}</MovieYear>
      {showRating && <MovieYear>{item?.vote_average}/10 ⭐️</MovieYear>}
    </MovieContainer>
  );
}
