// props = reaad-only properties that are shared between components.
//        A parent component can send data to a child component using props.
//        Props are immutable (cannot be changed).

// <ComponentName propName = "value" /> --> this is how we send data to a child component using props.
// <Componet key = "value" />


// propTypes = a mechanism that ensures that the passed value is the correct datatype.
// age: PropTypes.number

//defaultProps = default values for props in case theu are not passed from the parent component.
//name: "Default Name"

import Student from './Student.jsx'

function App(){

  return(
    <>
      <Student name = "Ruthwik" age = {20} isStudent = {true}></Student> {/* this 'name' prop is passed to the Student component and if you make the age prop a string instead of a number, you'll see a warning in the console */}
      <Student name = "Ram" age = {50} isStudent = {false}></Student> 
      <Student name = "venkata" age = {25} isStudent = {true}></Student> 
      <Student /> {/* this will use the default props values since no props are passed */}
    </>
  )
}

export default App