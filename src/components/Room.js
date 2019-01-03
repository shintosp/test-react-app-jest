import React from 'react';
import MessageList from './MessageList'
import MessageBar from './MessageBar'
import './../App.css';


const Room = ({messages, roomName, url, auth, heightStyle}) =>
    <div className="App App-Room">
        <div id="messageList" className="App-MessageList" style={heightStyle}>
            <MessageList messages={messages}/>
        </div>
        <MessageBar roomName={roomName} url={url} auth={auth}/>
    </div>;

export default Room;