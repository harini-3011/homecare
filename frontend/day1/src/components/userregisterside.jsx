import "../assets/css/user/userregisterside.css"
import Img from "../assets/images/logo.png";
function UserRegisterside()
{
    return(
        <div className="userregisterside">
            <div className="logo">
            <img src={Img} className="logoimg"></img>
            </div>
            <h1 className="rmsg">Hello,Welcome!</h1>
            <p className="rdes">
A website offering home care services for seniors provides personalized assistance to help elderly individuals maintain independence and comfort in their own homes. With qualified caregivers, comprehensive services, 
and a focus on safety, families can trust in the peace of mind knowing their loved ones receive the support they need. </p>
            
        </div>
    );
    
}
export default UserRegisterside