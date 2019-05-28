import React from 'react';
import { Text, StyleSheet } from 'react-native';
import firebase from 'firebase';

import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    };
    this.onButtonPress = this.onButtonPress.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail)
      })
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication failed.',
      loading: false
    })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    })
  }

  renderButton() {
    if(this.state.loading) {
      return (
        <Spinner 
          size="small"
        />
      )
    }
    return (
      <Button
        onPress={this.onButtonPress}
      >
        Login
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email" 
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />
        </CardSection>
          
        <CardSection>
          <Input
            secureTextEntry={true} 
            placeholder="password"
            label="password"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>{this.state.error}</Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
})

export default LoginForm;