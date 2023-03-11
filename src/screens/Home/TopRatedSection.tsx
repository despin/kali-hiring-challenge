import React from 'react';
import useSWR from 'swr';
import requestMovieDb from '../../api';
import HorizontalMovieList from '../../components/HorizontalMovieList';
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
