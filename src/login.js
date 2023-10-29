import React from "react";
import Checkbox from "./checkbox";
import PasswordInput from "./password";

const Login= () => {
  return (
    <div className="login-main">
      <h1 className="title">Login</h1>
      <div className="login-page">
<div className="login-input">
Login ID
<input
type="email"
placeholder="Enter login id" />
Password 
<PasswordInput />
</div>
<br />   
    <div className="checkbox">
      <input type="checkbox" />
      <label>Remember me</label>
      <label className="forgot-password"><a>  Change Password</a></label>
     </div>
      <div className="checkbox">
      <input type="checkbox" />
      <label>Agree to <a href="/terms-and-conditions">Terms & conditions</a></label>
    </div>
<br />
</div>
<div className="login-footer">      
<button type="submit">Login</button>
</div>
       <foot className="login-footer">
        Don't have an account?
        <a href="/signup">Register here</a>
      </foot>
      </div>
    
  );
};

export default Login;