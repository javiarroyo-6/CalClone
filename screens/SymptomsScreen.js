import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SymptomsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Symptoms</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
