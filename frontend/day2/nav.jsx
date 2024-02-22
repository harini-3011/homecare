import {Link} from "react-router-dom";
import Img from "../assets/images/logo.png";
import "../assets/css/user/nav.css";
function NavBar()
{
    return(
        <>
          <nav>
            <div><img className="navlogo"src={Img}alt="logo"></img></div>
            <div> <Link className="navele"to="/">Plans</Link></div>
            <div><Link className="navele"to="/">Services</Link></div>
            <div><Link className="navele"to="/">Media</Link></div>
            <div> <Link className="navele" to="/profile">Profile</Link></div>
            <div><Link className="navele" to="/">Logout</Link></div>
          </nav>
        </>
    );
}
export default NavBar