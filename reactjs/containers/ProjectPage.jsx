import React from 'react'
import moment from 'moment'
import ProjectCompensation from '../components/ProjectCompensation'

export default class ProjectPage extends React.Component {

    constructor() {
        super();

        this.state = {
            project: {},
            compensation: []
        }
    }

    componentDidMount() {
        fetch(`/api/project/${this.props.params.id}`)
            .then(response => response.json())
            .then(json => this.setState({project: json}))
            .then(() => console.log(this.state.project));

        fetch(`/api/compensation/${this.props.params.id}`)
            .then(response => response.json())
            .then(json => this.setState({compensation: json}))
            .then(() => console.log(this.state.compensation));
    }

    render() {

        // FIXME Gestion de non présence de la data
        return (
            <div className="panel panel-info">
                <div className="panel-heading"><span
                    style={{fontSize: `24px`}}>{this.state.project.name} - crée le {moment(this.state.project.created_at).format('D MMM. YYYY')}</span></div>
                <div className="panel-body">
                    <div className="col-lg-6">
                        <div className='panel panel-info'>
                            <div className="panel-heading">Détail du projet</div>
                            <div className="panel-body">
                                <textarea className="form-control" value={this.state.project.description}/>
                                <div className="col-lg-12">
                                    <span>Par : Bobby Wallace</span>
                                </div>
                                <div className="col-lg-12">
                                    <span>Contact : Patrick.ear@epita.fr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='panel panel-info'>
                            <div className="panel-heading">Liste des compensations</div>
                            <div className="panel-body">
                                <ProjectCompensation compensation={{id: 1}}/>
                                <ProjectCompensation compensation={{id: 2}}/>
                                <ProjectCompensation compensation={{id: 3}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}