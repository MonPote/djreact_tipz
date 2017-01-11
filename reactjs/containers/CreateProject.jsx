import React from 'react'
import InfoProject from './InfoProject'
import AddDonation from './AddDonation'
import Donation from '../components/Donation'
import {browserHistory} from 'react-router'

export default class CreateProject extends React.Component {
    constructor() {
        super();

        this.state = {
            compensations: [],
            currentCompensation: {
                title: "",
                desc: "",
                amount: 0
            },
            projectDetails: {
                title: "",
                amount: "",
                description: "",
                idProject: 0
            }
        };
        

        this.addDonation = this.addDonation.bind(this);
        this.deleteDonation = this.deleteDonation.bind(this);
        this.modifyDonation = this.modifyDonation.bind(this);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);

        this.onChangeProjectTitle = this.onChangeProjectTitle.bind(this);
        this.onChangeProjectAmount = this.onChangeProjectAmount.bind(this);
        this.onChangeProjectDescription = this.onChangeProjectDescription.bind(this);
        this.onChangeProjectIdProject = this.onChangeProjectIdProject.bind(this);
    }

    componentWillMount() {
        if (localStorage.getItem('userName') === null) browserHistory.push('/');
    }

    deleteDonation(id) {
        this.state.compensations.splice(id, 1);
        this.setState({compensations: this.state.compensations});
    }

    modifyDonation(index, donation) {
        this.deleteDonation(index);
        console.log('modify Donation = ', donation);
        this.setState({currentCompensation: donation});
    }

    /**
     * Add donation function
     */
    addDonation() {
        const donation = this.state.currentCompensation;
        this.state.compensations.push(donation);

        const newcurrentCompensation = {
            title: "",
            desc: "",
            amount: 0
        };

        this.setState({compensations: this.state.compensations, currentCompensation: newcurrentCompensation});

    }

    onChangeProjectTitle(event) {
        this.state.projectDetails.title = event.target.value;
        this.setState({projectDetails: this.state.projectDetails});
    }

    onChangeProjectAmount(event) {
        this.state.projectDetails.amount = event.target.value;
        this.setState({projectDetails: this.state.projectDetails});
    }

    onChangeProjectDescription(event) {
        this.state.projectDetails.description = event.target.value;
        this.setState({projectDetails: this.state.projectDetails});
    }

    onChangeProjectIdProject(event) {
        this.state.projectDetails.idProject = event.target.value;
        this.setState({projectDetails: this.state.projectDetails});
    }

    onChangeTitle(event) {
        const newDonation = this.state.currentCompensation;
        newDonation.title = event.target.value;
        this.setState({currentCompensation: newDonation});
    }

    onChangeAmount(event) {
        const newDonation = this.state.currentCompensation;
        newDonation.amount = event.target.value;
        this.setState({currentCompensation: newDonation});
    }

    onChangeDesc(event) {
        const newDonation = this.state.currentCompensation;
        newDonation.desc = event.target.value;
        this.setState({currentCompensation: newDonation});
    }

    render() {
        return (
            <div className="col-lg-12">
                <div>
                    <h1>Mon projet</h1>
                </div>
                <div className="col-lg-6 text-center">
                    <InfoProject
                        onChangeTitle={this.onChangeProjectTitle}
                        onChangeAmount={this.onChangeProjectAmount}
                        onChangeDescription={this.onChangeProjectDescription}
                        onChangeIdProject={this.onChangeProjectIdProject}
                    />
                </div>
                <div className="col-lg-6 text-center">
                    <AddDonation
                        currentCompensation={this.state.currentCompensation}
                        addDonation={this.addDonation}
                        onChangeTitle={this.onChangeTitle}
                        onChangeAmount={this.onChangeAmount}
                        onChangeDesc={this.onChangeDesc}
                    />
                    {
                        this.state.compensations.map((donation, index) => {
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