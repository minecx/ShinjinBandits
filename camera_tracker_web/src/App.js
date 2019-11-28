// import React, { Component } from "react";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './login-signup/login.js';
import Signup from './login-signup/signup.js';
import Main from './main.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/main" component={Main} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
