import React, { Component } from 'react';
import './App.css';
import LoginBar from './components/LoginBar'
import Room from './components/Room'
import axios from 'axios'

const url = 'http://saarsayfan.pythonanywhere.com/';

class App extends Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            roomName: 'room0',
            messages: [['2-24-2018:2', 'SYSTEM', 'Not Logged In']]};
    }

    onLogin = (authToken) => {
        this.setState({...this.state, authToken: authToken});
        this.joinRoom()
            .then(this.timer = setInterval(() => this.fetchMessages(), 1000));
    };

    joinRoom = () => {
        const config = { headers: {Authorization: this.state.authToken}};
        return axios.post(`${url}/room_member/${this.state.roomName}`, {}, config)
                    .then((data) => data)
                    .catch(e => console.log(e));
    };

    fetchMessages = () => {
        const config = { headers: {Authorization: this.state.authToken}};
        const end = new Date().toISOString();
        let start = new Date();
        start.setDate(start.getDate() - 10000);
        start = start.toISOString();

        axios.get(`${url}/messages/${this.state.roomName}/${start}/${end}`, config)
            .then((response) => {
                this.setState({...this.state, messages: response.data.result})})
            .catch(e => console.log(e));
    };

    render() {
    return (
      <div className="App">
          UPDATED
          <LoginBar url={url} onLogin={this.onLogin}/>
          <Room messages={this.state.messages} roomName={this.state.roomName} url={url} auth={this.state.authToken}/>
      </div>
    );
  }
}

export default App;
