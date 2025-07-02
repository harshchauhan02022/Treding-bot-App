import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/ProfileDetailsScreen.css'; // correct import, not .css

export default function ProfileDetailsScreen({ navigation, route }) {
 const mobileNumber = route?.params?.mobileNumber || '';
 const [form, setForm] = useState({
  full_name: '',
  email: '',
  mobile_number: mobileNumber,
  gender: '',
  address: '',
  state: '',
  registration_date: new Date().toISOString().split('T')[0],
 });

 const handleChange = (field, value) => setForm({ ...form, [field]: value });

 const handleNext = () => {
  const required = ['full_name', 'email', 'gender', 'address', 'state'];
  for (let field of required) {
   if (!form[field]) return Alert.alert('Error', `Please fill ${field.replace('_', ' ')}`);
  }
  navigation.navigate('Trading', { profileData: form });
 };

 return (
  <View style={styles.container}>
   <Text style={styles.title}>Profile</Text>
   <View style={styles.card}>
    <TextInput
     placeholder="Full Name"
     value={form.full_name}
     onChangeText={text => handleChange('full_name', text)}
     style={styles.input}
    />
    <TextInput
     placeholder="Email ID"
     keyboardType="email-address"
     value={form.email}
     onChangeText={text => handleChange('email', text)}
     style={styles.input}
    />
    <TextInput
     value={form.mobile_number}
     editable={false}
     style={styles.input}
    />

    <Picker
     selectedValue={form.gender}
     onValueChange={(value) => handleChange('gender', value)}
     style={styles.input}
    >
     <Picker.Item label="Select Gender" value="" />
     <Picker.Item label="Male" value="Male" />
     <Picker.Item label="Female" value="Female" />
     <Picker.Item label="Other" value="Other" />
    </Picker>

    <TextInput
     placeholder="Address"
     value={form.address}
     onChangeText={text => handleChange('address', text)}
     style={styles.input}
    />
    <TextInput
     placeholder="State"
     value={form.state}
     onChangeText={text => handleChange('state', text)}
     style={styles.input}
    />
    <TextInput
     value={form.registration_date}
     editable={false}
     style={styles.input}
    />
    <TouchableOpacity style={styles.button} onPress={handleNext}>
     <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
   </View>
  </View>
 );
}
