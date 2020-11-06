import React, { Component } from 'react';
import Child from '../component/Child'
import FunctionalChild from '../component/FunctionalChild'
import Cockpit from '../component/Cockpit'
import './App.css';

class App extends Component{

  constructor(props){
    super(props)
    console.log("[App.js] constructor called")
    this.state = {
      componentName: 'Parent Component',
      count: 0,
      cockpitContent: true
    }
  }

  static getDerivedStateFromProps = (props,state) => {
    console.log("[App.js] getDerivedStateFromProps(props,state) called")
    return null
  }

  shouldComponentUpdate = () => {
    console.log("[App.js] shouldComponentUpdate() called")
    // if (this.state.count>1)
    //   return false
    return true
  }

  componentDidMount(){
    console.log("[App.js] componentDidMount() called")
  }

  componentDidUpdate(){
    console.log("[App.js] componentDidUpdate() called")
  }

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render = () => {

    let cockpit = null
    if(this.state.cockpitContent){
      cockpit = (
        <Cockpit></Cockpit>
      )
    }
    return(
      <div className="myDiv">
        <button onClick={() => { this.setState({cockpitContent: !this.state.cockpitContent}) } }>Toggle Cockpit</button>
        {cockpit}
        <h1>{this.state.componentName}</h1>
        <h2>{this.state.count}</h2>
        <Child count={this.state.count}></Child>
        <FunctionalChild count={this.state.count}></FunctionalChild>
        <button onClick={this.clickHandler}>Increment</button>
      </div>
    )
  }
}

export default App;
