import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class ProfileRCC extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Class Component</Text>
        <Image source={require('./assets/avatar.png')} style={styles.avatar} />
        <Text>Nama: Amabalabu</Text>
        <Text>NPM: 987654321</Text>
        <Text>Jurusan: Sistem Informasi</Text>
        <Text>Hobi: Bermain Musik</Text>
      </View>
    );
  }
}

export default ProfileRCC;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffe0b2',
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
