import React from 'react'
import InfoProject from './InfoProject'
import AddDonation from './AddDonation'

export default class CreateProject extends React.Component {
    render() {
        return (
            <div className="col-lg-12">
                <div>
                    <h1>Mon projet</h1>
                </div>
                <div className="col-lg-6 text-center">
                    <InfoProject />
                </div>
                <div className="col-lg-6 text-center">
                    <AddDonation />
                </div>
            </div>
        )
    }
}