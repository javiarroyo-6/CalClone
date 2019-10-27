import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          mode='contained'
          color='red'
          onPress={() => this.props.navigation.navigate('WelcomeScreen')}
        >
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
