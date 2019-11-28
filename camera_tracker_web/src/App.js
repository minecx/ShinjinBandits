// import React, { Component } from "react";
import React from "react";
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import {
//   Button,
//   Form,
//   Grid,
//   Header,
//   Message,
//   Segment,
// } from 'semantic-ui-react';
import Login from './login-signup/login.js';
import Signup from './login-signup/signup.js';

export default class App extends React.Component {
  renderLogin() {
    return (
      <Login />
    )
  }

  render() {
    return (
      <div>                                                        
        <BrowserRouter>                                                            
          <div>                                                              
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />         
            </Switch>                                                              
          </div>                                                                   
        </BrowserRouter>                                                           
      </div>
    )
  }
}
