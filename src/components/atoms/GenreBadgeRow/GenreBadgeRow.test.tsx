import React from 'react';
import GenreBadgeRow from './index';
import {render} from '@testing-library/react-native';
import {jest, expect, test} from '@jest/globals';

jest.mock('../../../hooks/useGenres', () => {
  return () => [
    {id: 1, name: 'Comedy'},
    {id: 2, name: 'Adventure'},
    {id: 3, name: 'Drama'},
  ];
});

test('can show logged in message', () => {
  const {getByText} = render(<GenreBadgeRow genreIds={[1, 3]} />);
  expect(getByText('Comedy')).toBeTruthy();
});
