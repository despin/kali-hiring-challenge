import React from 'react';
import requestMovieDb from '../../api';
import HorizontalMovieList from '../../components/molecules/HorizontalMovieList';
import useCustomSWR from '../../hooks/useCustomSWR';

export default function TopRatedSection() {
  const {data, isLoading} = useCustomSWR(
    '/movie/top_rated?language=es-AR&page=1&region=AR',
    requestMovieDb,
  );

  return (
    <HorizontalMovieList
      title={'Top Rated ⭐️⭐️⭐️⭐️⭐️'}
      isLoading={isLoading}
      movies={data?.results}
      showRating
    />
  );
}
