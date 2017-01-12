import React from 'react';
import UserProject from '../components/UserProject'

export default class UserProjectsPage extends React.Component {

    constructor() {
        super();

        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        // fetch(`/api/project/${this.props.params.id}`)
        //     .then(response => response.json())
        //     .then(json => this.setState({project: json}))
        //     .then(() => console.log(this.state.project));
        //
        // fetch(`/api/compensation/${this.props.params.id}`)
        //     .then(response => response.json())
        //     .then(json => this.setState({compensation: json}))
        //     .then(() => console.log(this.state.compensation));

        const data = {
            userEmail: localStorage.getItem('userName')
        };

        const option = {
            method: 'POST',
            body: JSON.stringify(data),
        };

        fetch('/api/userProjects/', option)
            .then(response => response.json())
            .then(json => this.setState({projects: json}));
    }

    render() {
        return (
            <div>
                <div className="panel panel-info">
                    <div className="panel-heading"><span style={{fontSize: `24px`}}>Mes projets</span></div>
                    <div className="panel-body">
                        {
                            this.state.projects.map(project => <UserProject key={project.id} project={project}/>)
                        }
                        {/*<UserProject />*/}
                        {/**/}
                    </div>
                </div>
            </div>
        );
    }
}