import React from 'react'

export default class AddDonation extends React.Component {
    constructor() {
        super();

        this.state = {
            id: 0,
            title: "",
            desc: "",
            amount: 0
        };

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);

        this.addLocalDonation = this.addLocalDonation.bind(this);
    }

    addLocalDonation() {
        const donation = this.state;
        this.props.addDonation(donation);
        this.setState({id: ++this.state.id})
    }

    onChangeTitle(event) {
        this.setState({title: event.target.value});
    }

    onChangeAmount(event) {
        this.setState({amount: event.target.value});
    }

    onChangeDesc(event) {
        this.setState({desc: event.target.value});
    }


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
                        <input className="form-control" onChange={this.onChangeTitle}/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="col-lg-6 text-center">
                        <span>Valeur (en € par mois)</span>
                    </div>
                    <div className="col-lg-6">
                        <input className="form-control" onChange={this.onChangeAmount}/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="col-lg-6 text-center">
                        <span>Description</span>
                    </div>
                    <div className="col-lg-6">
                        <textarea className="form-control" onChange={this.onChangeDesc}></textarea>
                    </div>
                </div>
                <div className="col-lg-12 text-right">
                    <button className="btn btn-primary" onClick={this.addLocalDonation}>Ajouter une contrepartie</button>
                </div>
            </div>
        );
    }
}