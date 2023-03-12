import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin: 8px;
`;

const LabelText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: right;
`;

const ValueText = styled.Text`
  color: white;
`;

const Label = styled.View`
  background-color: #3d3d3d;
  flex: 1;
  text-align: right;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  padding: 16px;
`;
const Value = styled.View`
  background: #202020;
  flex: 3;
  padding: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
`;

interface Props {
  label: string;
  value?: string | null;
}

export default function DataItem({label, value}: Props) {
  return (
    <Container>
      <Label>
        <LabelText>{label}</LabelText>
      </Label>
      <Value>
        <ValueText>{value ?? 'Not Available'}</ValueText>
      </Value>
    </Container>
  );
}
