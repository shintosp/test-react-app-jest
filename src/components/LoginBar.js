import React, {Component} from 'react'
import axios from 'axios'

class LoginBar extends Component {
    constructor(props) {
        super(props);
        this.state = {username: '', password: '', nickname: ''}
    }

    handleChange = () => {
        return (event) => {
            let key = event.target.getAttribute('name');
            let newState = {...this.state};
            newState[key] = event.target.value;
            this.setState(newState);
        }
    };

    handleLogin = (event) => {
        axios.post(this.props.url + '/active_user', {username: this.state.username, password: this.state.password})
            .then((data) => {this.props.onLogin(data.data.user_auth)})
            .catch(e => console.log(e));
        event.preventDefault();
    };

    handleRegister = (event) => {
        axios.post(this.props.url + '/user', {username: this.state.username, password: this.state.password, handle: this.state.nickname})
            .then((data) => this.handleLogin(event))
            .catch(e => console.log(e));
        event.preventDefault();
    };

    render = () => {
        return (
            <form>
                <label>
                    Username:
                    <input className="username" name="username" type="text" value={this.state.username}
                           onChange={this.handleChange()}/>
                </label>
                <label>
                    Password:
                    <input className="password" name="password" type="password" value={this.state.password}
                           onChange={this.handleChange()}/>
                </label>
                <label>
                    Nickname:
                    <input className="nickname" name="nickname" type="text" value={this.state.nickname}
                           onChange={this.handleChange()}/>
                </label>
                <button className="login" onClick={this.handleLogin}>Login</button>
                <button className="register" onClick={this.handleRegister}>Register</button>
            </form>
        )
    }
}

export default LoginBar
