import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {getFontFamily} from '../../libs/getFontFamily.ts';

interface TitleProps {
  title: string;
}
const Title = ({title}: TitleProps) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: getFontFamily('Inter', '600'),
  },
});
