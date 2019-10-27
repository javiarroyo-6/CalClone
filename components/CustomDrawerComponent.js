import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerItems } from 'react-navigation';

class CustomDrawerComponent extends Component {
  render() {
    return (
      <ScrollView>
        <SafeAreaView style={{ backgroundColor: 'white' }} />
        <View
          style={{
            height: 150,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Ionicons name='ios-heart' size={100} color='red' />
        </View>
        <DrawerItems {...this.props} />
      </ScrollView>
    );
  }
}
export default CustomDrawerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
