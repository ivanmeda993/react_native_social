import React from 'react';
import {Text} from 'react-native';
import {style} from './style.ts';

interface TitleProps {
  title: string;
}
const Title = ({title}: TitleProps) => {
  return <Text style={style.title}>{title}</Text>;
};

export default Title;
