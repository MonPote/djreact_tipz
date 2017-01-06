import React from "react"
import {render} from "react-dom"
import Navbar from "./containers/Navbar"

class App extends React.Component {
    render() {
        return (
            <Navbar />
        )
    }
}

render(<App/>, document.getElementById('root'))
