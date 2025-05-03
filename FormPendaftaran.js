import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FormPendaftaran = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [telepon, setTelepon] = useState('');
  const [hasil, setHasil] = useState(null);

  const handleSubmit = () => {
    setHasil({ nama, email, telepon });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulir Pendaftaran</Text>

      <TextInput
        placeholder="Nama Lengkap"
        value={nama}
        onChangeText={setNama}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="No Telepon"
        value={telepon}
        onChangeText={setTelepon}
        style={styles.input}
        keyboardType="phone-pad"
      />

      <Button title="Submit" onPress={handleSubmit} />

      {hasil && (
        <View style={styles.hasil}>
          <Text>Nama: {hasil.nama}</Text>
          <Text>Email: {hasil.email}</Text>
          <Text>No Telp: {hasil.telepon}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  hasil: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e6f7ff',
    borderRadius: 5,
  },
});

export default FormPendaftaran;
