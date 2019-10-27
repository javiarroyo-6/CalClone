import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { List } from 'react-native-paper';
import Map from '../components/Map';
import { Ionicons } from '@expo/vector-icons';

class LocationScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Locations'
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, borderTopWidth: 0.5, borderColor: 'black' }}>
          <Map />
        </View>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <ScrollView>
            <List.Section>
              <List.Subheader>Nearest Hospitals </List.Subheader>
              <List.Item
                title='Sutter Urgent Care'
                left={() => (
                  <Image
                    style={{ height: 50, width: 50 }}
                    source={require('../assets/sutterUrgent.jpeg')}
                  />
                )}
              />
              <List.Item
                title='Highland Hospital'
                left={() => (
                  <Image
                    style={{ height: 50, width: 50 }}
                    source={require('../assets/sutterUrgent.jpeg')}
                  />
                )}
              />
              <List.Item
                title="UCSF Benioff Children's Hospital"
                left={() => (
                  <Image
                    style={{ height: 50, width: 50 }}
                    source={require('../assets/sutterUrgent.jpeg')}
                  />
                )}
              />
              <List.Item
                title='Carbon Health'
                left={() => (
                  <Image
                    style={{ height: 50, width: 50 }}
                    source={require('../assets/sutterUrgent.jpeg')}
                  />
                )}
              />
            </List.Section>
          </ScrollView>
        </View>
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
