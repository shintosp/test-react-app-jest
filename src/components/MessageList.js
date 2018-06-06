import React, {Component} from 'react';
import { Media, Badge } from 'react-bootstrap';
import './../App.css';

class MessageList extends Component {
    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    };

    shouldComponentUpdate(nextProps)
    {
        return this.props.messages.length !== nextProps.messages.length;
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render () {
        let messages = this.props.messages.map((message) =>
            <Media className="App-Message text-left" key={message[0]}>
                <Media.Body>
                    <Media.Heading>{message[1]} <Badge>{message[0]}</Badge></Media.Heading>
                    <li>{message[2]}</li>
                </Media.Body>
            </Media>);
        return(
            <div>
                {messages}
                <div style={{ float:"left", clear: "both" }}
                     ref={(el) => { this.messagesEnd = el; }}>
                </div>
            </div>
        );
    }
}

export default MessageList
