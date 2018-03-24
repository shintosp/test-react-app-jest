import React, {Component} from 'react'
import axios from 'axios'

class LoginBar extends Component {
    constructor(props) {
        super(props);
        this.state = {username: 'abc', password: 'abc', nickname: ''}
    }

    handleChange = (key) => {
        return (event) => {
            this.setState({...this.state, key: event.target.value});
        }
    };

    handleSubmit = (event) => {
        axios.post(this.props.url + '/active_user', {username: this.state.username, password: this.state.password})
            .then((data) => {this.props.onLogin(data.data.user_auth)})
            .catch(e => console.log(e));
        event.preventDefault();
    };

    render = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username:
                    <input className="username" type="text" value={this.state.username}
                           onChange={this.handleChange('username')}/>
                </label>
                <label>
                    Password:
                    <input className="password" type="password" value={this.state.password}
                           onChange={this.handleChange('password')}/>
                </label>
                <label>
                    Nickname:
                    <input className="nickname" type="text" value={this.state.nickname}
                           onChange={this.handleChange('nickname')}/>
                </label>
                <input className="login" type="submit" value="Login" onSubmit={this.handleSubmit}/>
                <input className="register" type="submit" value="Register"/>
            </form>
        )
    }
}

export default LoginBar
