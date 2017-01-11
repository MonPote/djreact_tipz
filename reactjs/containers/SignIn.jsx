import React from 'react'
import {browserHistory} from 'react-router';
import 'whatwg-fetch'

export default class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    onChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    onChangePassword(event) {
        this.setState({password: event.target.value});
    }

    signIn() {
        const data = {
            userName: this.state.email,
            password: this.state.password
        };

        const option = {
            method: "POST",
            body: JSON.stringify(data),
            credentials: "same-origin"
        };

        fetch('/api/signin/', option)
            .then((response) => {
                return response.text()
            })
            .then((body) => {
                if (body === 'EXIST') {
                    localStorage.setItem('user', this.state.email);
                    localStorage.setItem('password', this.state.password);
                    browserHistory.push('/');
                } else {
                    console.log('user does not exist');
                }
            });
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email" onChange={this.onChangeEmail}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                           onChange={this.onChangePassword}/>
                </div>
                <button className="btn btn-primary" onClick={this.signIn}>Submit</button>
            </div>
        );
    }
}