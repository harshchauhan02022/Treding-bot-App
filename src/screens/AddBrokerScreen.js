// ✅ AddBrokerScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function AddBrokerScreen({ navigation, route }) {
 const { combinedForm } = route.params;

 const handleAddBroker = () => {
  navigation.navigate('Exness', { combinedForm });
 };

 return (
  <View style={styles.container}>
   <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
    <Ionicons name="chevron-back" size={24} color="black" />
   </TouchableOpacity>
   <Text style={styles.name}>Hello {combinedForm.full_name || 'User'}</Text>
   <View style={styles.card}>
    <Text style={styles.label}>Profit</Text>
    <Text style={styles.amount}>$00.00</Text>
    <TouchableOpacity style={styles.button} onPress={handleAddBroker}>
     <Text style={styles.buttonText}>+ Add Broker</Text>
    </TouchableOpacity>
    <Text style={styles.status}>Broker not connected</Text>
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 container: { flex: 1, backgroundColor: 'white', padding: 5, justifyContent: 'center' },
 name: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
 card: {
  backgroundColor: '#857AFF',
  padding: 20,
  borderRadius: 12,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 2, height: 4 },
  shadowOpacity: 0.05,
  shadowRadius: 2,
  elevation: 3,
 },
 label: { color: 'white', fontSize: 14 },
 amount: { color: 'white', fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
 button: { backgroundColor: 'white', borderRadius: 8, paddingVertical: 8, paddingHorizontal: 16, marginBottom: 6 },
 buttonText: { color: '#857AFF', fontWeight: 'bold' },
 status: { color: 'white', fontSize: 12 },
 backButton: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#E0E0E0',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
 },
});
