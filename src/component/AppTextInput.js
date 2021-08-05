import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AppTextInput({ leftIcon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {leftIcon && (
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          color="#6e6869"
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.input}
        placeholderTextColor="#6e6869"
        {...otherProps}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    borderRadius: 25,
    flexDirection: 'row',
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10
  },
  input: {
    width: '80%',
    height: 35,
    fontSize: 15,
    color: '#101010',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 5
    
    
  }
});