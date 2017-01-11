import React from 'react';

import HomeProject from "../components/HomeProject";

export default class ProjectList extends React.Component {

    constructor() {
        super();

        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        // recuperer des views la liste des projets en json
        // transporme en list d'objet

        fetch('/api/display/')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({projects: json})
            });
    }

    render() {
        return (
            <div>
                {this.state.projects.map(project => <HomeProject key={project.id} project={project} />)}
            </div>
        )
    }
}