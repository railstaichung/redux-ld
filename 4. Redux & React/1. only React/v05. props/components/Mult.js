import React, { Component } from 'react'
export default class Mult extends Component{
  constructor(props) {
    super(props)
    this.state = {mult: 3, a:1, b: 2}
  }
  render() {
    console.log('Mult.render()');
    return (
      <div>
        <input value={this.state.a} onChange={(e)=>this.setState({a: e.target.value})}/>
        * <input value={this.state.b} onChange={(e)=>this.setState({b: e.target.value})}/>
      = <span>{this.state.mult}</span>
        <button onClick={() => {
          this.props.multDesc('click "Mult" button')
          this.setState({mult: Number(this.state.a) * Number(this.state.b)})}}>Mult</button>
        <p/>
      </div>
    )
  }
}
