import React from 'react'
import ProjectCompensation from '../components/ProjectCompensation'

export default class ProjectPage extends React.Component {

    constructor() {
        super();

        this.state = {
            compensation: []
        }
    }

    componentDidMount() {
        // fetch('/api/projects/')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({projects: json})
        //     });

// /api/compensation/23
        fetch(`/api/compensation/${this.props.params.id}`)
            .then(response => response.json())
            .then(json => this.setState({compensation: json}))
            .then(() => console.log(this.state.compensation));
        // fetch(`/api/compensation/${this.props.param.id}`)
        // fetch compensation liee au projet

    }

    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading"><span
                    style={{fontSize: `24px`}}>Un super project - crée le 2 oct. 2016</span></div>
                <div className="panel-body">
                    <div className="col-lg-6">
                        <div className='panel panel-info'>
                            <div className="panel-heading">Détail du projet</div>
                            <div className="panel-body">
                                <textarea className="form-control" onChange={this.props.onChangeProjectDescription}/>
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