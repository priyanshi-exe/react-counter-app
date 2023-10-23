import { useState } from 'react'
import CounterButton from './CounterButton';
import './Counter.css'

export default function Counter(){

    // useState(0) ==[0,f] (initial value, function)
    // const state = useState(0);
    const [count,setCount] = useState(0);
    // we are updating the state and view is automatically updated

    function incrementCounterFunction(by) {
        // Increasing the value of state on every click
        setCount(count+by) // state[1](state[0]+1) 
    }

    function decrementCounterFunction(by) { 
        setCount(count-by)
    }

    function resetCounter(){
        setCount(0)
    }

    return (
        <div>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCounterFunction} decrementMethod={decrementCounterFunction}/>
            <CounterButton by={2} incrementMethod={incrementCounterFunction} decrementMethod={decrementCounterFunction}/>
            <CounterButton by={5} incrementMethod={incrementCounterFunction} decrementMethod={decrementCounterFunction}/>
            <button className="resetButton" onClick={resetCounter}>Reset</button>
        </div>
    )
}

