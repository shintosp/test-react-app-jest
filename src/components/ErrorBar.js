import React from 'react'
import './../App.css';

const ErrorBar = ({message}) =>

    {
        let content = <div className={"App-ErrorBar"}>
                    <p className="App-ErrorMessage">{message}</p>
                  </div>;

        return message ? content  : null };

export default ErrorBar;
