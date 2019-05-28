import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC-dUXGQTS7Yi1K8QijQJIHg2Q2QO9fQgU",
      authDomain: "auth-38ef8.firebaseapp.com",
      databaseURL: "https://auth-38ef8.firebaseio.com",
      projectId: "auth-38ef8",
      storageBucket: "auth-38ef8.appspot.com",
      messagingSenderId: "412805865587",
      appId: "1:412805865587:web:1587dc8ad463fd63"
    });
  }
  
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
      </View>
    )
  }
}

export default App;