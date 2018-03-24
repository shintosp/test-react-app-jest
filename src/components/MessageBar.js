import React, {Component} from 'react'
import axios from 'axios'

class MessageBar extends Component {
    constructor(props) {
        super(props);
        this.state = {message: ''}
    }

    handleChange = () => {
        return (event) => {
            this.setState({...this.state, message: event.target.value});
        }
    };

    handleSubmit = (event) => {
        const config = { headers: {Authorization: this.props.auth}};
        axios.post(`${this.props.url}/message/${this.props.roomName}`, {message: this.state.message}, config)
            .then((data) => data)
            .catch(e => console.log(e));
        event.preventDefault();
    };

    render = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <input className="message" type="text" value={this.state.message}
                           onChange={this.handleChange()}/>
                <input className="send" type="submit" value="Send" onSubmit={this.handleSubmit}/>
            </form>
        )
    }
}

export default MessageBar
