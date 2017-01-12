import React from 'react'
import {browserHistory} from 'react-router'

export default class ProjectCompensation extends React.Component {
    render() {
        return (
            <div className='panel panel-info'>
                <div className="panel-heading">Panel heading</div>
                <div className="panel-body">
                    <div className="col-lg-12">
                        <span>dshjgadjksahdjkashdjkhsajkdhajkshdjkhjkdhjsak</span>
                    </div>
                    <button className="btn btn-info"
                            onClick={() =>
                                browserHistory.push(`/compensation/${this.props.compensation.id}`)}
                    >Sélectionner</button>
                </div>
            </div>
        );
    }
}

