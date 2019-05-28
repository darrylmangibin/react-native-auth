import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import keys from '../config/keys';
import LoginForm from './components/LoginForm';

class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp(keys);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App;