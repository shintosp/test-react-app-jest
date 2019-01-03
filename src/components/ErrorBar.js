import React from 'react'
import './../App.css';
import {Button} from "react-bootstrap";

const ErrorBar = ({message, clearError}) =>
    {
        let content =
            <div className={"App-ErrorBar"}>
                <p className="App-ErrorMessage">{message}
                    <Button bsStyle="danger"
                            bsSize="xsmall"
                            type="submit"
                            onClick={clearError}
                            style={{float: 'right'}}>X</Button>
                </p>
            </div>;

        return message ? content  : null
    };

export default ErrorBar;
