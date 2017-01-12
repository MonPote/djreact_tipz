import React from 'react'

import ProjectList from "./ProjectList"

export default class BestProjectPage extends React.Component {
    render() {
        console.log('user = ', localStorage.getItem('userName'));
        return (
            <div>
                <div className="panel panel-info">
                    <div className="panel-heading"><span style={{fontSize: `24px`}}>Accueil</span></div>
                    <div className="panel-body">
                        <ProjectList sortedByAmount={true} />
                    </div>
                </div>
            </div>
        );
    }
}