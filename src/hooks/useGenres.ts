import requestMovieDb from '../api';
import useSWR from 'swr';

export default function useGenres() {
  const {data} = useSWR('/genre/movie/list?language=es-AR', requestMovieDb);

  return data?.genres as {id: string; name: string}[] | undefined;
}
