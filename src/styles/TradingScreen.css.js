import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
  padding: 20,
 },
 title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
 card: {
  backgroundColor: 'white',
  borderRadius: 12,
  padding: 20,
  shadowColor: '#000',
  shadowOffset: { width: 2, height: 4 },
  shadowOpacity: 0.05,
  shadowRadius: 2,
  elevation: 3,
 },
 label: { fontSize: 14, marginBottom: 5, fontWeight: '500', borderRadius: 16, },
 input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 16,
  padding: 12,
  marginBottom: 15,
  fontSize: 14,
 },
 backButton: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#E0E0E0',
  justifyContent: 'center',
  alignItems: 'center',
  // marginBottom: 10,
  marginTop: 4,
  marginRight: 5,
 },
 pickerWrapper: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  marginBottom: 15,
 },
 picker: {
  height: 48,
  width: '100%',
  paddingHorizontal: 12,
  borderRadius: 16,
 },
 button: {
  backgroundColor: '#6A74FF',
  padding: 14,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 3,
 },
 buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
 button: {
  backgroundColor: '#857AFF',
  padding: 14,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 10,
 },
});

export default styles;
