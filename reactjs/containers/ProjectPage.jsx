import React from 'react'
import ProjectCompensation from '../components/ProjectCompensation'

export default class ProjectPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Un super project - crée le 2 oct. 2016</h1>
                <div className="container">
                    <div className="col-lg-6">
                        <div className='panel panel-default'>
                            <div className="panel-body">
                                <textarea className="form-control" onChange={this.props.onChangeProjectDescription}/>
                                <div className="col-lg-12">
                                    <span>Par : Bobby Wallace</span>
                                </div>
                                <div className="col-lg-12">
                                    <span>Contact : Patrick.ear@epita.fr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='panel panel-default'>
                            <div className="panel-body">
                                <ProjectCompensation />
                                <ProjectCompensation />
                                <ProjectCompensation />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}