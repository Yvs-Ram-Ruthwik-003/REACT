// propTypes = a mechanism that ensures that the passed value is the correct datatype.
// age: PropTypes.number
import PropTypes from 'prop-types'

function Student(props){
    return(
        <>
            <div className = "student">
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            </div>
        </>
    )
}


//In current versions of React, defaultProps is removed for function components, so we can use default parameter values instead of defaultProps by destructuring the props object in the function parameter and assigning default values to the destructured variables.


// function Student({
//     name = "Default Name",
//     age = 0,
//     isStudent = false
// }) {
//     return (
//         <div>
//             <p>Name: {name}</p>
//             <p>Age: {age}</p>
//             <p>Student: {isStudent ? "Yes" : "No"}</p>
//         </div>
//     );
// }

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {  //In modern React, defaultProps is removed for function components, so use default parameter values instead.
    name: "Default Name",  //so this doen't work anymore, but I am keeping it here for reference.
    age: 0,
    isStudent: false
}

export default Student