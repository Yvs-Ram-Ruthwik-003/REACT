import { useState } from "react";

function MyComponent(){
    const [count, setCount] = useState(0);

    const increment = ()=>{

        // Uses the CURRENT state to calculate the NEXT state.
        // set functions do not trigger an update.
        // React batches together state updates for performance reasons.
        // NEXT state becomes the CURRENT state after an update.


        setCount(count + 1)
        setCount(count + 1)      // even if we keep two setCount(count + 1) --> when we click 'increment', it will increase by one only

        // Takes the PENDING state(not CURRENT state) to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line).
        // During the next render, it will call them in the same order.

        setCount(prevCount => prevCount +1);    // use this updater function --> for multiple state updates
        setCount(prevCount => prevCount +1);
    };

    const decrement = ()=>{
        setCount(count - 1)
    };

    const reset = ()=>{
        setCount(0)
    };

    return(
        <div className="container">
            <h1 className="count">{count}</h1>
           <button className="increment" onClick={increment}>Increment</button> 
           <button className="decrement" onClick={decrement}>Decrement</button>
           <br></br>
           <button className="reset" onClick={reset}>Reset</button>
        </div>
    )
}
export default MyComponent