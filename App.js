import React from 'react';
import type {Node} from 'react';
import {View, StyleSheet} from 'react-native';

import LoginScreen from './src/screens/Login';
import RegisterScreen from './src/screens/Register';
import StackNavigator from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";

const App: () => Node = () => {
  // const insets = useSafeAreaInsets();
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
