
This project depicts usage of following concepts:
    1. Lifecycle methods in class components 
        
        a. During mounting:
        constructor() ---> getDerivedStateFromProps(nextState, nextProps) ---> render() ---> componentDidMount()

        b. During DOM updation: 
        getDerivedStateFromProps(nextState, nextProps) ---> shouldComponentUpdate() ---> render() ---> componentDidUpdate()

        c. During unmounting:
        componentWillUnmount()

NOTE: refer link: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    2. Lifecycle hook in functional components 

        a. useEffect(): a hook used to in functional components to emit the behaviour lifecycle methods. It's basically used to create some effect in the components. The function is called everytime whenever a functional component is rendered. Hence before component mounting, component updation and unmounting.
        This function takes two parameters, first is a callback function that will be called before component rendering, and second is an array of variables that are needed to be checked if they've changed and then only the callback function should be called. This second component can be omitted as well if you want the function to be called at every render.
        There can be as many calls to useEffect() hook, in case you want different effects for different set of variable changes.  
        
