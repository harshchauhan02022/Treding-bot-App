import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/TradingScreen.css'; // updated style file

export default function TradingScreen({ navigation, route }) {
 const { profileData } = route.params || {};
 const [trading_categories, setTradingCategories] = useState('');
 const [refer_id, setReferId] = useState('');
 const [broker, setBroker] = useState('');

 const handleNext = () => {
  if (!trading_categories || !broker) {
   alert('Please fill all required fields');
   return;
  }

  const finalData = {
   ...profileData,
   trading_categories,
   refer_id,
   broker
  };

  navigation.navigate('UploadAadhar', { formData: finalData });
 };

 return (
  <View style={styles.container}>
   <Text style={styles.title}>Profile</Text>
   <View style={styles.card}>

    <Text style={styles.label}>Trading Categories</Text>
    <View style={styles.pickerWrapper}>
     <Picker
      selectedValue={trading_categories}
      onValueChange={value => setTradingCategories(value)}
      style={styles.picker}
     >
      <Picker.Item label="Select" value="" />
      <Picker.Item label="Equity" value="equity" />
      <Picker.Item label="Commodity" value="commodity" />
      <Picker.Item label="Currency" value="currency" />
     </Picker>
    </View>

    <TextInput
     placeholder="Refer by"
     value={refer_id}
     onChangeText={setReferId}
     style={styles.input}
    />

    <Text style={styles.label}>Broker</Text>
    <View style={styles.pickerWrapper}>
     <Picker
      selectedValue={broker}
      onValueChange={value => setBroker(value)}
      style={styles.picker}
     >
      <Picker.Item label="Select" value="" />
      <Picker.Item label="Zerodha" value="zerodha" />
      <Picker.Item label="Upstox" value="upstox" />
      <Picker.Item label="Groww" value="groww" />
     </Picker>
    </View>

    <TouchableOpacity style={styles.button} onPress={handleNext}>
     <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>
   </View>
  </View>
 );
}
