import React, {Component} from 'react'
import axios from 'axios'
import {Button, Navbar} from 'react-bootstrap';
import './../App.css';

class LoginBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            nickname: '',
            newRoom: '',
            loggedIn: false
        }
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
            .then((data) => {
                this.props.onLogin(data.data.user_auth)
            })
            .then(() => {
                this.setState({...this.state, loggedIn: true})
            })
            .catch(e => {
                this.props.onError(e.message);
                this.setState({...this.state, loggedIn: false})
            });
        event.preventDefault();
    };

    handleLogout = (event) => {
        this.props.onLogout();
        this.setState({...this.state, loggedIn: false});
        event.preventDefault();
    };

    handleRegister = (event) => {
        axios.post(this.props.url + '/user', {
            username: this.state.username,
            password: this.state.password,
            handle: this.state.nickname
        })
            .then((data) => this.handleLogin(event))
            .catch(e => this.props.onError(e.message));
        event.preventDefault();
    };

    handleCreateRoom = (event) => {
        this.props.onCreateRoom(this.props.url, this.state.newRoom);
    };

    render = () => {
        return (
            <Navbar>
                <Navbar.Header>
                    <img className="App-logo" width={80} height={40} src="/images/logo.png" alt="logo"/>
                    <Navbar.Toggle/>
                </Navbar.Header>
                {this.state.loggedIn ?
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <label>
                                New Room:
                                <input name="newRoom" type="text" value={this.state.newRoom}
                                       onChange={this.handleChange()}/>
                            </label>
                            <Button className="App-Button" bsSize="small" type="submit"
                                    onClick={(event) => this.handleCreateRoom(event)}>Create Room</Button>
                            <Button className="App-Button" bsSize="small" type="submit"
                                    onClick={this.handleLogout}>Logout</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                    :
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
                            <Button className="App-Button" bsSize="small" type="submit"
                                    onClick={this.handleLogin}>Login</Button>
                            <Button className="App-Button" bsSize="small" type="submit"
                                    onClick={this.handleRegister}>Register</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>}
            </Navbar>
        )
    }
}

export default LoginBar
