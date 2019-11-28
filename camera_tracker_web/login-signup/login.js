import React from 'react';
import './App.css';
import './node_modules/semantic-ui-css/semantic.min.css';
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
} from 'semantic-ui-react';

export default class Login extends React.Component {
  render() {
    return (
      <Grid centered columns={2} style={{marginTop: '5%'}}>
        <Grid.Column>
        <Header as="h2" textAlign="center">
            Login to your Camera
        </Header>
        <Segment>
            <Form size="large">
            <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="IP address"
            />
            <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password (optional)"
                type="password"
            />
            <Button color="blue" fluid size="large">
                Login
            </Button>
            </Form>
        </Segment>
        <Message>
            Not registered yet? <a href="//linkedin.com">Sign Up</a>
        </Message>
        </Grid.Column>
      </Grid>
    )
  }
}