import { StatusBar } from "expo-status-bar";

import React, { Component, useState, useEffect, useContext } from "react";
import firebase from "./components/firebase.js";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
//import MainTabScreen from "./screens/MainTabScreen";
import CardListScreen from "./screens/CardListScreen";
import BookmarkScreen from "./screens/BookmarkScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SupportScreen from "./screens/SupportScreen";
import RootStackScreen from "./screens/RootStackScreen";
import { DrawerContent } from "./screens/DrawerContent";
// import auth from "@react-native-firebase/auth";
import { AuthContext } from "./navigation/AuthProvider";
import SplashScreen from "./screens/SplashScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import MainTabScreen from "./screens/MainTabScreen";
console.disableYellowBox = true;

import { auth } from "./components/firebase";
const Drawer = createDrawerNavigator();

const RootStack = createStackNavigator();

// const RootStackScreen = ({ navigation }) => (

// );
export default function App() {
  return (
    <NavigationContainer>
      {/* {auth ? (
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
          <Drawer.Screen name="CardListScreen" component={CardListScreen} />
        </Drawer.Navigator>
      ) : ( */}
      <RootStackScreen />
      {/* )} */}
    </NavigationContainer>
  );
}
{
  /* function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;
  if (!user) {
    return (
      <RootStackScreen/>
    );
  }
  return (
    <Drawer.Navigator drawerContent ={props => <DrawerContent {...props}/> }>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator>
  );
} */
}

// export default App;
