import React, {Fragment} from 'react';
import {ActivityIndicator, Text} from 'react-native';
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
  const {genres, isLoading} = useGenres();

  const foundGenres =
    genreIds
      ?.map(id => genres?.find?.(gId => gId.id === id)?.name)
      ?.filter(name => !!name) ?? [];

  console.log(foundGenres);

  return (
    <Fragment>
      {isLoading && !genres && <ActivityIndicator />}
      {!isLoading &&
        !!genres &&
        foundGenres?.map(name => <GenreText>{name ?? 'N/A'}</GenreText>)}
    </Fragment>
  );
}
