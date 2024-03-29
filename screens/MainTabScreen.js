import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import ClassScreen from "./ClassScreen";
import DetailsScreen from "./DetailsScreen";
import ToDoScreen from "./ToDoScreen";
import ExploreScreen from "./ExploreScreen";
import MessageScreen from "./MessageScreen";
import ChatScreen from "./ChatScreen";
import AssignScreen from "./AssignScreen";
import { View } from "react-native-animatable";
import { DrawerContent } from "./DrawerContent";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";

// import CardListScreen from "./CardListScreen";
// import BookmarkScreen from "./BookmarkScreen";
// import SettingsScreen from "./SettingsScreen";
// import SupportScreen from "./SupportScreen";
// import RootStackScreen from "./RootStackScreen";

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const MessageStack = createStackNavigator();
const ToDoStack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const MainTabScreen = () => (
  // <NavigationContainer>
  //   <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
  //     <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
  //     <Drawer.Screen name="SupportScreen" component={SupportScreen} />
  //     <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
  //     <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
  //     <Drawer.Screen name="CardListScreen" component={CardListScreen} />
  //   </Drawer.Navigator>

  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#a8d7d7",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Message"
      component={MessageStackScreen}
      options={{
        tabBarLabel: "Inbox",
        tabBarColor: "#a8d7d7",
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="chat" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: "Notifications",
        tabBarColor: "#a8d7d7",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="To-Do-List"
      component={ToDoStackScreen}
      options={{
        tabBarLabel: "To-Do-List",
        tabBarColor: "#a8d7d7",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="clipboard-list-outline"
            color={color}
            size={24}
          />
        ),
      }}
    />
  </Tab.Navigator>
  // </NavigationContainer>
);
export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#a8d7d7",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: "My Classes",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={35}
            backgroundColor="#a8d7d7"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
    <HomeStack.Screen
      name="Class"
      component={ClassScreen}
      options={({ route }) => ({
        title: route.params.className,
        headerBackTitleVisible: false,
      })}
    />
    <HomeStack.Screen
      name="Assign"
      component={AssignScreen}
      options={({ route }) => ({
        title: route.params.AssignTitle,
        headerBackTitleVisible: false,
      })}
    />
  </HomeStack.Navigator>
);

const MessageStackScreen = ({ navigation }) => (
  <MessageStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#a8d7d7",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <MessageStack.Screen
      name="Inbox"
      component={MessageScreen}
      options={{
        title: "Recent Messages",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={35}
            backgroundColor="#a8d7d7"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
    <MessageStack.Screen
      name="Chat"
      component={ChatScreen}
      options={({ route }) => ({
        title: route.params.userName,
        headerBackTitleVisible: false,
      })}
    />
  </MessageStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#a8d7d7",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        title: "Notifications",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={35}
            backgroundColor="#a8d7d7"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);

const ToDoStackScreen = ({ navigation }) => (
  <ToDoStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#a8d7d7",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ToDoStack.Screen
      name="To-Do"
      component={ToDoScreen}
      options={{
        title: "To-Do-List",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={35}
            backgroundColor="#a8d7d7"
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
    <ToDoStack.Screen
      name="Assign"
      component={AssignScreen}
      options={({ route }) => ({
        title: route.params.AssignTitle,
        headerBackTitleVisible: false,
      })}
    />
  </ToDoStack.Navigator>
);
