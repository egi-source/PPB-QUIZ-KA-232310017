import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileRFC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Function Component</Text>
      <Image source={require('./assets/avatar.png')} style={styles.avatar} />
      <Text>Nama: Ambatukam</Text>
      <Text>NPM: 23231001</Text>
      <Text>Jurusan: Teknik Informatika</Text>
      <Text>Hobi: Membaca dan mengoding</Text>
    </View>
  );
};

export default ProfileRFC;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#e0f7fa',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  }
});
