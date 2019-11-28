import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css';
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
          Camera Registration
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
            placeholder="TODO: TBD"
            type="password"
          />
          <Button color="blue" fluid size="large">
            Register
          </Button>
          </Form>
        </Segment>
        <Message>
          Already with us? <a href="/">Log in</a>
        </Message>
        </Grid.Column>
      </Grid>
    )
  }
}