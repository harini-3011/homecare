import UserLogin from "../../components/userlogin";
import "../../assets/css/user/ulogin.css"
import UserLoginside from "../../components/userloginside";

function Userlogin()
{
   return(
     <div className="login-container">
      <div>
      <center>
     <UserLoginside/>
     </center>
     </div>
     <div>
      <center>
      <UserLogin/>
      </center>
      </div>
    
    </div>
   );
}
export default Userlogin