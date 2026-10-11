
function Button(){

    const handleClick = () =>console.log(`you clicked me`)

    const handleClick2 = (name) => console.log(`${name} stop clicking me`)

    //Now let's add few conditions:
    let count =0; 

    const handleClick3 = (name) =>{
        if(count <3){
            count++;
            handleClick();
            console.log(`You clicked me ${count} time/s`)
        }else{
            handleClick2(name);
        }
    };

    // Event parameter = is a parameter that receives information about an event when it occurs, --> such as a button click, a key press, or typing in an input.
    // An event parameter receives an event object containing information about an event, such as which element triggered it and what value an input contains.
    const handelClick4 = (e)=>{console.log(e);
                            e.target.textContent ="heyyyy!"; }; // to add after click text change in the button


    return(
    
    <div>
        <button onClick={handleClick}>Click me 1</button>
        <button onClick= {()=>{handleClick2("ruthwik")}}>Click me 2</button>
            {/*  Here if we use directly --> 'onClick = {handleClick2("ruthwik")}' --> it will invoke it right away as we set the parentheses after a call back
                to avoid that we could wrap that call back within function expression or an arrow function --> as shown above                          */}
        <button onClick={()=> handleClick3("ruthwik")}>Click me 3</button>
        <button onClick={(e)=> handelClick4(e)}>Click me 4</button>  {/*this gives information of our event in the console*/}
        {/* to execute the function on double click --> use 'onDoubleClick()' instead of 'onClick()' */}
    </div>
    )
}

export default Button