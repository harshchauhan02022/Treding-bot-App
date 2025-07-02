import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import styles from '../styles/UploadAadharScreen.css';


export default function UploadAadharScreen({ route, navigation }) {
 const { formData } = route.params || {};
 const [frontImage, setFrontImage] = useState(null);
 const [backImage, setBackImage] = useState(null);

 const pickImage = async (setImage) => {
  const result = await ImagePicker.launchImageLibraryAsync({
   mediaTypes: ImagePicker.MediaTypeOptions.Images,
   allowsEditing: true,
   aspect: [4, 3],
   quality: 1,
  });

  if (!result.canceled) {
   setImage(result.assets[0].uri);
  }
 };

 const handleSubmit = async () => {
  if (!frontImage || !backImage) return Alert.alert('Error', 'Upload both images');

  const finalSubmission = {
   ...formData,
   aadhar_front: frontImage,
   aadhar_back: backImage,
  };

  try {
   const res = await axios.post('http://<YOUR_IP>:5000/api/users/register', finalSubmission);
   Alert.alert('Success', 'Registration complete');
   navigation.popToTop(); // Go back to home
  } catch (err) {
   console.error(err);
   Alert.alert('Error', err.response?.data?.error || 'Failed to register');
  }
 };

 return (
  <View style={styles.container}>
   <Text style={styles.title}>Upload Aadhaar Card</Text>
   <View style={styles.card}>
    <TouchableOpacity style={styles.uploadBox} onPress={() => pickImage(setFrontImage)}>
     <Text>{frontImage ? 'Front Uploaded' : 'Upload Front Side'}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.uploadBox} onPress={() => pickImage(setBackImage)}>
     <Text>{backImage ? 'Back Uploaded' : 'Upload Back Side'}</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
     <Text style={styles.buttonText}>Complete</Text>
    </TouchableOpacity>
   </View>
  </View>
 );
}
