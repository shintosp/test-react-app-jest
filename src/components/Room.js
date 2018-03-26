import React from 'react';
import MessageList from './MessageList'
import MessageBar from './MessageBar'
import { Media } from 'react-bootstrap';
import './../App.css';

const Room = ({messages, roomName, url, auth}) =>
    <div className="App">
        <div className="App-MessageList">
            <MessageList messages={messages}/>
        </div>
        <MessageBar roomName={roomName} url={url} auth={auth}/>
    </div>;

export default Room
