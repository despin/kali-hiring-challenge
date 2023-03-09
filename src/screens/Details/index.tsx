import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {Text} from 'react-native';
import {PrivateStackParamList} from '../../navigation/private';

type Props = NativeStackScreenProps<PrivateStackParamList, 'Details'>;

type Navigation = NativeStackNavigationProp<PrivateStackParamList, 'Details'>;

export default function DetailsScreen({route}: Props) {
  return <Text>Details</Text>;
}
