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
                    localStorage.setItem('userName', this.state.email);
                    localStorage.setItem('password', this.state.password);
                    browserHistory.push('/');
                } else {
                    // FIXME
                    console.log('user does not exist');
                }
            });
    }

    render() {
        return (
            <div className="container">
                <div style={{width: `50%`, marginLeft: `25%`}}>
                    <div className="panel panel-info">
                        <div className="panel-heading"><span style={{fontSize: `24px`}}>Se connecter</span></div>
                        <div className="panel-body">
                            <div>
                                <label htmlFor="exampleInputEmail1">Adresse Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp"
                                       placeholder="Enter email" onChange={this.onChangeEmail}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone
                                    else.
                                </small>
                            </div>
                            <div>
                                <label htmlFor="exampleInputPassword1">Mot de passe</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Password"
                                       onChange={this.onChangePassword}/>
                            </div>
                            <div>
                                <button className="btn btn-primary" onClick={this.signIn}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}