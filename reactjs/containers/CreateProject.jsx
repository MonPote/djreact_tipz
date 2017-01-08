import React from 'react'
import InfoProject from './InfoProject'
import AddDonation from './AddDonation'
import Donation from '../components/Donation'

export default class CreateProject extends React.Component {
    constructor() {
        super();

        this.state = {
            donations: []
        };

        // [
        //     {
        //         title: "JE suis une donation",
        //         amount: 12,
        //         desc: "ça doit être une string"
        //     }, {
        //         title: "JE suis une donation",
        //         amount: 12,
        //         desc: "ça doit être une string"
        //     }
        // ]

        this.addDonation = this.addDonation.bind(this);
        this.deleteDonation = this.deleteDonation.bind(this);
    }

    addDonation(donation) {
        console.log('inside create project = ', donation);

        this.state.donations.push(donation);

        this.setState({donations: this.state.donations});

        // console.log("j'ajoute un don");
        // this.state.donations.push(donation);
    }

    deleteDonation(id) {
        this.state.donations.splice(id, 1)
        this.setState({donations: this.state.donations})
        console.log('Delete key', id)
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
                    <AddDonation addDonation={this.addDonation} />
                    {
                        this.state.donations.map((donation, index) => {
                            return (
                                <Donation
                                    key={index}
                                    index={index}
                                    donation={donation}
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