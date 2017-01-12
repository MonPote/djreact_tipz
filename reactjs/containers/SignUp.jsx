import React from 'react'
import 'whatwg-fetch'

export default class SignUp extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.submitUser = this.submitUser.bind(this);
    }

    submitUser() {
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
                        <div className="panel-heading"><span style={{fontSize: `24px`}}>Se connecter</span></div>
                        <div className="panel-body">
                            <div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Adresse Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"
                                           placeholder="Enter email" onChange={this.onChangeEmail}/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email
                                        with anyone
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
                                    <button className="btn btn-primary" onClick={this.submitUser}>S'inscrire</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}