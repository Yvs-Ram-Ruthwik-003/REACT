import React, {useState} from 'react'

function MyComponent(){
    // creating stateFul variable
    const [name, setName] = useState("Guest"); // this function returns a array of two elements --> a variable and a setter function
                            //useState(inital_State)
    const [age, setAge] = useState(0);

    const [isEmployed, setIsEmployed] = useState(false);

    
    const updateName = ()=>{
        // name = "Ruthwik"; // if we directly set name like this --> the update won't appear in the DOM --> so we have to use our setter function 'setName'
        //console.log(name);

        setName("Ruthwik");     // when you use the setter function of a stateful variable it will trigger a re-render of the virtual DOM.
                                // Normal variable don't                             
    }

    const incrementAge = () => {
        setAge(age+1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);  // to toggle it to true to false and vice versa
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Name: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>
        </div>
    )
}
export default MyComponent