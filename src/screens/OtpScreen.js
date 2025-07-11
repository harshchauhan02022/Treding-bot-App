import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import styles from '../styles/OtpScreen.css';

export default function OtpScreen({ route, navigation }) {
 const { mobileNumber } = route.params;
 const [otpArray, setOtpArray] = useState(['', '', '', '', '', '']);
 const [resendTimer, setResendTimer] = useState(30);
 const inputs = useRef([]);

 useEffect(() => {
  let timer;
  if (resendTimer > 0) {
   timer = setInterval(() => {
    setResendTimer(prev => prev - 1);
   }, 1000);
  }
  return () => clearInterval(timer);
 }, [resendTimer]);

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
   Toast.show({ type: 'error', text1: 'Enter 6-digit OTP' });
   return;
  }

  try {
   const res = await axios.post('http://localhost:5000/api/login/verify-otp', {
    mobile_number: mobileNumber,
    otp,
   });
   Toast.show({ type: 'success', text1: res.data.message || 'OTP verified successfully!' });
   navigation.navigate('Profile', { mobileNumber });
  } catch (err) {
   Toast.show({
    type: 'error',
    text1: 'OTP Verification Failed',
    text2: err.response?.data?.error || 'Incorrect OTP',
   });
  }
 };

 const handleResendOtp = async () => {
  try {
   await axios.post('http://localhost:5000/api/login/send-otp', {
    mobile_number: mobileNumber,
   });
   setOtpArray(['', '', '', '', '', '']);
   inputs.current[0].focus();
   setResendTimer(30);
   Toast.show({ type: 'success', text1: 'OTP resent successfully' });
  } catch (err) {
   Toast.show({
    type: 'error',
    text1: 'Failed to resend OTP',
    text2: err.response?.data?.error || 'Something went wrong',
   });
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

   {/* ✅ Resend link logic */}
   {resendTimer > 0 ? (
    <Text style={styles.resendText}>Didn’t receive the OTP? Retry in 00:{resendTimer < 10 ? `0${resendTimer}` : resendTimer}</Text>
   ) : (
    <Text style={styles.resendText}>
     Didn’t receive the OTP?{' '}
     <Text style={styles.resendLink} onPress={handleResendOtp}>
      Resend again
     </Text>
    </Text>
   )}

   <TouchableOpacity style={styles.button} onPress={handleVerify}>
    <Text style={styles.buttonText}>Verify and Proceed</Text>
   </TouchableOpacity>
  </View>
 );
}
