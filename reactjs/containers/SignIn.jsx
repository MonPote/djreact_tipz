import React from 'react'
import {browserHistory} from 'react-router';
import 'whatwg-fetch'

export default class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            error: false,
            errorMsg: ''
        };

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.signIn = this.signIn.bind(this);

        this.checkInput = this.checkInput.bind(this);
    }

    onChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    onChangePassword(event) {
        this.setState({password: event.target.value});
    }

    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    checkInput() {
        if (!this.validateEmail(this.state.email)) {
            return false;
        }

        return !(this.state.password.length < 6 || this.state.password.length > 32);
    }

    signIn() {
        if (!this.checkInput()) {
            this.setState({error: true, errorMsg: `Un ou plusieurs de vos champs sont erronés`});
            return;
        }

        this.setState({error: false, errorMsg: ''});

        const data = {
            userName: this.state.email,
            password: this.state.password
        };

        const option = {
            method: "POST",
            body: JSON.stringify(data),
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
                    this.setState({error: true, errorMsg: `Les identifiants ne sont pas correctes`});
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
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Adresse Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       placeholder="example@gmail.com" onChange={this.onChangeEmail}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                    anyone
                                    else.
                                </small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Mot de passe</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                       placeholder="Password"
                                       onChange={this.onChangePassword}/>
                            </div>
                            <div className="text-right">
                                <button className="btn btn-primary" onClick={this.signIn}>Se connecter</button>
                            </div>
                            <br />
                            {
                                !this.state.error
                                    ? null
                                    : <div className="alert alert-danger">
                                        <strong>Erreur : </strong>{this.state.errorMsg}
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}