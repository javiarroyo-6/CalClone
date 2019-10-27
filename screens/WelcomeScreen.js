import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import colors from '../assets/colors';
import { Button } from 'react-native-paper';
import VideoBackground from '../components/VideoBackground';

import { Ionicons } from '@expo/vector-icons';

export default class WelcomeScreen extends Component {
  render() {
    const { width, height } = Dimensions.get('window');

    return (
      <View style={{ flex: 1, backgroundColor: '#ffff4d' }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image
            source={require('../assets/CarpeReal.png')}
            style={{ flex: 1, height, width, top: 30 }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Button
            style={{
              width: 200,
              backgroundColor: '#4d88ff',
              borderWidth: 0.5,
              borderColor: colors.borderColor,
              marginBottom: 10
            }}
            mode='contained'
            onPress={() => {
              this.props.navigation.navigate('LoginScreen');
            }}
          >
            Login
          </Button>
        </View>
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
