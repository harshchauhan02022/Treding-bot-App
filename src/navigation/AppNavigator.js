import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import OtpScreen from '../screens/OtpScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen';
import TradingScreen from '../screens/TradingScreen';
import UploadAadharScreen from '../screens/UploadAadharScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
 return (
  <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
   <Stack.Screen name="Login" component={LoginScreen} />
   <Stack.Screen name="Otp" component={OtpScreen} />
   <Stack.Screen name="Profile" component={ProfileScreen} />
   <Stack.Screen name="ProfileDetails" component={ProfileDetailsScreen} />
   <Stack.Screen name="Trading" component={TradingScreen} />
   <Stack.Screen name="UploadAadhar" component={UploadAadharScreen} />
  </Stack.Navigator>
 );
}
