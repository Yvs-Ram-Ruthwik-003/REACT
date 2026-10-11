import { useState } from "react"

function MyComponent(){

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [comment, setComment] = useState("");

    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }

    function handleCommentChange(e){
        setComment(e.target.value);
    }

    function handlePaymentChange(e){
        setPayment(e.target.value);
    } 

    function handleShippingChange(e){
        setShipping(e.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange} placeholder="write your name"></input>
            {/* <p>Name: {name}</p>  */}
            
            <hr></hr>
            <input value={quantity} onChange={handleQuantityChange} type ="number"></input>
            {/* <p>Quantity: {quantity}</p> */}

            <hr></hr>
            <textarea value ={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
            {/* <p>Comment: {comment}</p> */}

            <hr></hr>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an payment option</option>
                <option value="Visa">VISA</option>  {/* there should be difinetly be value in the 'option tag' --> or else it won't show when we selected it */}
                <option value="Credit Card">Credit Card</option>
                <option value="Gift Card">Gift Card</option>
            </select>
            {/* <p>Payment method select: {payment}</p>  this will the values */}
        
            <hr></hr>
            <p>select Delivery Type:</p>
            <label>
                <input type="radio" value="Pick Up"
                        checked={shipping ==="Pick Up"} 
                        onChange={handleShippingChange}></input>
                Pick Up
            </label>

            <br></br>

            <label>
                <input type="radio" value="Delivery"
                        checked={shipping ==="Delivery"} 
                        onChange={handleShippingChange}></input>
                Delivery
            </label>



            <hr></hr>

            <p>Name: &nbsp; {name}</p>  {/* this will update in real-time, and above the handleNameChange is a callback */}
            <p>Quantity: &nbsp; {quantity}</p>
            <p>Comment: &nbsp; {comment}</p>
            <p>Payment method select: &nbsp; {payment}</p>
            <p>Delivery Type Selected: &nbsp; {shipping}</p>  {/* nbsp = Non-Breaking Space --> and for multiple non-breaking spaces = &ensp or $emsp --> or without special characters --> use '<pre> </pre>' TAG (text is shown exactly as it is written in the HTML code), instead of '<p> </p>' */}
            


        </div>
    )
}
export default MyComponent