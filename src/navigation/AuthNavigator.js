import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import Routes from '../constants/Routes';
import RegisterScreen from '../screens/Register';

const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.loginScreen} component={LoginScreen} />
      <Stack.Screen name={Routes.registerScreen} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
