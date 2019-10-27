import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
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
        <View style={{ flex: 1 }} />
        <View
          style={{
            height: 70,
            borderTopWidth: 0.5,
            borderTopColor: colors.borderColor,
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
              <Ionicons name='ios-body' size={30} />
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
              <Ionicons name='ios-medkit' size={30} />
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
              <Ionicons name='ios-person' size={30} />
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
    flex: 1
  },
  header: {
    height: 70,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 24
  }
});
