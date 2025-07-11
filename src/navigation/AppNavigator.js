import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';
import TradingScreen from '../screens/TradingScreen';
import UploadAadharScreen from '../screens/UploadAadharScreen';
import AddBrokerScreen from '../screens/AddBrokerScreen';
import ExnessScreen from '../screens/ExnessScreen';
import HomeScreen from '../screens/HomeScreen';
import WalletScreen from '../screens/WalletScreen ';
import TradeHistoryScreen from '../screens/TradeHistoryScreen ';
import ReferDetailsScreen from '../screens/ReferDetailsScreen ';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// ✅ Bottom Tab Navigator
function BottomTabs() {
 return (
  <Tab.Navigator
   screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
     let iconName;
     if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
     else if (route.name === 'Wallet') iconName = focused ? 'wallet' : 'wallet-outline';
     else if (route.name === 'Trade History') iconName = focused ? 'stats-chart' : 'stats-chart-outline';
     else if (route.name === 'Refer Details') iconName = focused ? 'gift' : 'gift-outline';
     else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';

     return <Ionicons name={iconName} size={22} color={color} />;
    },
    tabBarActiveTintColor: '#857AFF',
    tabBarInactiveTintColor: 'gray',
    tabBarLabelStyle: { fontSize: 12 },
    tabBarStyle: {
     backgroundColor: '#fff',
     borderTopLeftRadius: 20,
     borderTopRightRadius: 20,
     height: 60,
     paddingBottom: 5,
    },
    headerShown: false,
   })}
  >
   {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
   <Tab.Screen name="Wallet" component={WalletScreen} />
   <Tab.Screen name="Trade History" component={TradeHistoryScreen} />
   <Tab.Screen name="Refer Details" component={ReferDetailsScreen} />
   {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
  </Tab.Navigator>
 );
}

// ✅ Root Navigation
export default function AppNavigator() {
 return (
  <NavigationContainer>
   <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Otp" component={OtpScreen} />
    <Stack.Screen name="ProfileDetails" component={ProfileDetailsScreen} />
    <Stack.Screen name="Trading" component={TradingScreen} />
    <Stack.Screen name="UploadAadhar" component={UploadAadharScreen} />
    <Stack.Screen name="AddBroker" component={AddBrokerScreen} />
    <Stack.Screen name="Exness" component={ExnessScreen} />
    <Stack.Screen name="MainApp" component={BottomTabs} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />


   </Stack.Navigator>
  </NavigationContainer>
 );
}
