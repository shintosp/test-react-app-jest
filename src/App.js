import React, { Component } from 'react';
import './App.css';
import LoginBar from './components/LoginBar'
import Room from './components/Room'
import axios from 'axios'

const url = 'http://127.0.0.1:5555';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomName: 'room0',
            messages: [
                {sender: 'Saar', timestamp: '2-24-2018:1', message: 'Hello!'},
                {sender: 'Gigi', timestamp: '2-24-2018:2', message: 'Hi!'}
            ]};
    }

    onLogin = (authToken) => {
        this.setState({...this.state, authToken: authToken});
    };

    fetchMessages = () => {

    };

    render() {
    return (
      <div className="App">
          Rumble React!!!
          <LoginBar url={url} onLogin={this.onLogin}/>
          <Room messages={this.state.messages} roomName={this.state.roomName}/>
      </div>
    );
  }
}

export default App;
