import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ColorBox = () => {
  const [isBlue, setIsBlue] = useState(true);

  const handlePress = () => {
    setIsBlue(!isBlue);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.box, { backgroundColor: isBlue ? 'blue' : 'red' }]} />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Ubah Warna</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  box: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 10
  },
  button: {
    backgroundColor: '#333',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  }
});
