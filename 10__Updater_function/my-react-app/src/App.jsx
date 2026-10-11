// updater function = A function passed as an argument to setState() usually
//                    ex: setYear(prevYear = prevYear + 1) or setYear(y = y + 1) --> instead of directly setYear(year = year+1)
//                    Allow for safe updates based on the previous state.
//                    Used with 'multiple state updates' adn 'asynchronous functions'.
//                    Good practices to use updater functions.

import MyComponent from './MyComponent.jsx'

function App(){
  return(
    <div>
      <MyComponent></MyComponent>
    </div>
  )
}
export default App

