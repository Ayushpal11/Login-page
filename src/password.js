import React, { useState } from "react";
import EyeButton from "./eyeview";

const PasswordInput = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleEyeButtonClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="password-input">
      <input
        type={passwordVisible ? "text" : "password"}
        placeholder="Enter Password"
        EyeButton onClick={handleEyeButtonClick}
      />
    </div>
  );
};

export default PasswordInput;