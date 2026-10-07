// conditional rendering = allows you to control what gets rendered 
//                         in your application based on certain conditions.
// (show, hide, or change components)

import UserGreeting from "./UserGreeting"

function App(){
  return(
    <>
      <UserGreeting isLoggedIn ={true} username="Ruthwik"></UserGreeting>
    </>
  )
}

export default App