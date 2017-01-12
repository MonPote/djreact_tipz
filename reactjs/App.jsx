import React from "react"
import {render} from "react-dom"
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router'

import NavBar from './containers/Navbar'
import HomeLayout from './containers/HomeLayout'
import CreateProject from './containers/CreateProject'
import SignUp from './containers/SignUp'
import SignIn from './containers/SignIn'
import ProjectPage from './containers/ProjectPage'
import CompensationPage from './containers/CompensationPage'

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
            <Route path='signUp' component={SignUp} />
            <Route path='signIn' component={SignIn} />
            <Route path='createProject' component={CreateProject} />
            <Route path='project/:id' component={ProjectPage} />
            <Route path='compensation/:id' component={CompensationPage} />
        </Route>
    </Router>,
    document.getElementById('root')
);
