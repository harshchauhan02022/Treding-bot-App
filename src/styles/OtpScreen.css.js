import { StyleSheet } from 'react-native';

export default StyleSheet.create({
 container: { flex: 1, backgroundColor: 'white', justifyContent: 'center', padding: 20 },
 title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
 subtitle: { fontSize: 14, marginBottom: 20 },
 otpContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
 otpBox: {
  width: 40,
  height: 50,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  textAlign: 'center',
  fontSize: 18,
 },
 resendText: { textAlign: 'center', fontSize: 12, color: '#555', marginBottom: 20 },
 button: { backgroundColor: '#857AFF', padding: 14, borderRadius: 8, alignItems: 'center' },
 buttonText: { color: 'white', fontWeight: 'bold' },

 resendLink: {
  color: '#000',
  fontWeight: '600',
  textDecorationLine: 'underline',
 },
});

