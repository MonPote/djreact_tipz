import React from "react"
import {browserHistory} from 'react-router';

export default class HomeProject extends React.Component {

    render() {
        return (
            <div className="col-lg-4">
                <div className="panel panel-info">
                    <div className="panel-heading">Projet #{this.props.project.id} - {this.props.project.name}</div>
                    <div className="panel-body">
                        <span className="col-lg-12">Gain : 1652 € / mois</span>
                        <span className="col-lg-12">Crée le : 15.10.2016</span>
                        <textarea className="col-lg-12" rows="4" cols="50" defaultValue={this.props.project.description} />
                        <div className="col-lg-offset-9">
                            <button className="btn btn-primary"
                                    onClick={() => browserHistory.push(`/project/${this.props.project.id}`)}
                            >Participer !</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}