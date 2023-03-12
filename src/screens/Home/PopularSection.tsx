import React from 'react';
import requestMovieDb from '../../api';
import HorizontalMovieList from '../../components/molecules/HorizontalMovieList';
import useCustomSWR from '../../hooks/useCustomSWR';

export default function PopularSection() {
  const {data, isLoading} = useCustomSWR(
    '/movie/popular?language=es-AR&page=1&region=AR',
    requestMovieDb,
  );

  return (
    <HorizontalMovieList
      title={'Popular 🔥'}
      isLoading={isLoading}
      movies={data?.results}
    />
  );
}
