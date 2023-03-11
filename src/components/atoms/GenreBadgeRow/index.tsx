import React, {Fragment} from 'react';
import styled from 'styled-components/native';
import useGenres from '../../../hooks/useGenres';

const GenreText = styled.Text`
  color: white;
  padding: 2px;
  border-color: white;
  border-width: 1px;
  border-radius: 2px;
  margin-right: 6px;
  margin-top: 8px;
`;

interface GenreBadgeRowProps {
  genreIds: number[];
}
export default function GenreBadgeRow({genreIds}: GenreBadgeRowProps) {
  const genres = useGenres();

  console.log('genres', genres);

  console.log(genreIds);

  return (
    <Fragment>
      {genreIds
        ?.map(id => genres?.find(gId => gId.id === id)?.name)
        ?.sort()
        ?.map(name => (
          <GenreText>{name}</GenreText>
        ))}
    </Fragment>
  );
}
