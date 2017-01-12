import React from 'react'
import InfoProject from './InfoProject'
import AddCompensation from './AddCompensation'
import Compensation from '../components/Compensation'
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
        let compensation = this.state.currentCompensation;
        compensation.amount = parseInt(compensation.amount);

        if (compensation.amount <= 0 || compensation.title === "" || compensation.description === "") {
            console.log('Amout or title is not correct');
            return;
        }
        this.state.compensations.push(compensation);

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

    onChangeProjectDescription(description) {
        this.state.projectDetails.description = description;
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
        if (this.state.compensations.length === 0) {
            console.log('cannot create compensation');
            return;
        }
        const data = {
            compensations: this.state.compensations,
            projectDetails: this.state.projectDetails
        };

        const option = {
            method: "POST",
            body: JSON.stringify(data),
        };

        fetch('/api/compensationCreation/', option)
            .then((response) => {
                if (response.status >= 200 && response.status < 300)
                    browserHistory.push('/');
                else {
                    console.log('ERROR: ', response.status, ' STATUSTXT : ', response.statusText);
                }
            });
    }

    render() {
        return (
            <div className="panel panel-info">
                <div className="panel panel-heading"><span style={{fontSize: `24px`}}>Mon Nouveau Projet</span></div>
                <div className="panel-body">
                    <div className="col-lg-6">
                        <InfoProject
                            onChangeProjectName={this.onChangeProjectName}
                            onChangeProjectAuthor={this.onChangeProjectAuthor}
                            onChangeProjectDescription={this.onChangeProjectDescription}
                            onChangeProjectContact={this.onChangeProjectContact}
                            createProject={this.createProject}
                        />
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <AddCompensation
                                currentCompensation={this.state.currentCompensation}
                                addDonation={this.addDonation}
                                onChangeTitle={this.onChangeTitle}
                                onChangeAmount={this.onChangeAmount}
                                onChangeDesc={this.onChangeDesc}
                            />
                            {
                                this.state.compensations.map((compensation, index) => {
                                    return (
                                        <Compensation
                                            key={index}
                                            index={index}
                                            compensation={compensation}
                                            modifycompensation={this.modifyDonation}
                                            deletecompensation={this.deleteDonation}
                                        />
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}