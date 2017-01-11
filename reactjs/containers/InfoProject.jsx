import React from 'react'

export default class InfoProject extends React.Component {

    render() {
        return (
            <div>
                <div className="col-lg-12">
                    <span>Informations générales</span>
                </div>
                <div className="col-lg-12">
                    <div className="col-lg-6 text-center">
                        <span>Nom du projet</span>
                    </div>
                    <div className="col-lg-6">
                        <input className="form-control" onChange={this.props.onChangeProjectName} />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="col-lg-6 text-center">
                        <span>Description</span>
                    </div>
                    <div className="col-lg-6">
                        <textarea className="form-control" onChange={this.props.onChangeProjectDescription} />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="col-lg-6 text-center">
                        <span>Auteur</span>
                    </div>
                    <div className="col-lg-6">
                        <input className="form-control" onChange={this.props.onChangeProjectAuthor} />
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="col-lg-6 text-center">
                        <span>Contact</span>
                    </div>
                    <div className="col-lg-6">
                        <input className="form-control" onChange={this.props.onChangeProjectContact} />
                    </div>
                </div>
                <div className="col-lg-12 text-right">
                    <button className="btn btn-primary" onClick={this.props.createProject}>Enregistrer les modifications</button>
                </div>
            </div>
        );
    }
}