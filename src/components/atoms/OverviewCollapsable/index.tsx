import React, {useState} from 'react';
import styled from 'styled-components/native';

const OverviewPanel = styled.TouchableOpacity`
  margin-left: 16px;
  margin-bottom: 16px;
`;
const OverviewTitle = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
const OverviewText = styled.Text`
  color: white;
`;
const OverviewIndicator = styled.Text`
  color: grey;
  margin-top: 8px;
  text-align: right;
`;

interface OverviewCollapsableProps {
  text: string;
}

export default function OverviewCollapsable({text}: OverviewCollapsableProps) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <OverviewPanel onPress={() => setCollapsed(v => !v)}>
      <OverviewTitle>Overview 📃</OverviewTitle>
      <OverviewText numberOfLines={collapsed ? 2 : undefined}>
        {text}
      </OverviewText>
      <OverviewIndicator>
        {collapsed ? 'Show more' : 'Show less'}
      </OverviewIndicator>
    </OverviewPanel>
  );
}
