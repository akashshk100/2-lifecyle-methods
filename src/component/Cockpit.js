import React, { Component } from "react"

class Cockpit extends Component{

    componentWillUnmount(){
        console.log("[Cockpit.js] componentWillUnmount() called")
    }

    render(){
        return (
            <div>
                <h2>This is cockpit</h2>
            </div>
        )
    }
}

export default Cockpit