// React hook = Special function that allows functional components 
//              to use React features without writing class components (React v16.8) --> basically we don't need to write class based components --> we can write function-based components while using react hooks
// [useState, useEffect, useContext, useReducer, useCallback and more...]


// useState() = A React hook that allows the creation of a stateful variable
//              and a setter function to update its value in the virtual DOM.
//[name, setName]

import Counter from "./Counter"
import MyComponent from "./MyComponent"


function App(){
  return(
      <div>
          <MyComponent></MyComponent>
          <hr></hr>
          <Counter></Counter>
      </div>
  )
}
export default App