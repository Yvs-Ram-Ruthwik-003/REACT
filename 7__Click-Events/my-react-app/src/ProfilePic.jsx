function ProfilePicture(){
    const imgURL = './src/assets/Joy_Boy.jpg';

    const handleClick5 = (e)=>{console.log(`Disappeared!`);
                                e.target.style.display = "none";
    };

    return(<img onClick={(e)=>handleClick5(e)} src = {imgURL} className="imgUrl"></img>)

   

    
}

export default ProfilePicture