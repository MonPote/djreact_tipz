import React from 'react';
import UserProject from '../components/UserProject'

export default class UserProjectsPage extends React.Component {

    render() {
        return (
            <div>
                <div className="panel panel-info">
                    <div className="panel-heading"><span style={{fontSize: `24px`}}>Mes projets</span></div>
                    <div className="panel-body">
                        <UserProject />
                        {/**/}
                    </div>
                </div>
            </div>
        );
    }
}