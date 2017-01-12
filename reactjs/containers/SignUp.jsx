import React from 'react'
import 'whatwg-fetch'
import {browserHistory} from 'react-router';

export default class SignUp extends React.Component {

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
        this.submitUser = this.submitUser.bind(this);
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

    submitUser() {
        if (!this.checkInput()) {
            this.setState({error: true, errorMsg: `Un ou plusieurs de vos champs sont erronés`});
            return;
        } else {
            this.setState({error: false, errorMsg: ''});
        }

        const data = {
            userName: this.state.email,
            password: this.state.password
        };

        const option = {
            method: "POST",
            body: JSON.stringify(data),
            credentials: "same-origin"
        };


        fetch('/api/signup/', option).then((response) => {
            console.log('response status : ', response.status);
            console.log('response text : ', response.statusText);
            // FIXME Need checking
            // console.log('res : ', response.text());
            // response.status     //=> number 100–599
            // response.statusText //=> String
            // response.headers    //=> Headers
            // response.url        //=> String
            return response.text()
        }, function (error) {

            console.log(error.message);
        }).then((body) => {
            if (body === 'EXIST') {
                localStorage.setItem('userName', this.state.email);
                localStorage.setItem('password', this.state.password);
                browserHistory.push('/');
            } else {
                this.setState({error: true, errorMsg: `Une erreur s'est produite lors de votre inscription`});
            }
        })
    }

    onChangeEmail(event) {
        this.setState({email: event.target.value});
    }

    onChangePassword(event) {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div className="container">
                <div style={{width: `50%`, marginLeft: `25%`}}>
                    <div className="panel panel-info">
                        <div className="panel-heading"><span style={{fontSize: `24px`}}>Inscription</span></div>
                        <div className="panel-body">
                            <div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Adresse Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           placeholder="example@gmail.com" onChange={this.onChangeEmail} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Mot de passe</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                           placeholder="Mot de passe"
                                           onChange={this.onChangePassword}/>
                                </div>
                                <div className="text-right">
                                    <button className="btn btn-primary" onClick={this.submitUser}>S'inscrire</button>
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
            </div>
        );
    }
}