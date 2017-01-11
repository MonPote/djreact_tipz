import React from 'react'
import 'whatwg-fetch'

export default class CreateUser extends React.Component {
    submitUser() {
        const data = {
            userName: 'SimonW2',
            password: 'SimonMDP'
        };

        const option = {
            method: "POST",
            body: JSON.stringify(data),
            credentials: "same-origin"
        };

        let res = fetch('http://localhost:8000/api/signup/', option).then((response) => {
            console.log('response status : ', response.status);
            console.log('response text : ', response.statusText);
            // console.log('res : ', response.text());
            // response.status     //=> number 100–599
            // response.statusText //=> String
            // response.headers    //=> Headers
            // response.url        //=> String

            return response.text()
        }, function (error) {
            console.log(error.message);
            // error.message //=> String
        })
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                        else.
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button className="btn btn-primary" onClick={this.submitUser}>Submit</button>
            </div>

        );
    }
}