import React from "react";
import "./DopDown.css";
const DropDown = ({ domains, dropDownHandler }) => {
  return (
    <select onChange={dropDownHandler} className="dropdown">
      {domains.map((domain) => (
        <option key={domain} value={domain}>
          {domain}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
