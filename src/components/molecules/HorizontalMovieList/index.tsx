import React, {Fragment} from 'react';
import styled from 'styled-components/native';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {FlatList} from 'react-native';
import {LazyLoadImage} from 'react-native-lazy-load-image';
import SectionContainer from '../atoms/SectionContainer';
import SectionTitle from '../atoms/SectionTitle';

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

interface HorizontalMovieListProps {
  isLoading: boolean;
  movies: any[];
  title: string;
  showRating?: boolean;
}

export default function HorizontalMovieList({
  isLoading,
  movies,
  title,
  showRating,
}: HorizontalMovieListProps) {
  const keyExtractor = item => String(item.id);

  const renderItem = ({item, index}) => {
    return (
      <MovieContainer first={index === 0}>
        <LazyLoadImage
          source={{uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`}}
          style={{
            width: 166,
            height: 250,
            aspectRatio: 2 / 3,
            borderRadius: 10,
          }}
        />
        <MovieTitle numberOfLines={1}>{item?.title}</MovieTitle>
        <MovieOriginalTitle numberOfLines={1}>
          {item?.original_title}
        </MovieOriginalTitle>
        <MovieYear>{item?.release_date?.slice(0, 4)}</MovieYear>
        {showRating && <MovieYear>{item?.vote_average}/10 ⭐️</MovieYear>}
      </MovieContainer>
    );
  };

  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {isLoading && (
        <ContentLoader
          speed={2}
          width={500}
          height={showRating ? 326 : 308}
          viewBox={`0 0 500 ${showRating ? 326 : 308}`}
          backgroundColor={'#333'}
          foregroundColor={'#999'}>
          {[0, 182, 364, 546].map(x => (
            <Fragment key={x}>
              <Rect
                key={`${x}_1`}
                x={x + 16}
                y="0"
                rx="16"
                ry="16"
                width="166"
                height="250"
              />
              <Rect
                key={`${x}_2`}
                x={x + 16}
                y="254"
                rx="0"
                ry="0"
                width="166"
                height="18"
              />
              <Rect
                key={`${x}_3`}
                x={x + 16}
                y="276"
                rx="0"
                ry="0"
                width="166"
                height="14"
              />
              <Rect
                key={`${x}_4`}
                x={x + 16}
                y="294"
                rx="0"
                ry="0"
                width="40"
                height="14"
              />
              {showRating && (
                <Rect x={x + 16} y="312" rx="0" ry="0" width="80" height="14" />
              )}
            </Fragment>
          ))}
        </ContentLoader>
      )}
      {!isLoading && !!movies && (
        <FlatList
          data={movies}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          scrollEnabled
          horizontal
        />
      )}
    </SectionContainer>
  );
}
