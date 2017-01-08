import React from "react"

export default class HomeProject extends React.Component {
    render() {
        return (
            <div className="col-lg-4">
                <div className="panel panel-default">
                    <div className="panel-heading">Projet #1 - Sympa</div>
                    <div className="panel-body">
                        <span className="col-lg-12">Gain : 1652 € / mois</span>
                        <span className="col-lg-12">Crée le : 15.10.2016</span>
                        <textarea className="col-lg-12" rows="4" cols="50" defaultValue="Test"></textarea>
                        <div className="col-lg-offset-9">
                            <button className="btn btn-primary">Participer !</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}