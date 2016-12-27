import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Examples extends Component {
  render() {
    return (
      <div>
        <div>Simple React</div>
        <div>Simple React</div>
        <div>Simple React</div>
      </div>
    )
  }
}

ReactDOM.render(
  <Examples/>,
  document.getElementById('root')
)
