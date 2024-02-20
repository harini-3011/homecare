import UserRegister from "../../components/userregister";
import UserRegisterside from "../../components/userregisterside";
import "../../assets/css/user/uregister.css";

function Userregister()
{
    return(
        <div className="register-container">
           <div> <center><UserRegisterside/></center></div>
           <div><center><UserRegister/></center></div>
        </div>
    );
}
export default Userregister