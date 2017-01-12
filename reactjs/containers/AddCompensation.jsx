import React from 'react'

export default class AddCompensation extends React.Component {
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    Contreparties
                </div>
                <div className="panel-body">
                    <div className="form-group">
                        <label>Titre</label>
                        <input className="form-control" value={this.props.currentCompensation.title}
                               onChange={this.props.onChangeTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Valeur (en € par mois)</label>
                        <input className="form-control" value={this.props.currentCompensation.amount} type="number"
                               onChange={this.props.onChangeAmount}/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" value={this.props.currentCompensation.description}
                                  onChange={this.props.onChangeDesc}/>
                    </div>
                    <div className="form-group text-right">
                        <button className="btn btn-primary" onClick={this.props.addDonation}
                        >Ajouter une contrepartie</button>
                    </div>
                </div>
            </div>
        );
    }
}