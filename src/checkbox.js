import React from "react";

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;