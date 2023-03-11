import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  /* background-color: #ffa; */
  flex-direction: row;
  margin: 8px;
`;

const Label = styled.View`
  background-color: #ccf;
  flex: 1;
  text-align: right;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  padding: 16px;
`;
const Value = styled.View`
  background-color: #fcf;
  flex: 3;
  padding: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
`;

interface Props {
  label: string;
  value: string;
}

export default function DataItem({label, value}: Props) {
  return (
    <Container>
      <Label>
        <Text>{label}</Text>
      </Label>
      <Value>
        <Text>{value ?? 'Not Available'}</Text>
      </Value>
    </Container>
  );
}
