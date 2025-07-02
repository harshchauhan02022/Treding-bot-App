import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import styles from '../styles/PhoneScreen.css';

export default function PhoneScreen({ navigation }) {
 const [phone, setPhone] = useState('');

 const proceed = () => {
  navigation.navigate('OTP', { phone });
 };

 return (
  <View style={styles.container}>
   <TextInput
    placeholder="Enter mobile number"
    keyboardType="phone-pad"
    style={styles.input}
    value={phone}
    onChangeText={setPhone}
   />
   <Button title="Continue" onPress={proceed} />
  </View>
 );
}