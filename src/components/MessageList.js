import React from 'react';

const MessageList = ({messages}) =>
    messages.map((message) =>
        <li key={message.timestamp}>[{message.sender}] {message.message}</li>);

export default MessageList
