import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, TabBarBottom } from 'react-navigation';

// Components
import TabBarIcon from '../components/TabBarIcon';

// Screens
import LunchScreen from '../screens/LunchScreen';
import InternetsScreen from '../screens/InternetsScreen';
import RestaurantScreen from '../screens/RestaurantScreen';

import styles from './styles';

// Internets Tab
const InternetsStack = createStackNavigator(
  {
    Internets: InternetsScreen
  }, {
    defaultNavigationOptions: {
      ...styles.headerOptions,
    }
  }
);
InternetsStack.navigationOptions = {
  tabBarLabel: 'internets',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'internets'}
    />
  ),
  ...styles.headerOptions,
  tabBarOptions: styles.tabBarOptions
};
InternetsStack.path = 'internets';

// Lunch Tab
const LunchStack = createStackNavigator(
  {
    Lunch: LunchScreen,
    Restaurant: RestaurantScreen
  }, {
    defaultNavigationOptions: {
      ...styles.headerOptions,
    }
  }
);

LunchStack.navigationOptions = {
  tabBarLabel: 'lunch',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'lunch'} />
  ),
  ...styles.headerOptions,
  tabBarOptions: styles.tabBarOptions
};

LunchStack.path = 'lunch';

// Main Tab Nav
const MainTabNavigator = createBottomTabNavigator({
  LunchStack,
  InternetsStack,
});

MainTabNavigator.path = '';

export default MainTabNavigator;
