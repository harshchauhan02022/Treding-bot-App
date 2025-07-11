import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/UploadAadharScreen.css';
{/* <Image source={require('../../assets/cloud-upload.png')} style={styles.uploadIcon} /> */}
import {
 View,
 Text,
 TouchableOpacity,
 Alert,
 Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

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

  if (!result.canceled && result.assets[0].uri) {
   setImage(result.assets[0].uri);
  }
 };

 const handleContinue = () => {
  if (!frontImage || !backImage) {
   return Alert.alert('Error', 'Please upload both Aadhar front and back images');
  }

  const combinedForm = {
   ...formData,
   aadhar_front: frontImage,
   aadhar_back: backImage,
  };

  navigation.navigate('AddBroker', { combinedForm });
 };

 return (
  <View style={styles.container}>
   {/* Back Button */}
   <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
    <Ionicons name="chevron-back" size={24} color="black" />
   </TouchableOpacity>

   <Text style={styles.title}>Upload Aadhaar Card</Text>

   <View style={styles.card}>
    <TouchableOpacity style={styles.uploadBox} onPress={() => pickImage(setFrontImage)}>
     {frontImage ? (
      <Image source={{ uri: frontImage }} style={styles.previewImage} />
     ) : (
      <Image source={require('../../assets/cloud-upload.png')} style={styles.uploadIcon} />
     )}
     <Text style={styles.uploadText}>Upload Front Side</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.uploadBox} onPress={() => pickImage(setBackImage)}>
     {backImage ? (
      <Image source={{ uri: backImage }} style={styles.previewImage} />
     ) : (
      <Image source={require('../../assets/cloud-upload.png')} style={styles.uploadIcon} />
     )}
     <Text style={styles.uploadText}>Upload Back Side</Text>
    </TouchableOpacity>


    <TouchableOpacity style={styles.button} onPress={handleContinue}>
     <Text style={styles.buttonText}>Complete</Text>
    </TouchableOpacity>
   </View>
  </View>
 );
}
