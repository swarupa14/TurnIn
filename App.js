import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen'
import BookmarkScreen from './screens/BookmarkScreen'
import SettingsScreen from './screens/SettingsScreen'
import SupportScreen from './screens/SupportScreen'
import RootStackScreen from "./screens/RootStackScreen";
import { DrawerContent } from './screens/DrawerContent'

const Drawer = createDrawerNavigator();

const App = ()=> {
  return (
   <NavigationContainer>
   <RootStackScreen/>
   {/* <Drawer.Navigator drawerContent ={props => <DrawerContent {...props}/> }>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator>  */}
    </NavigationContainer>
  );
}
export default App;
