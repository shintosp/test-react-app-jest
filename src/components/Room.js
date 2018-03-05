import React from 'react';
import MessageList from './MessageList'

const Room = ({messages, roomName}) =>
    <div className="App">
        <p>Current Room: {roomName}</p>
        <MessageList messages={messages}/>
    </div>;

export default Room
