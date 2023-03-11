import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {Fragment, useState} from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {FlatList, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import requestMovieDb from '../../api';
import MovieItem from '../../components/atoms/MovieItem';
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

  const [list, setList] = useState<any[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const [showPreviousQueries, setShowPreviousQueries] = useState(true);

  const dispatch = useAppDispatch();

  const handleSearchQuery = async (searchQuery: string) => {
    setIsLoading(true);
    setShowPreviousQueries(false);
    setTimeout(async () => {
      const data = await requestMovieDb(
        `/search/movie?language=es-AR&query=${searchQuery}}&page=1&region=AR`,
      );
      setList(data.results);
      dispatch(pushNewQuery(searchQuery));
      setIsLoading(false);
    }, 4000);
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

  console.log({
    contentLoader: isLoading,
    history: showPreviousQueries && !isLoading,
    list: !showPreviousQueries && !isLoading && list?.length > 0,
    notFound: !showPreviousQueries && !isLoading && list?.length === 0,
  });

  return (
    <ScreenContainer>
      {isLoading && (
        <ContentLoader
          speed={2}
          width={476}
          height={1000}
          viewBox="0 0 476 1000"
          backgroundColor="#0e0b0b"
          foregroundColor="#a69b9b">
          {[0, 170, 340, 510, 687, 857].map(y => (
            <Fragment key={y}>
              <Rect x="8" y={7 + y} rx="16" ry="16" width="102" height="154" />
              <Rect x="120" y={16 + y} rx="0" ry="0" width="215" height="18" />
              <Rect x="344" y={16 + y} rx="0" ry="0" width="50" height="18" />
              <Rect x="120" y={39 + y} rx="0" ry="0" width="161" height="14" />
              <Rect x="289" y={39 + y} rx="0" ry="0" width="79" height="14" />
              <Rect x="120" y={60 + y} rx="0" ry="0" width="305" height="55" />
              <Rect x="119" y={126 + y} rx="0" ry="0" width="52" height="25" />
              <Rect x="176" y={126 + y} rx="0" ry="0" width="66" height="26" />
              <Rect x="247" y={126 + y} rx="0" ry="0" width="105" height="26" />
            </Fragment>
          ))}
        </ContentLoader>
      )}
      {showPreviousQueries && !isLoading && (
        <PreviousQueriesList onPressQuery={handleSearchQuery} />
      )}
      {!showPreviousQueries && !isLoading && list?.length > 0 && (
        <FlatList
          data={list}
          renderItem={({item}) => <MovieItem item={item} />}
          keyExtractor={item => item.id}
        />
      )}
      {!showPreviousQueries && !isLoading && list?.length === 0 && (
        <NotFoundText>Ups! There is no movies for that query </NotFoundText>
      )}
    </ScreenContainer>
  );
}
