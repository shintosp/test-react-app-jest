import React from 'react';
import { Media, Badge } from 'react-bootstrap';
import './../App.css';

const MessageList = ({messages}) =>
    messages.map((message) =>
        <Media className="App-Message text-left" key={message[0]}>
            <Media.Body>
                <Media.Heading>{message[1]} <Badge>{message[0]}</Badge></Media.Heading>
                <li>{message[2]}</li>
            </Media.Body>
        </Media>);

export default MessageList
