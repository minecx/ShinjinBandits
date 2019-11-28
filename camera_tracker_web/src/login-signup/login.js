import React from 'react';
import '../App.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';

export default class Login extends React.Component {
  state = {
    IP: "", 
    pwd: "",
  }

  ping(ip) {
    try {
      var ws = new WebSocket("ws://" + ip);
    }
    catch (SyntaxError) {
      alert("Invalid IP Address. ");
      return false;
    }
    ws.onerror = function () {
      console.log(ip + " is good. ");
      return true;
    };
    setTimeout(function () {
      if (ws != null) {
        ws.close();
        ws = null;
        console.log(ip + " is bad. ");
        return false;
      }
    }, 2000);
  }
  
  signIn() {
    if (this.state.IP.length !== 0) {
      this.ping(this.state.IP);
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