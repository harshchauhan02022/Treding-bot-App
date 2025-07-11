import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  padding: 16,
 },
 header: {
  flexDirection: 'row',
  alignItems: 'center',
  // marginBottom: 5,
  marginBottom: 16,
 },
 backButton: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#E0E0E0', // light gray circle
  justifyContent: 'center',
  alignItems: 'center',
  // marginBottom: 2,
  marginRight: 6,
  marginLeft: 10,
 },

 backArrow: {
  color: '#4B3DE9', // purple arrow color (you can change)
  fontSize: 42,
  fontWeight: 'bold',
  marginBottom: 8,
 },

 headerTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 2,
 },
 card: {
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 16,
  elevation: 2,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowOffset: { width: 2, height: 2 },
  shadowRadius: 5,
 },
 label: {
  fontSize: 13,
  fontWeight: '600',
  marginTop: 6,
  marginBottom: 4,
  color: '#333',
 },
 input: {
  borderWidth: 1,
  borderColor: '#ddd',
  backgroundColor: '#f9f9f9',
  borderRadius: 8,
  paddingHorizontal: 12,
  height: 40,
  fontSize: 13,
 },
 pickerWrapper: {
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 8,
  backgroundColor: '#f9f9f9',
  height: 40,
  justifyContent: 'center',
 },
 picker: {
  height: 40,
  width: '100%',
  fontSize: 13,
 },
 button: {
  marginTop: 20,
  backgroundColor: '#7d87f3',
  borderRadius: 8,
  paddingVertical: 14,
  alignItems: 'center',
 },
 buttonText: {
  color: '#fff',
  fontWeight: '600',
  fontSize: 16,
 },
});
