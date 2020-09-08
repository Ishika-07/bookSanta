import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppStackNavigator } from './AppStackNavigator'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import BookDonateScreen from '../screens/bookDonateScreen'
import BookRequestScreen from '../screens/bookRequestScreen';

export const AppTabNavigator= createBottomTabNavigator({
    DonateBooks: {screen: AppStackNavigator, navigationOptions:{tabBarLabel:'Donate Books'}},
    RequestBooks:{screen: BookRequestScreen, navigationOptions:{tabBarLabel: 'Request For Books'}}
})