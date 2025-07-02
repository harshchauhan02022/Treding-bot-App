import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const regSchema = Yup.object().shape({
 username: Yup.string().required('Required'),
 password: Yup.string().min(3, 'Too Short').required('Required'),
});

export default ({ navigation }) => (
 <Formik
  initialValues={{ username: '', password: '' }}
  validationSchema={regSchema}
  onSubmit={async values => {
   try {
    const res = await axios.post('http://localhost:3001/register', values);
    alert(res.data);
    navigation.goBack();
   } catch (e) {
    alert(e.response?.data || 'Register error');
   }
  }}
 >
  {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
   <View style={styles.container}>
    <Text style={styles.title}>Register</Text>
    <TextInput placeholder="Username" style={styles.input} onChangeText={handleChange('username')} onBlur={handleBlur('username')} value={values.username} />
    {errors.username && <Text style={styles.error}>{errors.username}</Text>}
    <TextInput placeholder="Password" secureTextEntry style={styles.input} onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password} />
    {errors.password && <Text style={styles.error}>{errors.password}</Text>}
    <Button title="Register" onPress={handleSubmit} />
    <TouchableOpacity onPress={() => navigation.goBack()}>
     <Text style={styles.link}>Already have an account? Login</Text>
    </TouchableOpacity>
   </View>
  )}
 </Formik>
);

const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', padding: 20 },
 title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
 input: { borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 4 },
 error: { color: 'red', marginBottom: 5 },
 link: { color: 'blue', marginTop: 15, textAlign: 'center' }
});
