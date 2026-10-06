 import profilePic from './assets/Joy_Boy.jpg'
 function Card(){
    return(
        <div className="card"> {/* creates a card container */}
            <img className="cardImg" src={profilePic} alt="Profile Image" ></img> 
            <h1 className="cardTitle">Ruthwik</h1>
            <p className="cardDescription">I am currently learning React</p>
        </div>
    );
 }

 export default Card