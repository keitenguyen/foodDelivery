import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Routes from '../constants/Routes';
import CategoryScreen from '../screens/Category';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name={Routes.categoryScreen} component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
