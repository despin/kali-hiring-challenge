import React from 'react';
import styled from 'styled-components/native';
import {useAppDispatch, useTypedSelector} from '../../../store';
import {clearQueries} from '../../../store/searchHistorySlice';

const ListContainer = styled.FlatList`
  padding: 8px;
`;
const ListHeader = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

const ListTitle = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 22px;
`;
const ListClear = styled.TouchableOpacity``;
const ListClearText = styled.Text`
  color: grey;
  font-size: 18px;
`;

const ListItem = styled.TouchableOpacity``;

const ListItemText = styled.Text`
  color: white;
  font-size: 18px;
  margin-top: 16px;
`;

interface PreviousQueriesListProps {
  onPressQuery: (query: string) => void;
}

export default function PreviousQueriesList({
  onPressQuery,
}: PreviousQueriesListProps) {
  const searches = useTypedSelector(state => state.searchHistory.searches);

  console.log('searches', searches);
  const dispatch = useAppDispatch();

  return (
    <ListContainer
      data={searches}
      renderItem={({item}) => (
        <ListItem onPress={() => onPressQuery(item)}>
          <ListItemText>{String(item)}</ListItemText>
        </ListItem>
      )}
      ListHeaderComponent={
        searches.length > 0 ? (
          <ListHeader>
            <ListTitle>Recent queries 🕑 </ListTitle>
            <ListClear onPress={() => dispatch(clearQueries())}>
              <ListClearText>Clear</ListClearText>
            </ListClear>
          </ListHeader>
        ) : undefined
      }
    />
  );
}
