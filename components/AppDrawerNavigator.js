import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{createDrawerNavigator} from 'react-navigation-drawer'
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu from './CustomSidebarMenu'
import SettingScreen from '../screens/settingScreen';
import MyDonations from '../screens/myDonationScreen';
import NotificationScreen from '../screens/notificationScreen';

export const AppDrawerNavigator = createDrawerNavigator(
    {
        Home:{screen:AppTabNavigator},
        MyDonations:{screen:MyDonations},
        Notifications:{screen:NotificationScreen},
        Setting:{screen:SettingScreen}
    },
    
    {
        contentComponent: CustomSideBarMenu
    },
    
    {
        initialRouteName : 'Home'
    }

)