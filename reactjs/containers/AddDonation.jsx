import React from 'react'

export default class AddDonation extends React.Component {
    render() {
        return (
            <div>
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
                <div className="col-lg-12 text-right">
                    <button className="btn btn-primary">Ajouter une contrepartie</button>
                </div>
            </div>
        );
    }
}