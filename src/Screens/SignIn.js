import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppTextInput from '../component/AppTextInput';
import AppButton from '../component/AppButton';


export default function SignIn({ navigation, updateAuthState }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function signIn() {
    try {
      await Auth.signIn(username, password);
      console.log('✅ Success');
      updateAuthState('loggedIn');
    } catch (error) {
      console.log('❌ Error signing in...', error);
    }
  }
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign in to your account</Text>
        <AppTextInput
          value={username}
          onChangeText={text => setUsername(text)}
          leftIcon="account"
          placeholder="Enter username"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppTextInput
          value={password}
          onChangeText={text => setPassword(text)}
          leftIcon="lock"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />
        <AppButton title="Login" onPress={signIn} />
        <View style={styles.footerButtonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpButtonText}>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
      flex: 1,
      backgroundColor: 'white'
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      fontSize: 15,
      color: '#202020',
      fontWeight: '500',
      marginVertical: 15
    },
    footerButtonContainer: {
      marginVertical: 15,
      justifyContent: 'center',
      alignItems: 'center'
    },
    signUpButtonText: {
      color: '#AA7DDD',
      fontSize: 15,
      fontWeight: '600'
    }
  });