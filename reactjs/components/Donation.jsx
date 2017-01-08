import React from 'react'

export default class Donation extends React.Component {
    render() {
        return (
            <div className="col-lg-12">
                <div className="panel panel-default">
                    <div className="panel-heading">Le petit don - 1 € / mois</div>
                    <div className="panel-body">
                        <span className="col-lg-12">blablabla</span>
                        <div className="col-lg-12">
                            <div className="col-lg-offset-5">
                                <button className="btn btn-primary">Modifier</button>
                                <button className="btn btn-primary">Supprimer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

