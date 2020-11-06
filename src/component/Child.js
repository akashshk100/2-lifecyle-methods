import React, { Component } from 'react';

class Child extends Component{

  constructor(props){
    super(props)
    console.log("[Child.js] constructor called")
    this.state = {
      componentName: 'Child Component',
      count: props.count
    }
  }

  static getDerivedStateFromProps = (props,state) => {
    console.log("[Child.js] getDerivedStateFromProps(props,state) called")
    state = {count : props.count}
    return state
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("[Child.js] shouldComponentUpdate() called")
    if (this.state.count>4 || this.props.count === nextProps.count)
       return false
    return true
  }

  componentDidMount(){
    console.log("[Child.js] componentDidMount() called")
  }

  componentDidUpdate(){
    console.log("[Child.js] componentDidUpdate() called")
  }

  render(){                         // here even though render is not an arrow function, but still we are able to use this keyword inside it.
    return(
      <div>
        <h1>{this.state.componentName}</h1>
        <h2>{this.state.count}</h2>
      </div>
    )
  }
}

export default Child;
