import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: 'white',
  padding: 16,
  paddingTop: 50,
 },
 backButton: {
  width: 40,
  height: 40,
  borderRadius: 20,
  backgroundColor: '#E0E0E0',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 10,
 },
 title: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 20,
 },
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
 uploadBox: {
  borderWidth: 1,
  borderColor: '#3e7eff',
  borderStyle: 'dashed',
  borderRadius: 12,
  padding: 16,
  marginBottom: 15,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FAFAFA',
 },
 uploadText: {
  fontSize: 14,
  color: '#888',
  alignItems: 'center',
  justifyContent: 'center',
 },
 uploadIcon: {
  width: 67,
  height: 54,
  resizeMode: 'contain',
  marginBottom: 10,
 },
 previewImage: {
  width: 120,
  height: 150,
  resizeMode: 'contain',
  borderRadius: 8,
 },
 button: {
  backgroundColor: '#857AFF',
  padding: 12,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 10,
 },
 buttonText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 16,
 },
});

export default styles;
