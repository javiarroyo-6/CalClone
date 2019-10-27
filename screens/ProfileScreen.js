import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Headline, Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'orange',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <View>
            <Avatar.Image
              size={190}
              source={require('../assets/randomdude.jpg')}
              style={{ bottom: 50 }}
            />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Headline>John Davidson </Headline>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}> 32, Male</Text>
          </View>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <ScrollView>
            <Card.Title
              title='Allergies & Reactions'
              subtitle='Allergic to raisins. '
              left={() => <Ionicons name='ios-pulse' size={24} />}
            />
            <Card.Title
              title='Medications'
              subtitle='Ritalin'
              left={() => <Ionicons name='ios-switch' size={24} />}
            />
            <Card.Title
              title='Blood Type'
              subtitle='B+'
              left={() => <Ionicons name='ios-water' size={24} />}
            />
            <Card.Title
              title='Height'
              subtitle="5'10  178cm"
              left={() => <Ionicons name='ios-man' size={24} />}
            />
            <Card.Title
              title='Weight'
              subtitle='160 lbs 72.6 kg'
              left={() => <Ionicons name='ios-fitness' size={24} />}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
