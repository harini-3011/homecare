import { useState } from "react";
import "../assets/css/user/userregister.css"
function UserRegister()
{
  const [pass, setPass] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
  const[message,setMessage]=useState('');
  function validatePassword(password) {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    const notMetCriteria = [];

    if (password.length < minLength) {
      notMetCriteria.push("Minimum length of 8 characters");
    }
    if (!hasUppercase) {
      notMetCriteria.push("At least one uppercase letter");
    }
    if (!hasLowercase) {
      notMetCriteria.push("At least one lowercase letter");
    }
    if (!hasNumber) {
      notMetCriteria.push("At least one number");
    }
    if (!hasSpecialChar) {
      notMetCriteria.push("At least one special character");
    }

    return notMetCriteria;
  }

  function validity(event) {
    const password = event.target.value;
    setPass(password);

    const notMetCriteria = validatePassword(password);
    setValidationErrors(notMetCriteria);
  }
  function confirm(event)
  {
    const confirmedpassword=event.target.value;
    
    if(pass===confirmedpassword)
    {
        setMessage("Passwords match.");
    }
    else{
        setMessage("Passwords do not match. Please try again.");
    }
  }
    return(
        <>
      <div className="userregister">
      
      <div className="registerform-container">
      <form>
        <div className="form-field">
          
            <input type="text" id="name" min="3" placeholder="Name"required></input>
        </div>
        <div className="form-field">
          
          <input type="email" id="email"  placeholder="Email Id"required></input>
        </div>
        <div className="form-field">
         
          <input type="password" id="password" placeholder="Password"required value={pass} onChange={validity}></input>
          {validationErrors.length > 0 && (
            <ul>
              {validationErrors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="form-field">
          
            <input type="password" id="cpassword" placeholder="Confirm Password"required onChange={confirm}></input>
            {message}
        </div>
        <div className="rbutton">
          <button className="button" type="submit">Register</button>
        </div>
        <div>
        </div>
      </form>
      </div>
      </div>
      
      </>
    );
}
export default UserRegister