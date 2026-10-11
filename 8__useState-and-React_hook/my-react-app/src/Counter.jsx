import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const increment = ()=>{setCount(count+1)};
    const decrement = ()=>{setCount(count-1)};
    const reset = ()=>{setCount(0)};

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
export default Counter