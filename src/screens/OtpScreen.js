import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import styles from '../styles/OtpScreen.css';


export default function OtpScreen({ route, navigation }) {
 const { mobileNumber } = route.params;
 const [otpArray, setOtpArray] = useState(['', '', '', '', '', '']);
 const inputs = useRef([]);

 const handleOtpChange = (text, index) => {
  const newOtp = [...otpArray];
  newOtp[index] = text;
  setOtpArray(newOtp);
  if (text && index < 5) {
   inputs.current[index + 1].focus();
  }
 };

 const handleVerify = async () => {
  const otp = otpArray.join('');
  if (otp.length !== 6) {
   return Alert.alert('Enter 6-digit OTP');
  }
  try {
   const res = await axios.post('http://localhost:5000/api/login/verify-otp', {
    mobile_number: mobileNumber,
    otp,
   });
   Alert.alert('Success', res.data.message);
   navigation.navigate('Profile');
  } catch (err) {
   Alert.alert('Error', err.response?.data?.error || 'Failed to verify OTP');
  }
 };

 return (
  <View style={styles.container}>
   <Text style={styles.title}>OTP Verification</Text>
   <Text style={styles.subtitle}>We have sent a verification code to +91{mobileNumber}</Text>
   <View style={styles.otpContainer}>
    {otpArray.map((value, index) => (
     <TextInput
      key={index}
      ref={(ref) => (inputs.current[index] = ref)}
      maxLength={1}
      keyboardType="number-pad"
      style={styles.otpBox}
      onChangeText={(text) => handleOtpChange(text, index)}
      value={value}
     />
    ))}
   </View>
   <Text style={styles.resendText}>Didn’t receive the OTP? Retry in 00:30</Text>
   <TouchableOpacity style={styles.button} onPress={handleVerify}>
    <Text style={styles.buttonText}>Verify and Proceed</Text>
   </TouchableOpacity>
  </View>
 );
}
