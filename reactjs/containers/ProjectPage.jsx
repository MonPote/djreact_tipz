import React from 'react'
import moment from 'moment'
import {browserHistory} from 'react-router'

import ProjectCompensation from '../components/ProjectCompensation'


export default class ProjectPage extends React.Component {

    constructor() {
        super();

        this.state = {
            project: {},
            compensation: [],
            error: false,
            errorMsg: ''
        };

        this.triggerError = this.triggerError.bind(this);
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

    triggerError(compensationId) {
        if (localStorage.getItem('userName') === null) {
            this.setState({error: true, errorMsg: 'Vous devez vous connecter pour pouvoir donner !'})
        } else {
            this.setState({error: false, errorMsg: ''});
            browserHistory.push(`/compensation/${compensationId}`)
        }
    }

    render() {
        // FIXME Gestion de non présence de la data
        return (
            <div className="panel panel-info">
                <div className="panel-heading"><span
                    style={{fontSize: `24px`}}>{this.state.project.name}
                    - crée le {moment(this.state.project.created_at).format('D MMM. YYYY')}</span></div>
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
                                {
                                    this.state.compensation.map(compensation => {
                                        return (
                                            <ProjectCompensation
                                                key={compensation.id}
                                                compensation={compensation}
                                                triggerError={this.triggerError}
                                            />
                                        );
                                    })
                                }
                                {
                                    !this.state.error
                                        ? null
                                        : <div className="alert alert-danger">
                                            <strong>Erreur : </strong>{this.state.errorMsg}
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}