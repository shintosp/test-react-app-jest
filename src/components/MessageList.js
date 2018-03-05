import React from 'react';

const MessageList = ({messages}) =>
    messages.map((message) =>
        <li key={message[0]}>[{message[1]}] {message[2]}</li>);

export default MessageList
