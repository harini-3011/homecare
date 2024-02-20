import { useState } from "react";
import "../assets/css/user/userlogin.css";
import {Link} from "react-router-dom";

function UserLogin() {
  const [pass, setPass] = useState('');
  const [validationErrors, setValidationErrors] = useState([]);
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

  return (
    <>
      <div className="userlogin">
      
      <div className="userform-container">
    
      <form>
        <div className="form-field">
          
          <input type="email" id="email" placeholder="Email"required></input>
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
        <div className="lbutton">
          <button className="button" type="submit">Login</button>
        </div>
        <div className="already-container">
          <div>
          <p className="already">Already have an account?</p>
          </div>
          <div>
          <Link className="signup"to="/register">SignUp</Link>
          </div>
        </div>
      </form>
      </div>
      </div>
      
      </>
  );
}

export default UserLogin;
