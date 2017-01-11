import React from 'react';

import {Link} from 'react-router'

export default class Navbar extends React.Component {

    disconnect() {
        localStorage.clear();
    }

    displayAuth() {
        let header;
        if (localStorage.getItem('userName') === null) {
            header = (
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="signIn">Connexion</Link></li>
                    <li><Link to="signUp">Inscription</Link></li>
                </ul>
            );
        } else {
            header = (
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/" onClick={this.disconnect}>Deconnexion</Link></li>
                </ul>
            );
        }
        return header;
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/">Accueil</Link></li>
                            {localStorage.getItem('userName') === null
                                ? null
                                : <li><Link to='createProject'>Créer mon projet</Link></li>
                            }
                            <li><Link to='test'>Les meilleurs projets</Link></li>
                        </ul>

                        {this.displayAuth()}
                    </div>
                </div>
            </nav>
        )
    }
}