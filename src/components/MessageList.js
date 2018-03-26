import React from 'react';
import { Media, Badge } from 'react-bootstrap';
import './../App.css';

const MessageList = ({messages}) =>
    messages.map((message) =>
        <Media className="App-Message text-left">
            <Media.Body>
                <Media.Heading>{message[1]} <Badge>{message[0]}</Badge></Media.Heading>
                <li key={message[0]}>{message[2]}</li>
            </Media.Body>
        </Media>);

export default MessageList
