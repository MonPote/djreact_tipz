import React from "react"
import {render} from "react-dom"
import {Router, Route, Link, browserHistory} from 'react-router'

import Navbar from "./containers/Navbar"
import ProjectList from "./containers/ProjectList"


class App extends React.Component {
    render() {
        let brand = "cocaff ";

        return (
            <div>
                <Navbar brand={brand} />
                <h1>Accueil</h1>
                <ProjectList />
            </div>
        )
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
        </Route>
    </Router>), document.getElementById('root'));
