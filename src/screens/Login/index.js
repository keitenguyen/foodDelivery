import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import TextBox from '../../components/TextBox';
import {NoLogin} from '../../components/Header';
import {COLORS, getHeight, getWidth, TEXT_STYLE} from '../../constants/Styles';
import {Button} from '../../components/Button';

const LoginScreen = () => {
  return (
    <View>
      <NoLogin />
      <Text style={[styles.heading, TEXT_STYLE.largeTitle]}>Sign In</Text>
      <Text style={styles.textWrapper}>
        <Text style={[TEXT_STYLE.body2, styles.textDescription]}>
          Don't have an account?
        </Text>
        <TouchableOpacity style={{paddingVertical: 0, marginVertical: 0}}>
          <Text style={[TEXT_STYLE.body2, styles.textLink]}>Sign up now!</Text>
        </TouchableOpacity>
      </Text>
      <TextBox
        placeholder={'Email or Phone Number'}
        styleTextBox={styles.textbox}
        styleContainer={styles.textBoxContainer}
      />
      <TextBox
        type={'password'}
        placeholder={'Password'}
        styleTextBox={styles.textbox}
        styleContainer={styles.textBoxContainer}
      />

      <TouchableOpacity>
        <Text>Forgot password?</Text>
      </TouchableOpacity>
      <Button
        bgColor={COLORS.primaryColor.p1}
        text="Sign In"
        styleContainer={styles.loginBtn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textbox: {
    height: 50,
  },
  textBoxContainer: {
    marginBottom: getHeight(16),
    marginHorizontal: getWidth(24),
  },
  loginBtn: {
    marginHorizontal: getWidth(24),
  },
  heading: {
    marginTop: getHeight(56),
    marginBottom: getHeight(16),
    marginHorizontal: getWidth(24),
  },
  textWrapper: {
    marginHorizontal: getWidth(24),
  },
  textDescription: {
    color: '#697586',
    backgroundColor: 'green',
  },
  textLink: {
    color: COLORS.primaryColor.p1,
    backgroundColor: 'red',
    paddingTop: 2,
  },
});
export default LoginScreen;
