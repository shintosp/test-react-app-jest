import React from 'react';
import LoginBar from './LoginBar'
import ErrorBar from './ErrorBar'
import './../App.css';


const Header = ({url, onLogin, onCreateRoom, onError, message}) =>
    <div className='App-header'>
        <LoginBar url={url} onLogin={onLogin} onCreateRoom={onCreateRoom} onError={onError}/>
        <ErrorBar message={message}/>
    </div>;

export default Header;
