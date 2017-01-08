import React from 'react'
import InfoProject from './InfoProject'
import AddDonation from './AddDonation'
import Donation from '../components/Donation'

export default class CreateProject extends React.Component {
    constructor() {
        super();

        this.state = {
            donations: [],
            currentDonation: {
                title: "",
                desc: "",
                amount: 0
            }
        };

        this.addDonation = this.addDonation.bind(this);
        this.deleteDonation = this.deleteDonation.bind(this);
        this.modifyDonation = this.modifyDonation.bind(this);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
    }

    deleteDonation(id) {
        this.state.donations.splice(id, 1);
        this.setState({donations: this.state.donations});
    }

    modifyDonation(index, donation) {
        this.deleteDonation(index);
        console.log('modify Donation = ', donation);
        this.setState({currentDonation: donation});
    }

    /**
     * Add donation function
     */
    addDonation() {
        const donation = this.state.currentDonation;
        this.state.donations.push(donation);

        const newcurrentDonation = {
            title: "",
            desc: "",
            amount: 0
        };

        this.setState({donations: this.state.donations, currentDonation: newcurrentDonation});

    }

    onChangeTitle(event) {
        const newDonation = this.state.currentDonation;
        newDonation.title = event.target.value;
        this.setState({currentDonation: newDonation});
    }

    onChangeAmount(event) {
        const newDonation = this.state.currentDonation;
        newDonation.amount = event.target.value;
        this.setState({currentDonation: newDonation});
    }

    onChangeDesc(event) {
        const newDonation = this.state.currentDonation;
        newDonation.desc = event.target.value;
        this.setState({currentDonation: newDonation});
    }

    render() {
        return (
            <div className="col-lg-12">
                <div>
                    <h1>Mon projet</h1>
                </div>
                <div className="col-lg-6 text-center">
                    <InfoProject />
                </div>
                <div className="col-lg-6 text-center">
                    <AddDonation
                        currentDonation={this.state.currentDonation}
                        addDonation={this.addDonation}
                        onChangeTitle={this.onChangeTitle}
                        onChangeAmount={this.onChangeAmount}
                        onChangeDesc={this.onChangeDesc}
                    />
                    {
                        this.state.donations.map((donation, index) => {
                            return (
                                <Donation
                                    key={index}
                                    index={index}
                                    donation={donation}
                                    modifyDonation={this.modifyDonation}
                                    deleteDonation={this.deleteDonation}
                                />
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}