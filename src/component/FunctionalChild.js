import React, { useEffect, useState } from 'react'

const FunctionalChild = (props) => {
    let [count, setCount] = useState(props.count)
    console.log("rendering.... FunctionalChild.js")
    /* setCount(props.count)            this will lead to infinite rendering problem because called after every render and before actual render */
    
    useEffect(() => {               // equivalent to componentDidMount, componentDidUpdate, componentWillUnmount
        console.log("[FunctionalChild.js] useEffect() called")
        setCount(props.count)           // Doubt: why does calling setCount() here does not leads to infinite rendering problem?
        return () => {
            console.log("[FunctionalChild.js] useEffect() cleanup called")   /* this clean-up is not exactly same as componentWillUnmount() : 
                                                                             This is called every time the component is going to update too, not just when unmounted */                    
        }                                                                            
    },[props.count])
    
    return(
        <div>
            <h1>Functional Child Component</h1>
            <h2>{count}</h2>
            <button onClick={ ()=> {setCount(count+1)} }>Increment Count</button>
        </div>
    )
}

export default FunctionalChild