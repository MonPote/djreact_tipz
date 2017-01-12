import React from "react"

export default class CompensationPage extends React.Component {
    constructor() {
        super();

        this.state = {
            project: {},
            compensation: {}
        }
    }
    componentDidMount() {
        // fetcher la compensation
        // fetcher le projet
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
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading"><span style={{fontSize: `24px`}}>Je participe !</span></div>
                <div className="panel panel-default">
                    <div className="panel-body">
                        <div>
                            <span>Vous confirmez votre participation à hauteur de XXXXX euros(s), par mois au projet TITRE de AUTEUR </span>
                        </div>
                        <div className='panel panel-info'>
                            <div className="panel-heading">Panel heading</div>
                            <div className="panel-body">
                                <div className="col-lg-12">
                                    <span>dshjgadjksahdjkashdjkhsajkdhajkshdjkhjkdhjsak</span>
                                </div>
                                <button className="btn btn-info"
                                        onClick={() => console.log('/api/addCompensationAmount/:amount')}
                                >J'accepte
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
