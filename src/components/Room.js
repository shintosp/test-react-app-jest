import React from 'react';
import MessageList from './MessageList'
import MessageBar from './MessageBar'

const Room = ({messages, roomName, url, auth}) =>
    <div className="App">
        <p>Current Room: {roomName}</p>
        <MessageList messages={messages}/>
        <MessageBar roomName={roomName} url={url} auth={auth}/>
    </div>;

export default Room
