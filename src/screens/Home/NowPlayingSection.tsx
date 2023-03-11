import React from 'react';
import useSWR from 'swr';
import requestMovieDb from '../../api';
import HorizontalMovieList from '../../components/molecules/HorizontalMovieList';

import useCustomSWR from '../../hooks/useCustomSWR';

export default function NowPlayingSection() {
  const {data, isLoading} = useCustomSWR(
    '/movie/now_playing?language=es-AR&page=1&region=AR',
    requestMovieDb,
  );

  return (
    <HorizontalMovieList
      title={'Now Playing 📽'}
      isLoading={isLoading}
      movies={data?.results}
    />
  );
}
