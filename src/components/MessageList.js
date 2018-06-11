import React, {Component} from 'react';
import { Media, Label } from 'react-bootstrap';
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

    formatDate = (dateString) => {
        if (dateString.startsWith("!")) // Represents Alert
        {
            return dateString.slice(1);
        }

        let date = new Date(dateString);
        let today = new Date();
        let newDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
        let toDate = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
        if (newDate === toDate)
        {
            //let hr = date.getHours();
            //let min = date.getMinutes();
            //let sec = date.getSeconds();
            newDate = "Today";
            //newDate = newDate + " at " + hr + ":" + min + ":" + sec;
        }

        return newDate;
    };

    render () {
        let messages = this.props.messages.map((message) =>
            <Media className="App-Message text-left" key={message[0]}>
                <Media.Body>
                    <Media.Heading>
                        {message[1] + " "}
                        <Label bsStyle={"info"}>{this.formatDate(message[0])}</Label>
                    </Media.Heading>
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
