import {useNavigation} from '@react-navigation/native';
import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';
import {Dimensions, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import styled from 'styled-components/native';
import requestMovieDb from '../../api';
import SectionContainer from '../../components/atoms/SectionContainer';
import SectionTitle from '../../components/atoms/SectionTitle';
import useCustomSWR from '../../hooks/useCustomSWR';

const CarouselButton = styled.TouchableOpacity`
  flex: 1;
`;

const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  margin: 20px;
`;

const Gradient = styled(LinearGradient)`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  flex-direction: column-reverse;
  border-radius: 16px;
  padding-left: 30px;
  padding-bottom: 20px;
`;

const ItemTitle = styled.Text`
  font-size: 18px;
  text-align: left;
  color: white;
  font-weight: bold;
`;
const ItemOriginalTitle = styled.Text`
  font-size: 14px;
  color: grey;
`;
const ItemReleaseDate = styled.Text`
  font-size: 16px;
  color: grey;
`;

export default function NextMoviesSection() {
  const {data, isLoading} = useCustomSWR(
    '/movie/upcoming?language=es-AR&page=1&region=AR',
    requestMovieDb,
  );

  const width = Dimensions.get('window').width;

  const navigation = useNavigation();

  return (
    <SectionContainer>
      <SectionTitle>Upcoming! 🍿</SectionTitle>
      {isLoading && (
        <ContentLoader
          speed={2}
          width={436}
          height={214}
          viewBox="0 0 436 214"
          backgroundColor={'#333'}
          foregroundColor={'#999'}>
          <Rect x="23" y="19" rx="16" ry="16" width="398" height="175" />
        </ContentLoader>
      )}
      {!isLoading && (
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={data?.results.filter(item => item?.backdrop_path)}
          scrollAnimationDuration={1000}
          renderItem={({item}) => (
            <CarouselButton
              onPress={() => navigation.navigate('Details', {movie: item})}>
              <ImageBackground
                imageStyle={{borderRadius: 16}}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item?.backdrop_path}`,
                }}>
                <Gradient colors={['#0000', '#000']}>
                  <ItemReleaseDate>
                    Release: {item?.release_date}
                  </ItemReleaseDate>
                  <ItemTitle>
                    {item?.title}
                    {item?.title !== item?.original_title && (
                      <ItemOriginalTitle>{` (${item?.original_title})`}</ItemOriginalTitle>
                    )}
                  </ItemTitle>
                </Gradient>
              </ImageBackground>
            </CarouselButton>
          )}
        />
      )}
    </SectionContainer>
  );
}
