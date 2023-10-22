import { useState } from 'react'
import './Counter.css'

export default function Counter() {

    // useState(0) ==[0,f] (initial value, function)
    // const state = useState(0);
    // state[0] is value of state
    // state[1] is a function
    const [count,setCount] = useState(0);

    function incrementCounterFunction() { 
        // state[1](state[0]+1) // this is increasing the value of state by 1 on every click
        setCount(count+1)
        console.log(count)
        console.log('increment cliclked')
    }
    // we are updating the state and view is automatically updated
    function decrementCounterFunction() { 
        setCount(count-1)
        console.log(count)
        console.log('decrement cliclked')
    }

    return (
        <div className="Counter">
            <span className="count">{count}</span>
            <div>
                <button className="counterButton" 
                        onClick={incrementCounterFunction}
                >+1</button>
                <button className="counterButton" 
                        onClick={decrementCounterFunction}
                >-1</button>
            </div>
        </div>
    )
}