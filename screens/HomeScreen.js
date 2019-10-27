import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Headline } from 'react-native-paper';
import PlanTrip from '../components/PlanTrip';
import SelfPlan from '../components/SelfPlan';
import { Ionicons } from '@expo/vector-icons';
import colors from '../assets/colors';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.header}>
          <Text style={styles.headerTitle}> Carpe Med </Text>
        </View>
        <ScrollView>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <View style={{ flex: 1, marginBottom: 10 }}>
              <PlanTrip />
            </View>
            <View style={{ flex: 1, marginBottom: 10 }}>
              <SelfPlan />
            </View>
            <View style={{ flex: 1 }}>
              <PlanTrip />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            height: 70,
            flexDirection: 'row'
          }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('HomeScreen');
              }}
            >
              <Ionicons name='ios-body' size={30} color='white' />
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('LocationScreen');
              }}
            >
              <Ionicons name='ios-medkit' size={30} color='white' />
            </TouchableOpacity>
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('ProfileScreen');
              }}
            >
              <Ionicons name='ios-person' size={30} color='white' />
            </TouchableOpacity>
          </View>
        </View>
        <SafeAreaView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E424D'
  },
  header: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 24,
    color: 'white'
  }
});
