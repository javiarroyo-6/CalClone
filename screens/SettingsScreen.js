import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import * as firebase from 'firebase/app';
import 'firebase/auth';

class SettingsScreen extends Component {
  signOut = async () => {
    try {
      await firebase.auth().signOut();
      this.props.navigation.navigate('WelcomeScreen');
    } catch (error) {
      alert('Cant sign out ');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button mode='contained' color='red' onPress={this.signOut}>
          Log Out
        </Button>
      </View>
    );
  }
}
export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
