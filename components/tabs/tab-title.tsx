import React from 'react';
import {Text} from 'react-native';
import {tabStyle} from './style.ts';

interface TabTitleProps {
  title: string;
  isFocused: boolean;
}
const TabTitle = ({title, isFocused}: TabTitleProps) => {
  return (
    <Text style={[tabStyle.title, isFocused && tabStyle.titleFocused]}>
      {title}
    </Text>
  );
};

export default TabTitle;
