import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as firebase from 'firebase/app';
import 'firebase/auth';

class LoadingScreen extends Component {
  componentDidMount() {
    this.checkifLoggedIn();
  }

  checkifLoggedIn = () => {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // navigate to home screen
        this.props.navigation.navigate('HomeScreen', { user });
      } else {
        // navigate the user to the login screen
        this.props.navigation.navigate('LoginStackNavigator');
      }
    });
  };

  componentWillUnMount() {
    this.unsubscribe();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>LoadingScreen</Text>
      </View>
    );
  }
}
export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
