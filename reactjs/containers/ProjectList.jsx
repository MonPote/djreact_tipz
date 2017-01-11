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
        fetch('/api/projects/')
            .then(response => response.json())
            .then(json => {this.setState({projects: json})});
    }

    render() {
        return (
            <div>
                {this.state.projects.map(project => <HomeProject key={project.id} project={project} />)}
            </div>
        )
    }
}