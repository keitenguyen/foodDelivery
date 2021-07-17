import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import TextBox from '../../components/TextBox/index';
import {NoLogin} from '../../components/Header';
import {
  COLORS,
  FONT_MEDIUM,
  getHeight,
  getWidth,
  MEDIUM,
  TEXT_STYLE,
} from '../../constants/Styles';
import {Button} from '../../components/Button';
import {FacebookIcon, GoogleIcon} from '../../assets/images';

const RegisterScreen = () => {
  return (
    <View>
      <NoLogin />
      <Text style={[styles.heading, TEXT_STYLE.largeTitle]}>Sign Up</Text>
      <View style={styles.textWrapper}>
        <Text>
          <Text style={[TEXT_STYLE.body2, styles.textDescription]}>
            Enter your Email and new password {'\n'}for sign up, or
          </Text>
          <TouchableOpacity>
            <Text style={[TEXT_STYLE.body2, styles.textLink]}>
              {' Already have account?'}
            </Text>
          </TouchableOpacity>
        </Text>
      </View>

      <TextBox
        placeholder={'Email or Phone Number'}
        styleTextBox={styles.textBox}
        styleContainer={styles.textBoxContainer}
        value={''}
      />
      <TextBox
        type={'password'}
        placeholder={'Password'}
        styleTextBox={styles.textBox}
        styleContainer={styles.textBoxContainer}
        value={''}
      />

      <TextBox
        type={'password'}
        placeholder={'Confirm Password'}
        styleTextBox={styles.textBox}
        styleContainer={styles.textBoxContainer}
        value={''}
      />

      <Button
        bgColor={COLORS.primaryColor.p1}
        text="Sign In"
        styleContainer={styles.loginBtn}
      />

      <Text style={[styles.stylePolicy, TEXT_STYLE.body2]}>
        <Text>By signing up you agree to our </Text>
        <Text style={styles.highlightPolicy}>Terms Condition</Text>
        <Text>{' & '}</Text>
        <Text style={styles.highlightPolicy}>Privacy Policy</Text>
      </Text>

      <Text style={styles.textOr}>or</Text>

      <View style={styles.socialLoginWrapper}>
        <TouchableOpacity style={[styles.socialLoginBtn, styles.facebookLogin]}>
          <View style={styles.iconWrapper}>
            <Image style={styles.icon} source={FacebookIcon} />
          </View>
          <Text style={styles.socialText}>Continue with facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.socialLoginWrapper}>
        <TouchableOpacity style={[styles.socialLoginBtn, styles.googleLogin]}>
          <View style={styles.iconWrapper}>
            <Image style={styles.icon} source={GoogleIcon} />
          </View>
          <Text style={styles.socialText}>Continue with google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
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
    marginBottom: getHeight(32),
  },
  textDescription: {
    color: '#697586',
  },
  textLink: {
    color: COLORS.primaryColor.p1,
    lineHeight: getHeight(59),
  },
  forgotPassword: {
    marginBottom: getHeight(24),
  },
  textOr: {
    textAlign: 'center',
    marginVertical: getHeight(24),
    fontWeight: MEDIUM,
    color: COLORS.neutral.n2,
    fontSize: 16,
    textTransform: 'uppercase',
  },
  socialLoginWrapper: {
    height: getHeight(46),
    marginHorizontal: getWidth(24),
    marginBottom: getHeight(16),
  },
  socialLoginBtn: {
    borderRadius: 6,
    flex: 1,
    justifyContent: 'center',
  },
  iconWrapper: {
    width: getWidth(30),
    height: getHeight(30),
    backgroundColor: '#fff',
    borderRadius: 4,
    position: 'absolute',
    top: getHeight(8),
    left: getWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: getWidth(20),
    height: getHeight(20),
  },
  facebookLogin: {
    backgroundColor: '#4460A0',
  },
  googleLogin: {
    backgroundColor: '#4285F4',
  },
  socialText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 14,
    color: '#fff',
    fontFamily: FONT_MEDIUM,
  },
  stylePolicy: {
    textAlign: 'center',
    marginHorizontal: getWidth(57),
    marginTop: getHeight(16),
    color: COLORS.neutral.n2,
  },
  highlightPolicy: {
    color: COLORS.primaryColor.p1,
  },
});
export default RegisterScreen;
