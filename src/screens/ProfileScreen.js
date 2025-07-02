import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function ProfileScreen({ navigation, route }) {
 const mobileNumber = route?.params?.mobileNumber || '';

 const handleCompleteProfile = () => {
  navigation.navigate('ProfileDetails', { mobileNumber });

 };

 return (
  <View style={styles.container}>
   <Text style={styles.title}>Profile</Text>

   <View style={styles.row}>
    <View style={styles.rowLeft}>
     <FontAwesome name="user" size={18} color="#5D3FD3" style={{ marginRight: 8 }} />
     <Text style={styles.label}>Personal details</Text>
    </View>
    <Text style={styles.badge}>Not Verified</Text>
   </View>

   <TouchableOpacity style={styles.button} onPress={handleCompleteProfile}>
    <Text style={styles.buttonText}>Complete profile</Text>
   </TouchableOpacity>
  </View>
 );
}
