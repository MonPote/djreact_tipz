import React from 'react'

export default class Compensation extends React.Component {
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">{this.props.compensation.title} - {this.props.compensation.amount} € / mois</div>
                <div className="panel-body">
                    <span className="col-lg-12">{this.props.compensation.description}</span>
                    <div className="col-lg-12">
                        <div className="col-lg-offset-5">
                            <button className="btn btn-primary"
                                    onClick={() => this.props.modifycompensation(this.props.index, this.props.compensation)}>
                                Modifier
                            </button>
                            <button className="btn btn-primary"
                                    onClick={() => this.props.deletecompensation(this.props.index)}>Supprimer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

