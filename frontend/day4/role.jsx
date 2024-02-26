import "../assets/css/user/role.css";
import Img from "../assets/images/roleadmin.png";
import Img1 from "../assets/images/roleuser.png";
import {Link} from "react-router-dom";
function Role()
{
    return(
        <>
          <div className="role-container">
            <div className="leftside">
              <img src={Img}></img>
              
         <button className="rolebtn"><Link className="rolelink"to="/adminLogin" >Admin</Link></button>
              
            </div>
            <div className="vert"></div>
            <div className="rightside">
              <img src={Img1} ></img>
              
              <button className="rolebtn"><Link className="rolelink"to="/">User</Link></button>
              
            </div>
          </div>
        </>
    );
}
export default Role