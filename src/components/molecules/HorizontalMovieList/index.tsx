import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import SectionContainer from '../../atoms/SectionContainer';
import SectionTitle from '../../atoms/SectionTitle';
import HorizontalMovieListItem from '../HorizontalMovieListItem';
import HorizontalMovieSkeleton from '../../atoms/HorizontalMovieSkeleton';

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
  const navigation = useNavigation();

  return (
    <SectionContainer>
      {(isLoading || movies?.length > 0) && (
        <SectionTitle>{title}</SectionTitle>
      )}
      {isLoading && <HorizontalMovieSkeleton showRating={showRating} />}
      {!isLoading && !!movies && (
        <FlatList
          data={movies}
          renderItem={({item, index}) => (
            <HorizontalMovieListItem
              item={item}
              index={index}
              onPress={() => navigation.navigate('Details', {movie: item})}
              showRating={showRating}
            />
          )}
          keyExtractor={item => String(item.id)}
          scrollEnabled
          horizontal
        />
      )}
    </SectionContainer>
  );
}
