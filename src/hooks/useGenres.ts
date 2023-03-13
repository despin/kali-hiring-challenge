import requestMovieDb from '../api';
import useSWR from 'swr';

export default function useGenres() {
  const {isLoading, data} = useSWR(
    '/genre/movie/list?language=es-AR',
    requestMovieDb,
  );

  const returnData: {
    genres: {id: number; name: string}[] | undefined;
    isLoading: boolean;
  } = {genres: data?.genres, isLoading};

  return returnData;
}
