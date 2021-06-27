import {StyleSheet} from 'react-native';
const REGULAR = '400';
const MEDIUM = '500';
const SEMI = '600';
const BOLD = '700';
export const COLORS = {
  primaryColor: {
    p1: '#FB6D3B',
    p2: '#FC9631',
    p3: '#FC9631',
  },
  neutral: {
    n1: '#4F585E',
    n2: '#4F585E',
    n3: '#4F585E',
    n4: '#4F585E',
    n5: '#4F585E',
    n6: '#4F585E',
  },
  semantic: {
    s1: '#4F585E',
    s2: '#4F585E',
    s3: '#4F585E',
  },
};

export const TEXT_STYLE = StyleSheet.create({
  largeTitle: {
    fontSize: 40,
    fontWeight: MEDIUM,
    lineHeight: 48,
  },
  title1: {
    fontSize: 27,
    fontWeight: SEMI,
    lineHeight: 32,
  },
  title2: {
    fontSize: 20,
    fontWeight: SEMI,
    lineHeight: 24,
  },
  headline1: {
    fontSize: 20,
    fontWeight: MEDIUM,
    lineHeight: 24,
  },
  headline2: {
    fontSize: 16,
    fontWeight: SEMI,
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
})
