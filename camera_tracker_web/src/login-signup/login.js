import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';

export default class Login extends React.Component {
  state = {
    IP: "", 
    pwd: "",
  }

  signIn() {
    if (this.state.IP.length === 0) {
      alert("Please fill out all required fields. ")
    }
  }

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
            onChange={(e) => {
              this.setState({IP: e.target.value})
              console.log(this.state.IP)
            }}
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password (optional)"
            type="password"
            onChange={(e) => {
              this.setState({pwd: e.target.value})
            }}
          />
          <Button color="blue" fluid size="large" onClick={this.signIn()}>
            Login
          </Button>
          </Form>
        </Segment>
        <Message>
          Not registered yet? <a href="/signup">Sign Up</a>
        </Message>
        </Grid.Column>
      </Grid>
    )
  }
}