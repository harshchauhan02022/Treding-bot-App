import { StyleSheet } from 'react-native';

const profileScreenStyles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#F3E8FF',
  padding: 20,
  justifyContent: 'center',
 },
 title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
 row: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 30,
  backgroundColor: '#f6e5ff',
  padding: 14,
  borderRadius: 12,
 },
 rowLeft: {
  flexDirection: 'row',
  alignItems: 'center',
 },
 label: { fontSize: 16, color: '#000' },
 badge: {
  backgroundColor: '#FFD6D6',
  color: '#B00',
  paddingVertical: 4,
  paddingHorizontal: 10,
  borderRadius: 6,
  fontSize: 12,
 },
 button: {
  backgroundColor: '#857AFF',
  padding: 16,
  borderRadius: 10,
  alignItems: 'center',
 },
 buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

export default profileScreenStyles;
