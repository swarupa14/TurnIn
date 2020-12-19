import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen'
import ProfileScreen from './ProfileScreen'
import ExploreScreen from "./ExploreScreen";


const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const MainTabScreen = ()=> (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#a8d7d7',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#a8d7d7',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#a8d7d7',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#a8d7d7',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
    
);
export default MainTabScreen;

const HomeStackScreen =({navigation}) =>(
  <HomeStack.Navigator screenOptions= {{
        headerStyle: {
            backgroundColor: '#a8d7d7'
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold'
          }
      }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title: 'Overview',
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={35} backgroundColor='#a8d7d7'
            onPress ={() =>navigation.openDrawer()}></Icon.Button>
          )
        }} 

        />
      </HomeStack.Navigator>

); 

const DetailsStackScreen =({navigation}) =>(
  <DetailsStack.Navigator screenOptions= {{
        headerStyle: {
            backgroundColor: '#a8d7d7'
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold'
          }
      }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen}
        options={{
          title: 'Notifications',
          headerLeft: () => (
            <Icon.Button name="ios-menu" size={35} backgroundColor='#a8d7d7'
            onPress ={() =>navigation.openDrawer()}></Icon.Button>
          )
        }} 
 />
      </DetailsStack.Navigator>

);