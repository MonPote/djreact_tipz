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
                description: "",
                amount: 0
            },
            projectDetails: {
                name: "",
                description: "",
                author: "",
                contact: ""
            }
        };
        

        this.addDonation = this.addDonation.bind(this);
        this.deleteDonation = this.deleteDonation.bind(this);
        this.modifyDonation = this.modifyDonation.bind(this);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);

        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeProjectAuthor = this.onChangeProjectAuthor.bind(this);
        this.onChangeProjectDescription = this.onChangeProjectDescription.bind(this);
        this.onChangeProjectContact = this.onChangeProjectContact.bind(this);

        this.createProject = this.createProject.bind(this);
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
            description: "",
            amount: 0
        };

        this.setState({compensations: this.state.compensations, currentCompensation: newcurrentCompensation});

    }

    onChangeProjectName(event) {
        this.state.projectDetails.name = event.target.value;
        this.setState({projectDetails: this.state.projectDetails});
    }

    onChangeProjectAuthor(event) {
        this.state.projectDetails.author = event.target.value;
        this.setState({projectDetails: this.state.projectDetails});
    }

    onChangeProjectDescription(event) {
        this.state.projectDetails.description = event.target.value;
        this.setState({projectDetails: this.state.projectDetails});
    }

    onChangeProjectContact(event) {
        this.state.projectDetails.contact = event.target.value;
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
        newDonation.description = event.target.value;
        this.setState({currentCompensation: newDonation});
    }

    createProject() {
        // const compensations = [{
        //         title: "compensation1",
        //         description: "description1",
        //         amount: 13
        //     }, {
        //         title: "compensation2",
        //         description: "description2",
        //         amount: 42
        //     },
        // ];

        const data = {
            compensations: this.state.compensations,
            projectDetails: this.state.projectDetails
        };

        const option = {
            method: "POST",
            body: JSON.stringify(data),
        };

        fetch('/api/compensationCreation/', option)
            .then((response) => console.log(response));
    }

    render() {
        return (
            <div className="col-lg-12">
                <div>
                    <h1>Mon projet</h1>
                </div>
                <div className="col-lg-6 text-center">
                    <InfoProject
                        onChangeProjectName={this.onChangeProjectName}
                        onChangeProjectAuthor={this.onChangeProjectAuthor}
                        onChangeProjectDescription={this.onChangeProjectDescription}
                        onChangeProjectContact={this.onChangeProjectContact}
                        createProject={this.createProject}
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