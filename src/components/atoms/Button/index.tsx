import React from 'react';
import styled from 'styled-components/native';

interface ContainerProps {
  secondary?: boolean;
}

const Container = styled.TouchableOpacity<ContainerProps>`
  background-color: ${props => (props.secondary ? '#333' : 'red')};
  border-radius: 8px;
  margin: 8px;
  padding: 8px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

interface ActivityIndicatorProps {
  secondary?: boolean;
}

const ActivityIndicator = styled.ActivityIndicator<ActivityIndicatorProps>`
  height: 18px;
  color: ${props => (props.secondary ? 'white' : 'black')};
`;

type Props = {
  onPress: () => void | Promise<void>;
  label: string;
  secondary?: boolean;
  isLoading?: boolean;
};

export default function Button({onPress, label, secondary, isLoading}: Props) {
  return (
    <Container
      secondary={secondary}
      onPress={onPress}
      testID="button-container">
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text testID="button-text">{label}</Text>
      )}
    </Container>
  );
}
