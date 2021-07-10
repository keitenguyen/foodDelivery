import React from 'react';

import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import { FONT_DEMI, getHeight } from "../../constants/Styles";
export const Button = ({navigateLink, text, bgColor, styleContainer}) => {
  return (
    <View style={[styles.container, styleContainer]}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: bgColor}]}
        onPress={navigateLink}
        disabled={!!navigateLink}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: getHeight(46),
  },
  button: {
    flex: 1,
    borderRadius: 6,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: FONT_DEMI,
    fontSize: 16,
    color: '#fff',
  },
});
