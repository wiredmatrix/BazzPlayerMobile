import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '80%',
    height: 40,
    backgroundColor: '#E080B4',
    elevation: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'uppercase',
    marginVertical: -5
  }
});