import React from 'react';
import moment from 'moment';

export default class UserProject extends React.Component {
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
                    </div>
                </div>
            </div>
        );
    }
}