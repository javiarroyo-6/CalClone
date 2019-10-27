import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

class CreateAccountScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput
            style={styles.textInput}
            placeholder='abc@example.com'
            placeholderTextColor='#b6b6b6'
            keyboardType='email-address'
          />
          <TextInput
            style={styles.textInput}
            placeholder='Enter Password'
            placeholderTextColor='#b6b6b6'
            secureTextEntry
          />
          <View style={{ alignItems: 'center' }}>
            <Button style={styles.loginButtons}>Login</Button>
            <Button style={styles.loginButtons}>Sign Up</Button>
          </View>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}
export default CreateAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textInput: {
    height: 50,
    borderWidth: 0.5,
    borderColor: 'black',
    marginHorizontal: 40,
    marginBottom: 10,
    color: 'black',
    paddingHorizontal: 10
  },
  loginButtons: {
    borderWidth: 0.5,
    backgroundColor: 'transparent',
    marginTop: 10,
    width: 200
  }
});
