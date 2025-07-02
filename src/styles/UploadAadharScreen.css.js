// 📁 styles/UploadAadharScreen.styles.js
import { StyleSheet } from 'react-native';

const uploadAadharStyles = StyleSheet.create({
 container: { flex: 1, backgroundColor: '#F3E8FF', padding: 20 },
 title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
 card: { backgroundColor: 'white', borderRadius: 12, padding: 20 },
 uploadBox: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 40,
  marginBottom: 10,
  alignItems: 'center',
 },
 button: { backgroundColor: '#857AFF', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 10 },
 buttonText: { color: 'white', fontWeight: 'bold' },
});

export default uploadAadharStyles;
