import {StyleSheet, Dimensions} from 'react-native';
const REGULAR = '400';
const MEDIUM = '500';
const DEMI = '600';
const BOLD = '700';
export const FONT_REGULAR = 'AvenirNextLTPro-Regular';
export const FONT_MEDIUM = 'AvenirNextLTPro-Medium';
export const FONT_DEMI = 'AvenirNextLTPro-Demi';
export const FONT_BOLD = 'AvenirNextLTPro-Bold';
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
    fontFamily: FONT_MEDIUM,
  },
  title1: {
    fontSize: 27,
    fontWeight: DEMI,
    lineHeight: 32,
    fontFamily: FONT_DEMI,
  },
  title2: {
    fontSize: 20,
    fontWeight: DEMI,
    lineHeight: 24,
    fontFamily: FONT_DEMI,
  },
  headline1: {
    fontSize: 20,
    fontWeight: MEDIUM,
    lineHeight: 24,
    fontFamily: FONT_MEDIUM,
  },
  headline2: {
    fontSize: 16,
    fontWeight: DEMI,
    lineHeight: 19,
    fontFamily: FONT_DEMI,
  },
  body1: {
    fontSize: 16,
    fontWeight: REGULAR,
    lineHeight: 19,
    fontFamily: FONT_REGULAR,
  },
  body2: {
    fontSize: 15,
    fontWeight: MEDIUM,
    lineHeight: 18,
    fontFamily: FONT_MEDIUM,
  },
  caption1: {
    fontSize: 12,
    fontWeight: MEDIUM,
    lineHeight: 18,
    fontFamily: FONT_MEDIUM,
  },
});

export const getWidth = (width, designWidth = 375) => {
  return (Dimensions.get('window').width / designWidth) * width;
};

export const getHeight = (height, designHeight = 812) => {
  return (Dimensions.get('window').height / designHeight) * height;
};
