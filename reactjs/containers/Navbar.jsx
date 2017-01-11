import React from 'react';

import {Link} from 'react-router'

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/">Accueil</Link></li>
                            <li><Link to='createProject'>Créer mon projet</Link></li>
                            <li><Link to='test'>Les meilleurs projets</Link></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="signIn">Connexion</Link></li>
                            <li><Link to="signUp">Inscription</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}