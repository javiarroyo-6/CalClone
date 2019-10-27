import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Image,
  Dimensions
} from 'react-native';
import { Button, Divider } from 'react-native-paper';
import * as firebase from 'firebase/app';
import 'firebase/auth';

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isLoading: false
    };
  }

  onSignIn = async () => {
    if (this.state.email && this.state.password) {
      this.setState({ isLoading: true });
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password);
        if (response) {
          this.setState({ isLoading: false });
          this.props.navigation.navigate('LoadingScreen');
        }
      } catch (error) {
        this.setState({ isLoading: false });
        switch (error.code) {
          case 'auth/user-not-found':
            alert('A user with that email does not exist. Please sign up');
            break;
          case 'auth/invalid-email':
            alert('Please enter an email address');
        }
      }
    } else {
      alert('Please email and password.');
    }
  };

  onSignUp = async () => {
    if (this.state.email && this.state.password) {
      this.setState({ isLoading: true });
      try {
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.state.email,
            this.state.password
          );
        if (response) {
          this.setState({ isLoading: false });
        }
      } catch (error) {
        this.setState({ isLoading: false });
        if (error.code == 'auth/email-already-in-use') {
          alert('User already Exists. Try loggin in');
        }
      }
    } else {
      alert('Please enter email and password');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {this.state.isLoading ? (
            <View
              style={[
                StyleSheet.absoluteFill,
                {
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1000,
                  elevation: 1000
                }
              ]}
            >
              <ActivityIndicator size='large' color='black' />
            </View>
          ) : null}
          <TextInput
            style={styles.textInput}
            placeholder='abc@example.com'
            placeholderTextColor='#b6b6b6'
            keyboardType='email-address'
            onChangeText={email => this.setState({ email })}
          />
          <TextInput
            style={styles.textInput}
            placeholder='Enter Password'
            placeholderTextColor='#b6b6b6'
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
          <View style={{ alignItems: 'center' }}>
            <Button
              style={styles.loginButtons}
              onPress={this.onSignIn}
              mode='contained'
            >
              Login
            </Button>
            <Button
              onPress={this.onSignUp}
              style={styles.loginButtons}
              mode='contained'
            >
              Sign Up
            </Button>
          </View>
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Divider />
          <Image
            source={require('../assets/CarpeReal.png')}
            style={{ height: 300, width: 300 }}
          />
        </View>
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff4d'
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
    backgroundColor: '#4d88ff',
    marginTop: 10,
    width: 200
  }
});
