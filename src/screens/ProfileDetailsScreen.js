import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/ProfileDetailsScreen.css';

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

 const handleChange = (field, value) => {
  setForm({ ...form, [field]: value });
 };

 const handleNext = () => {
  const required = ['full_name', 'email', 'gender', 'address', 'state'];
  for (let field of required) {
   if (!form[field]) return Alert.alert('Error', `Please fill ${field.replace('_', ' ')}`);
  }
  navigation.navigate('Trading', { profileData: form });
 };

 return (
  <View style={styles.container}>
   <View style={styles.header}>
    {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
     <Ionicons name="chevron-back" size={22} color="#000" />
     <Text style={{ fontSize: 22, marginRight: 6 }}>{'<'}</Text>
    </TouchableOpacity> */}
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
     <Text style={styles.backArrow}>{'\u2190'}</Text> {/* Unicode for ← arrow */}
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Profile</Text>
   </View>

   <View style={styles.card}>
    <Text style={styles.label}>Full Name</Text>
    <TextInput
     placeholder="Enter name"
     value={form.full_name}
     onChangeText={text => handleChange('full_name', text)}
     style={styles.input}
    />

    <Text style={styles.label}>Email ID</Text>
    <TextInput
     placeholder="Enter email"
     keyboardType="email-address"
     value={form.email}
     onChangeText={text => handleChange('email', text)}
     style={styles.input}
    />

    <Text style={styles.label}>Mobile Number</Text>
    <TextInput value={form.mobile_number} editable={false} style={styles.input} />

    <Text style={styles.label}>Gender</Text>
    <View style={styles.pickerWrapper}>
     <Picker
      selectedValue={form.gender}
      onValueChange={value => handleChange('gender', value)}
      style={styles.picker}
     >
      <Picker.Item label="Select" value="" />
      <Picker.Item label="Male" value="Male" />
      <Picker.Item label="Female" value="Female" />
      <Picker.Item label="Other" value="Other" />
     </Picker>
    </View>

    <Text style={styles.label}>Address</Text>
    <TextInput
     placeholder="Enter address"
     value={form.address}
     onChangeText={text => handleChange('address', text)}
     style={styles.input}
    />

    <Text style={styles.label}>State</Text>
    <TextInput
     placeholder="Enter state"
     value={form.state}
     onChangeText={text => handleChange('state', text)}
     style={styles.input}
    />

    <Text style={styles.label}>Registration Date</Text>
    <TextInput value={form.registration_date} editable={false} style={styles.input} />

    <TouchableOpacity style={styles.button} onPress={handleNext}>
     <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
   </View>
  </View>
 );
}
