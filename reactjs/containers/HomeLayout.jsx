import React from 'react'

import ProjectList from "./ProjectList"

export default class HomeLayout extends React.Component {
    render() {
        console.log('user = ', localStorage.getItem('user'));
        return (
            <div>
                <h1>Accueil</h1>
                <ProjectList />
            </div>
        );
    }
}