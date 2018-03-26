import React, {Component} from 'react'
import axios from 'axios'
import { Button, Navbar } from 'react-bootstrap';
import './../App.css';

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
            <Navbar>
                <Navbar.Header>
                    <img className="App-logo" width={80} height={40} src="/images/logo.png"/>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form pullLeft>
                        <label>
                            Username:
                            <input name="username" type="text" value={this.state.username}
                                   onChange={this.handleChange()}/>
                        </label>
                        <label>
                            Password:
                            <input name="password" type="password" value={this.state.password}
                                   onChange={this.handleChange()}/>
                        </label>
                        <label>
                            Nickname:
                            <input name="nickname" type="text" value={this.state.nickname}
                                   onChange={this.handleChange()}/>
                        </label>
                        <Button className="App-Button" bsSize="small" type="submit" onClick={this.handleLogin}>Login</Button>
                        <Button className="App-Button" bsSize="small" type="submit" onClick={this.handleRegister}>Register</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default LoginBar
