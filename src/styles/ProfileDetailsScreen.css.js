import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
 container: { flex: 1, backgroundColor: '#F3E8FF', padding: 20 },
 title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
 card: { backgroundColor: 'white', borderRadius: 12, padding: 20 },
 input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 12,
  marginBottom: 10,
 },
 button: {
  backgroundColor: '#857AFF',
  padding: 14,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 10,
 },
 buttonText: { color: 'white', fontWeight: 'bold' },
});

export default styles;
