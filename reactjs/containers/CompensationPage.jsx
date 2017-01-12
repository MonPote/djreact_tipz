import React from "react"
import {browserHistory} from 'react-router'


export default class CompensationPage extends React.Component {
    constructor() {
        super();

        this.state = {
            project: {},
            compensation: {}
        };

        this.addCompensationAmount = this.addCompensationAmount.bind(this);
    }

    componentWillMount() {
        if (localStorage.getItem('userName') === null) browserHistory.push('/');
    }

    componentDidMount() {
        fetch(`/api/singleCompensation/${this.props.params.id}`)
            .then(response => response.json())
            .then(json => {
                this.setState({compensation: json});
                return json.idProject;
            })
            .then(id => {
                fetch(`/api/project/${id}`)
                    .then(response => response.json())
                    .then(json => this.setState({project: json}));
            });
    }

    addCompensationAmount() {
        fetch(`/api/addCompensationAmount/${this.state.compensation.id}`)
            .then(response => {
                if (response.status >= 200 && response.status < 300)
                    browserHistory.push('/');
                else {
                    console.log('ERROR: ', response.status, ' STATUSTXT : ', response.statusText);
                }
            });
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading"><span style={{fontSize: `24px`}}>Je participe !</span></div>
                    <div className="panel-body">
                        <div>
                            <span>
                                Vous confirmez votre participation à hauteur de {this.state.compensation.amount}
                                euros(s)
                                , par mois au projet {this.state.project.name} de {this.state.project.author}
                                </span>
                        </div>
                        <div className='panel panel-info'>
                            <div className="panel-heading">{this.state.compensation.title}</div>
                            <div className="panel-body">
                                <div className="col-lg-12">
                                    <span>{this.state.compensation.description}</span>
                                </div>
                                <div className="text-right">
                                    <button className="btn btn-info"
                                            onClick={this.addCompensationAmount}
                                    >J'accepte
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
