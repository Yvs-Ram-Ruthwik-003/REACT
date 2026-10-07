import PropTypes from 'prop-types'

function UserGreeting(props){

    if(props.isLoggedIn){
        return(
            <h2 className = "welcome-message">Welcome {props.username}</h2>
        )
    }else{
        return(
            <h2 className = "login-message">Please log in to continue</h2>
        )
    }
//another-way:
    //return( prop.isLoggedIn ? <h2> Welcome {props.username}</h2> : <h2>Please log in to continue</h2> ) 
    //this is a short way to write the above if-else statement using ternary operator.
    
//another-way:      -->easier to read and understand.
    //const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    //const loginMessage = <h2 className="login-message">Please log in to continue</h2>
    //return( props.isLoggedIn ? welcomeMessage : loginMessage )
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting