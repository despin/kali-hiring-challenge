import React from 'react';
import styled from 'styled-components/native';

interface IconContainerProps {
  spacingRight?: boolean;
  spacingLeft?: boolean;
}

const IconContainer = styled.TouchableOpacity<IconContainerProps>`
  border-radius: 16px;
  aspect-ratio: 1;
  border-color: red;
  border-width: 1px;
  border-style: solid;
  width: 40px;
  justify-content: center;
  margin-left: ${props => (props.spacingLeft ? '15px' : '0px')};
  margin-right: ${props => (props.spacingRight ? '15px' : '0px')};
`;

const IconText = styled.Text`
  font-size: 20px;
  text-align: center;
`;

interface IconButtonProps {
  icon: string;
  onPress?: () => void | Promise<void>;
  spacingLeft?: boolean;
  spacingRight?: boolean;
}

export default function IconButton({
  icon,
  onPress,
  spacingLeft,
  spacingRight,
}: IconButtonProps) {
  return (
    <IconContainer
      onPress={onPress ?? (() => {})}
      disabled={!onPress}
      spacingLeft={spacingLeft}
      spacingRight={spacingRight}>
      <IconText>{icon}</IconText>
    </IconContainer>
  );
}

//  headerLeft: () => (
//       <DrawerButton onPress={() => navigation.toggleDrawer()} />
//     ),
