import React from "react"
import {render} from "react-dom"
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'

import NavBar from './containers/Navbar'
import HomeLayout from './containers/HomeLayout'
import CreateProject from './containers/CreateProject'
import CreateUser from './containers/CreateUser'

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

render(
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={HomeLayout} />
            <Route path='addedit' component={CreateProject} />
            <Route path='createUser' component={CreateUser} />
            <Route path='createProject' component={CreateProject} />
        </Route>
    </Router>,
    document.getElementById('root')
);
