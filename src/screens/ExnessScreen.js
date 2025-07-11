import React, { useState } from 'react';
import {
 View,
 Text,
 TextInput,
 TouchableOpacity,
 StyleSheet,
 Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export default function ExnessScreen({ navigation, route }) {
 const { combinedForm } = route.params;
 const [brokerId, setBrokerId] = useState('');
 const [appName, setAppName] = useState('');
 const [apiKey, setApiKey] = useState('');
 const [apiSecretKey, setApiSecretKey] = useState('');

 const handleSubmit = async () => {
  const formData = new FormData();

  for (const key in combinedForm) {
   if (key === 'aadhar_front' || key === 'aadhar_back') {
    formData.append(key, {
     uri: combinedForm[key],
     name: `${key}.jpg`,
     type: 'image/jpeg',
    });
   } else {
    formData.append(key, combinedForm[key]);
   }
  }

  formData.append('exness_broker_id', brokerId);
  formData.append('app_name', appName);
  formData.append('api_key', apiKey);
  formData.append('api_secret_key', apiSecretKey);

  try {
   await axios.post('http://localhost:5000/api/users/register', formData, {
    headers: {
     'Content-Type': 'multipart/form-data',
    },
   });

   Alert.alert('Success', 'Account Registered!');
   navigation.navigate('Home');
  } catch (error) {
   Alert.alert('Error', error.response?.data?.error || 'Registration failed');
  }
 };

 return (
  <View style={styles.container}>
   {/* Back Icon */}
   <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
    <Ionicons name="chevron-back" size={24} color="black" />
   </TouchableOpacity>
   <Text style={styles.label}>Enter broker ID</Text>
   <TextInput
    style={styles.input}
    value={brokerId}
    onChangeText={setBrokerId}
   />

   <Text style={styles.label}>App name</Text>
   <TextInput
    style={styles.input}
    value={appName}
    onChangeText={setAppName}
   />

   <Text style={styles.label}>API key</Text>
   <TextInput
    style={styles.input}
    value={apiKey}
    onChangeText={setApiKey}
   />

   <Text style={styles.label}>API secret key</Text>
   <TextInput
    style={styles.input}
    value={apiSecretKey}
    onChangeText={setApiSecretKey}
   />

   <Text style={styles.label}>Whitelisting IP</Text>
   <Text style={styles.staticText}>172.172.172.172</Text>

   <TouchableOpacity style={styles.button} onPress={handleSubmit}>
    <Text style={styles.buttonText}>Submit</Text>
   </TouchableOpacity>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
  padding: 20,
  paddingTop: 16,
 },
 backButton: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#E0E0E0',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
 },
 label: {
  fontSize: 14,
  marginTop: 10,
 },
 input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 10,
  marginBottom: 10,
  backgroundColor: 'white',
 },
 staticText: {
  fontSize: 14,
  color: '#555',
  marginBottom: 20,
 },
 button: {
  backgroundColor: '#857AFF',
  padding: 14,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 10,
 },
 buttonText: {
  color: 'white',
  fontWeight: 'bold',
 },
 card: {
  backgroundColor: 'white',
  borderRadius: 12,
  padding: 20,
  shadowColor: '#000',
  shadowOffset: { width: 2, height: 4 },
  shadowOpacity: 0.05,
  shadowRadius: 2,
  elevation: 3,
 },
});
