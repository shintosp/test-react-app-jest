import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import './App.css';
import Room from './components/Room'
import axios from 'axios'
import RoomList from "./components/RoomList";
import Header from "./components/Header";

var timer = null;
const url = process.env.NODE_ENV === 'development' ? 'http://localhost:5555' : 'http://saarsayfan.pythonanywhere.com/';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            roomName: 'room0',
            messages: [['!ALERT', 'SYSTEM', 'Not Logged In']],
            error: '',
        };
    }

    onLogin = (authToken) => {
        this.setState({...this.state, authToken: authToken});
        this.getRooms();
    };

    onLogout = () => {
        clearInterval(timer);
        timer = null;
        this.setState({...this.state,
            authToken: '',
            rooms: [],
            messages: [['!ALERT', 'SYSTEM', 'Not Logged In']]}, function () {console.log(this.state)});
    };

    onRoomChange = (room) => {
        this.setState({...this.state, roomName: room});
    };
    
    onCreateRoom = (url, room) => {
        axios.post(`${url}/room/${room}`, {},
            {headers: {Authorization: this.state.authToken}})
            .then((data) => {
                this.getRooms();
            })
            .catch(e => this.onError(e.message));
    };

    onDeleteRoom = (url, room) => {
        axios.delete(`${url}/room/${room}`,
            {headers: {Authorization: this.state.authToken}})
            .then((data) => {
                let newRooms = this.state.rooms;
                let index = newRooms.indexOf(room);
                if (index !== -1) {
                    newRooms.splice(index, 1);
                }
                this.setState({...this.state, rooms: newRooms, roomName: 'room0'});
            })
            .catch(e => this.onError(e.message));
    };

    getRooms = () => {
        const config = {headers: {Authorization: this.state.authToken}};
        return axios.get(`${url}/rooms`, config)
            .then((data) => {
                this.setState({...this.state, rooms: data.data.result});
                this.joinRooms(data.data.result);
            })
            .catch(e => console.log(e));
    };

    joinRooms = (rooms) => {
        const config = {headers: {Authorization: this.state.authToken}};
        axios.post(`${url}/room_member/${rooms[0]}`, {}, config)
            .then((data) => data)
            .catch(e => console.log(e))
            .then(() => {if (timer === null){
                timer = setInterval(() => this.fetchMessages(), 500)}});
        for (let i = 1; i < this.state.rooms.length; i++) {
            axios.post(`${url}/room_member/${rooms[i]}`, {}, config)
                .then((data) => data)
                .catch(e => console.log(e));
        }
    };

    fetchMessages = () => {
        if (this.state.rooms !== [])
        {
            let room = this.state.roomName;
            const config = {headers: {Authorization: this.state.authToken}};
            const end = new Date().toISOString();
            let start = new Date();
            start.setDate(start.getDate() - 10000);
            start = start.toISOString();

            axios.get(`${url}/messages/${room}/${start}/${end}`, config)
                .then((response) => {
                    let messages = response.data.result;
                    if (messages.length !== this.state.messages.length) {
                        this.setState({...this.state, messages: response.data.result});
                    }
                })
                .catch(e => console.log(e));
        }
    };

    onError = (error) => {
        this.setState({...this.state, error: error}, function () {console.log(this.state.error)});
    };

    clearError = () => {
        this.setState({...this.state, error: ''})
    };

    render() {
        let roomList = <RoomList rooms={this.state.rooms}
                                 onRoomChange={this.onRoomChange}
                                 activeRoom={this.state.roomName}
                                 onDeleteRoom={this.onDeleteRoom}
                                 url={url}/>;
        const scrollStyle = {content: {'overflowY': 'hidden', 'overflowX': 'hidden'}};
        let vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        let height = vh - (this.state.error === '' ? 124 :  174);
        const heightStyle = {'height': `${height}px`};
        return (
            <div className="App">
                <Sidebar sidebar={roomList} docked={true} pullRight={true} styles={scrollStyle}>
                    <Header url={url}
                            onLogin={this.onLogin}
                            onCreateRoom={this.onCreateRoom}
                            onError={this.onError}
                            message={this.state.error}
                            clearError={this.clearError}
                            onLogout={this.onLogout}/>
                    <Room messages={this.state.messages}
                          roomName={this.state.roomName}
                          url={url}
                          auth={this.state.authToken}
                          heightStyle={heightStyle}/>
                </Sidebar>
            </div>
        )
    }
}


export default App;
