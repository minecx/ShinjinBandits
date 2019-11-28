import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Embed } from 'semantic-ui-react';

export default class Main extends React.Component {
  render() {
    return (
      <div style={{width: '75%', height: '90%', marginTop: '5%', marginLeft: '12.5%'}}>
        <Embed 
          id='O6Xo21L0ybE'
          placeholder='/images/image-16by9.png'
          source='youtube'
        />
      </div>
    )
  }
}