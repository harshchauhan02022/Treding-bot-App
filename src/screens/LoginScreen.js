import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import styles from '../styles/LoginScreen.css';

export default function LoginScreen({ navigation }) {
 const [mobileNumber, setMobileNumber] = useState('');

 const handleContinue = async () => {
  if (mobileNumber.length !== 10) {
   return Alert.alert('Please enter a valid 10-digit mobile number');
  }

  try {
   const response = await axios.post('http://localhost:5000/api/login/send-otp', {
    mobile_number: mobileNumber,
   });
   Alert.alert('Success', response.data.message);
   navigation.navigate('Otp', { mobileNumber });
  } catch (err) {
   Alert.alert('Error', err.response?.data?.error || 'Failed to send OTP');
  }
 };

 return (
  <View style={styles.container}>
   <View style={styles.card}>
    <Text style={styles.label}>Get started</Text>
    <TextInput
     placeholder="Enter mobile number"
     keyboardType="numeric"
     maxLength={10}
     value={mobileNumber}
     onChangeText={setMobileNumber}
     style={styles.input}
    />
    <TouchableOpacity style={styles.button} onPress={handleContinue}>
     <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity>
   </View>
  </View>
 );
}
