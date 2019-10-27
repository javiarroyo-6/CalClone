import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';

class VideoBackground extends Component {
  render() {
    const { width, height } = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}> React Native Video </Text>
        <Video
          source={require('../assets/Earth.mp4')}
          rate={1.0}
          volume={0}
          isMuted={false}
          resizeMode='cover'
          shouldPlay
          isLooping
          style={{ width, height }}
        />
      </View>
    );
  }
}
export default VideoBackground;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
