import React from 'react'
import {browserHistory} from 'react-router'

export default class ProjectCompensation extends React.Component {
    render() {
        return (
            <div className='panel panel-info'>
                <div className="panel-heading">{this.props.compensation.title} - {this.props.compensation.amount}€ / mois</div>
                <div className="panel-body">
                    <div className="col-lg-12">
                        <span>{this.props.compensation.description}</span>
                    </div>
                    <button className="btn btn-info"
                            onClick={() =>
                                browserHistory.push(`/compensation/${this.props.compensation.id}`)}
                    >Sélectionner</button>
                </div>
            </div>
        );
    }
}

