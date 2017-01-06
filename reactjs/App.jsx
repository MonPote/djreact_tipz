import React from "react"
import { render } from "react-dom"
import App1Container from "./containers/App1Container"

class App extends React.Component {
  render() {
    return (
      <App1Container />
    )
  }
}

render(<App/>, document.getElementById('root'))
