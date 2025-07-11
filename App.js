import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/navigation/AppNavigator';
import Toast from 'react-native-toast-message';
import ProfileDetailsScreen from './src/screens/ProfileDetailsScreen';

export default function App() {
  return (
    <>
      {/* <AppNavigator /> */}
      <ProfileDetailsScreen />
      <Toast />
    </>
  );
}
