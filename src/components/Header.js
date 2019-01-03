import React from 'react';
import LoginBar from './LoginBar'
import ErrorBar from './ErrorBar'
import './../App.css';


const Header = ({url, onLogin, onCreateRoom, onError, message, clearError, onLogout}) =>
    <div className='App-header'>
        <LoginBar url={url}
                  onLogin={onLogin}
                  onCreateRoom={onCreateRoom}
                  onError={onError}
                  onLogout={onLogout}/>
        <ErrorBar message={message} clearError={clearError}/>
    </div>;

export default Header;
