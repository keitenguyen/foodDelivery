import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Routes from '../constants/Routes';
import BottomTabBar from '../components/BottomTabBar';
import {View} from 'react-native';
import {HomeScreen} from '../screens/Home';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Tab.Screen name={Routes.home} component={HomeScreen} />
      <Tab.Screen name={Routes.order} component={View} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
