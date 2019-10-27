import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen';
import LocationScreen from './screens/LocationScreen';
import LoadingScreen from './screens/LoadingScreen';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerComponent from './components/CustomDrawerComponent';
import * as firebase from 'firebase/app';
import { firebaseConfig } from './config/config';

class App extends Component {
  constructor() {
    super();
    this.initializefirebase();
  }

  initializefirebase = () => {
    firebase.initializeApp(firebaseConfig);
  };

  render() {
    return <AppContainer />;
  }
}

const LoginStackNavigator = createStackNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
        header: null
      }
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        headerTitle: 'Login',
        headerStyle: {
          backgroundColor: '#ffff4d'
        }
      }
    }
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'white'
      }
    }
  }
);

const HomeStackNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  LocationScreen: {
    screen: LocationScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#2E424D'
      }
    }
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: 'Profile',
      headerStyle: {
        backgroundColor: 'orange'
      }
    }
  }
});

const AppDrawerNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeStackNavigator,
      navigationOptions: {
        title: 'Body',
        drawerIcon: () => <Ionicons name='ios-body' size={24} />
      }
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
        drawerIcon: () => <Ionicons name='ios-settings' size={24} />
      }
    }
  },
  {
    contentComponent: CustomDrawerComponent
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen,
  LoginStackNavigator,
  AppDrawerNavigator
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
