import {StyleSheet} from 'react-native';
const MEDIUM = '500';
const REGULAR = '400';
const DEMI = '600';
const BOLD = '700';

export default StyleSheet.create({
  largeTitle: {
    fontSize: 40,
    fontWeight: MEDIUM,
    lineHeight: 48,
  },
  title1: {
    fontSize: 27,
    fontWeight: DEMI,
    lineHeight: 32,
  },
  title2: {
    fontSize: 20,
    fontWeight: DEMI,
    lineHeight: 24,
  },
  headline1: {
    fontSize: 20,
    fontWeight: MEDIUM,
    lineHeight: 24,
  },
  headline2: {
    fontSize: 16,
    fontWeight: MEDIUM,
    lineHeight: 19,
  },
  body1: {
    fontSize: 16,
    fontWeight: REGULAR,
    lineHeight: 19,
  },
  body2: {
    fontSize: 15,
    fontWeight: MEDIUM,
    lineHeight: 18,
  },
  caption1: {
    fontSize: 12,
    fontWeight: MEDIUM,
    lineHeight: 18,
  },
});
