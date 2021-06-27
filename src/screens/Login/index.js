import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import TextBox from '../../components/TextBox';

const LoginScreen = () => {
  return <TextBox styleTextBox={styles.textbox} />;
};

const styles = StyleSheet.create({
  textbox: {
    height: 30,
  },
});
export default LoginScreen;
