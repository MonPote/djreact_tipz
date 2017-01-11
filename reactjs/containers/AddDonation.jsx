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
                        <input className="form-control" value={this.props.currentCompensation.title} onChange={this.props.onChangeTitle}/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="col-lg-6 text-center">
                        <span>Valeur (en € par mois)</span>
                    </div>
                    <div className="col-lg-6">
                        <input className="form-control" value={this.props.currentCompensation.amount} onChange={this.props.onChangeAmount}/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="col-lg-6 text-center">
                        <span>Description</span>
                    </div>
                    <div className="col-lg-6">
                        <textarea className="form-control" value={this.props.currentCompensation.desc} onChange={this.props.onChangeDesc} />
                    </div>
                </div>
                <div className="col-lg-12 text-right">
                    <button className="btn btn-primary" onClick={this.props.addDonation}>Ajouter une contrepartie</button>
                </div>
            </div>
        );
    }
}