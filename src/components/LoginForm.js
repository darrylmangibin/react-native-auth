import React from 'react';

import { Button, Card, CardSection, Input } from './common';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
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

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;