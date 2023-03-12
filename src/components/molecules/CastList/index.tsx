import React, {useState} from 'react';
import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import useCustomSWR from '../../../hooks/useCustomSWR';
import {LazyLoadImage} from 'react-native-lazy-load-image';
import requestMovieDb from '../../../api';
import LinearGradient from 'react-native-linear-gradient';
import CastListSkeleton from '../../atoms/CastListSkeleton';

const ListContainer = styled.View`
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
`;

const CollapsedShadow = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Row = styled.View`
  flex-direction: row;
  flex: 1;
  margin-bottom: 8px;
  padding-right: 8px;
`;
const Column = styled.View`
  flex-direction: column;
  margin-left: 8px;
`;
const CastTitle = styled.Text`
  color: white;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px;
`;
const CharacterName = styled.Text`
  color: grey;
`;
const CastName = styled.Text`
  color: white;
`;

const ProfilePic = styled(LazyLoadImage)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const CollapseTouchable = styled.TouchableOpacity``;

export default function CastList({movieId}) {
  const [collapsed, setCollapsed] = useState(true);

  const {data, isLoading} = useCustomSWR(
    `/movie/${movieId}/credits`,
    requestMovieDb,
  );

  return (
    <ListContainer>
      <CastTitle>Cast</CastTitle>
      {isLoading && <CastListSkeleton />}
      {!isLoading && data && (
        <CollapseTouchable onPress={() => setCollapsed(v => !v)}>
          <FlatList
            disableVirtualization
            data={collapsed ? data.cast.slice(0, 6) : data.cast}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            numColumns={2}
            renderItem={({item}) => (
              <Row>
                <ProfilePic
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`,
                  }}
                />
                <Column>
                  <CastName>{item.original_name}</CastName>

                  <CharacterName>{item.original_name}</CharacterName>
                </Column>
              </Row>
            )}
          />
          {collapsed && (
            <CollapsedShadow
              colors={['transparent', '#000']}
              start={{x: 0, y: 0.5}}
              end={{x: 0, y: 1}}
            />
          )}
        </CollapseTouchable>
      )}
    </ListContainer>
  );
}
