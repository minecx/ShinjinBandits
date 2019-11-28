import React from 'react';
import './App.css';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { Embed, Button } from 'semantic-ui-react';

export default class Main extends React.Component {
  render() {
    return (
      <Page>
        <Embed 
          id='O6Xo21L0ybE'
          placeholder='/images/image-16by9.png'
          source='youtube'
        />
        <Buttons>
          <Button>Up</Button>
          <Button>Down</Button>
          <Button>Left</Button>
          <Button>Right</Button>
          <Button>Refresh</Button>
        </Buttons>
        {/* onChange={window.location.reload(false)} : code snippet for refreshing page */}
      </Page>
    )
  }
}

const Page = styled.div `
  width: 75%;
  height: 90%;
  margin-top: 2.5%;
  margin-left: 12.5%;
`

const Buttons = styled.div `
  height: 90%;
  margin-top: 2.5%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`