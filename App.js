import React from 'react';
import type {Node} from 'react';
import {View, StyleSheet} from 'react-native';

import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';

const App: () => Node = () => {
  // const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <RegisterScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
