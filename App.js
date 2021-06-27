/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {View, StyleSheet} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import LoginScreen from './src/screens/Login';

const App: () => Node = () => {
  // const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <View style={{height: 50}} />
      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
