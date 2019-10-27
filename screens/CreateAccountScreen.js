import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class CreateAccountScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CreateAccountScreen</Text>
      </View>
    );
  }
}
export default CreateAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
