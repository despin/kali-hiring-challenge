import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import requestMovieDb from '../../api';
import ScreenContainer from '../../components/atoms/ScreenContainer';
import MovieList from '../../components/molecules/MovieList';
import PreviousQueriesList from '../../components/molecules/PreviousQueriesList';
import {PrivateStackRouteProp} from '../../navigation/private';
import {useAppDispatch, useTypedSelector} from '../../store';
import {clearQueries, pushNewQuery} from '../../store/searchHistorySlice';

type SearchScreenRouteProp = PrivateStackRouteProp<'Search'>;

const NotFoundText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export default function SearchScreen() {
  const navigation = useNavigation<SearchScreenRouteProp>();

  const [list, setList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [showPreviousQueries, setShowPreviousQueries] = useState(true);

  const dispatch = useAppDispatch();

  const handleSearchQuery = async (searchQuery: string) => {
    setIsLoading(true);
    setShowPreviousQueries(false);
    const data = await requestMovieDb(
      `/search/movie?language=es-AR&query=${searchQuery}}&page=1&region=AR`,
    );
    console.log(data);
    setList(data.results);
    dispatch(pushNewQuery(searchQuery));

    setIsLoading(false);
  };

  useFocusEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Type here your search...',
        textColor: 'white',
        onSearchButtonPress: e => handleSearchQuery(e.nativeEvent.text),
        onCancelButtonPress: () => setShowPreviousQueries(true),
        shouldShowHintSearchIcon: true,
        hideWhenScrolling: false,
      },
    });
  });

  return (
    <ScreenContainer>
      {isLoading && (
        <ContentLoader
          speed={2}
          width={476}
          height={300}
          viewBox="0 0 476 300"
          backgroundColor="#0e0b0b"
          foregroundColor="#a69b9b">
          <Rect x="28" y="7" rx="16" ry="16" width="102" height="154" />
          <Rect x="140" y="16" rx="0" ry="0" width="215" height="18" />
          <Rect x="364" y="16" rx="0" ry="0" width="50" height="18" />
          <Rect x="140" y="39" rx="0" ry="0" width="161" height="14" />
          <Rect x="309" y="39" rx="0" ry="0" width="79" height="14" />
          <Rect x="140" y="60" rx="0" ry="0" width="305" height="55" />
          <Rect x="139" y="126" rx="0" ry="0" width="52" height="25" />
          <Rect x="196" y="126" rx="0" ry="0" width="66" height="26" />
          <Rect x="267" y="126" rx="0" ry="0" width="105" height="26" />
        </ContentLoader>
      )}
      {showPreviousQueries && !isLoading && (
        <PreviousQueriesList onPressQuery={handleSearchQuery} />
      )}
      {!showPreviousQueries && !isLoading && list.length > 0 && (
        <MovieList movies={list} />
      )}
      {!showPreviousQueries && isLoading && list.length === 0 && (
        <NotFoundText>Ups! There is no movies for that query </NotFoundText>
      )}
    </ScreenContainer>
  );
}
