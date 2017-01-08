import React from 'react'


export default class CreateProject extends React.Component {
    render() {
        return (
            <div className="col-lg-12">
                <div>
                    <h1>Mon projet</h1>
                </div>
                <div className="col-lg-6 text-center">
                    <div className="col-lg-12">
                        <span>Informations générales</span>
                    </div>
                    <div className="col-lg-12">
                        <div className="col-lg-6 text-center">
                            <span>Nom du projet</span>
                        </div>
                        <div className="col-lg-6">
                            <input className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="col-lg-6 text-center">
                            <span>Description</span>
                        </div>
                        <div className="col-lg-6">
                            <textarea className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="col-lg-6 text-center">
                            <span>Auteur</span>
                        </div>
                        <div className="col-lg-6">
                            <input className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="col-lg-6 text-center">
                            <span>Contact</span>
                        </div>
                        <div className="col-lg-6">
                            <input className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-12 text-right">
                        <button>Enregistrer les modifications</button>
                    </div>
                </div>
                <div className="col-lg-6 text-center">
                    <div className="col-lg-12">
                        <span>Contreparties</span>
                    </div>
                    <div className="col-lg-12">
                        <div className="col-lg-6 text-center">
                            <span>Titre</span>
                        </div>
                        <div className="col-lg-6">
                            <input className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="col-lg-6 text-center">
                            <span>Valeur (en € par mois)</span>
                        </div>
                        <div className="col-lg-6">
                            <input className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="col-lg-6 text-center">
                            <span>Description</span>
                        </div>
                        <div className="col-lg-6">
                            <textarea className="form-control"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}