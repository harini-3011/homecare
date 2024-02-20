import "../assets/css/user/userloginside.css"
import Img from "../assets/images/userlogin.png"
 
function UserLoginside()
{
    return(
        <div className="userloginside">
            
           <h1 className="lmsg">Hello!</h1>
           <p className="submsg">10 Million+ people have joined our network.</p>
           <p className="submsg1">We invite you to join the tribe!!</p>
          
           
           <div className="limg">
            <img className="group"src={Img} alt="group"></img>
            </div>
        </div>
    );
    
}
export default UserLoginside