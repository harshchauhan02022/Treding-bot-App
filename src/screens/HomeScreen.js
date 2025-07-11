import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
 const [isEnabled, setIsEnabled] = useState(false);
 const toggleSwitch = () => setIsEnabled(prev => !prev);

 return (
  <View style={styles.wrapper}>
   {/* Top Card */}
   <View style={styles.container}>
    <View style={styles.card}>
     <View style={styles.rowBetween}>
      <Text style={styles.nameText}>Hello Dharminder Singh</Text>
      <View style={styles.alignRight}>
       <Text style={styles.nameText}>Profit</Text>
       <Text style={styles.profit}>$00.00</Text>
      </View>
     </View>

     <Text style={styles.exness}>EXNESS</Text>
     <Text style={styles.subText}>Broker connected</Text>

     <View style={styles.switchRow}>
      <Text style={styles.switchLabel}>OFF</Text>
      <Switch
       trackColor={{ false: '#ccc', true: '#fff' }}
       thumbColor="#857AFF"
       ios_backgroundColor="#ccc"
       onValueChange={toggleSwitch}
       value={isEnabled}
      />
      <Text style={styles.switchLabel}>ON</Text>
     </View>
    </View>
   </View>

   {/* Bottom Tab UI (custom static) */}
   <View style={styles.tabBar}>
    <TabItem icon="home-outline" label="Home" focused />
    <TabItem icon="wallet-outline" label="Wallet" />
    <TabItem icon="stats-chart-outline" label="Trade History" />
    <TabItem icon="gift-outline" label="Refer Details" />
    <TabItem icon="person-outline" label="Profile" />
   </View>
  </View>
 );
}

const TabItem = ({ icon, label, focused }) => (
 <TouchableOpacity style={styles.tabItem}>
  <Ionicons
   name={focused ? icon.replace('-outline', '') : icon}
   size={22}
   color={focused ? '#857AFF' : '#444'}
  />
  <Text style={[styles.tabLabel, focused && { color: '#857AFF' }]}>{label}</Text>
 </TouchableOpacity>
);

const styles = StyleSheet.create({
 wrapper: {
  flex: 1,
  backgroundColor: '#F3E8FF',
  justifyContent: 'space-between',
 },
 container: {
  alignItems: 'center',
  marginTop: 50,
 },
 card: {
  backgroundColor: '#857AFF',
  borderRadius: 14,
  padding: 20,
  width: '88%',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 6,
 },
 rowBetween: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
 },
 alignRight: {
  alignItems: 'flex-end',
 },
 nameText: {
  color: '#fff',
  fontSize: 16,
 },
 profit: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
 },
 exness: {
  color: '#fff',
  fontSize: 16,
  textAlign: 'center',
  marginTop: 10,
  fontWeight: 'bold',
 },
 subText: {
  color: '#fff',
  fontSize: 12,
  textAlign: 'center',
  marginBottom: 10,
 },
 switchRow: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 10,
 },
 switchLabel: {
  color: '#fff',
  fontSize: 14,
 },

 tabBar: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  backgroundColor: '#fff',
  paddingTop: 10,
  paddingBottom: 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowOffset: { width: 0, height: -2 },
  elevation: 5,
 },
 tabItem: {
  alignItems: 'center',
  justifyContent: 'center',
 },
 tabLabel: {
  fontSize: 12,
  color: '#444',
  marginTop: 4,
 },
});
