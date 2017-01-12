import React from 'react';


export default class UserProject extends React.Component {

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
    }

    render() {
        return (
            <div className="col-lg-4">
                <div className="panel panel-info">
                    <div className="panel-heading">Projet #{this.props.project.id} - {this.props.project.name}</div>
                    <div className="panel-body">
                        <span className="col-lg-12">Gain : {this.props.project.sumDonation} € / mois</span>
                        <span
                            className="col-lg-12">Crée le : {moment(this.props.project.created_at).format('DD/MM/YYYY')}</span>
                        <div>
                            <textarea className="col-lg-12" rows="8" cols="50"
                                      defaultValue={this.props.project.description}/>
                        </div>
                        <div className="text-right">
                            <br />
                            <button className="btn btn-primary"
                                    onClick={() => browserHistory.push(`/project/${this.props.project.id}`)}
                            >Participer !
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}