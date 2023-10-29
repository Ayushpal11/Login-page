import React from "react";

const EyeButton = ({ onClick }) => {
  const [eyeOpen, setEyeOpen] = React.useState(true);

  const handleClick = () => {
    setEyeOpen(!eyeOpen);
    onClick();
  };

  return (
    <button
      type="button"
      className="eye-button"
      onClick={handleClick}
      
    >
      {eyeOpen ? <i className="fas fa-eye" /> : <i className="fas fa-eye-slash" />}
    </button>
    
  );
};

export default EyeButton;