import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './nav.styles';
import {
  homeGreen,
  homeGrey,
  walletGreen,
  walletGrey,
  calculatorGreen,
  calculatorGrey,
  userGreen,
  userGrey,
} from '../../../images/index';

import HomePage from '../../pages/home.page';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomePage} />
    </Tab.Navigator>
  );
};
