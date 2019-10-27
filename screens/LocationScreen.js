import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

class LocationScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: 400,
            width: 400,
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}
        >
          <MapView
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
        </View>
        <View style={{ flex: 1, backgroundColor: 'red' }} />
      </View>
    );
  }
}
export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
