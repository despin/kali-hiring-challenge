import React, {type PropsWithChildren} from 'react';
import styled from 'styled-components/native';

const SafeArea = styled.SafeAreaView`
  background-color: black;
  flex: 1;
`;

interface ScreenContainerProps extends PropsWithChildren {}

export default function ScreenContainer({children}: ScreenContainerProps) {
  return <SafeArea>{children}</SafeArea>;
}
