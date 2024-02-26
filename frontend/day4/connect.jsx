import Img from "../assets/images/connect.jpeg";
import "../assets/css/user/connect.css";
import { useState } from "react";
function Connect()
{
    const[range,setRange]=useState("5");
    const handleChange=(e)=>
    {
        setRange(e.target.value)
    }
    return(
        <>
        <div className="connect-container">
            <div className="connect-content">
              
               <form>
                <div className="feedbackcontainer">
                    
                    <input className="feedbackinput" type="text" placeholder="Name"></input><br></br><br></br>
                    <input className="feedbackinput" type="email" placeholder="Email"></input><br></br><br></br>
                    <textarea className="feedback" placeholder="Your Feedback..."></textarea><br></br>
                    <div className="rangecontainer">
                    <input className="range"type="range" min="0" max="5" onChange={handleChange}></input>
                    <p>{range}</p>
                    </div>
                    <button className="feedbacksub">Submit</button>
                </div>
               </form>
            </div>
           
            <img className="connect-image"src={Img}/>
           
            
        </div>
        </>
    );
}
export default Connect