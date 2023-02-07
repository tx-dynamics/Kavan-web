import React, { useState } from "react";
import "./DropDown.css";
import arrow from "./chevron-down.png";
import { arrowDown } from "../../assets";

const DropDown = ({
  selected,
  setSelected,
  options,
  text,
  bg,
  width,
  textStyle,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown" style={bg}>
      <p style={textStyle}>{text}</p>
      <div
        className="dropdown-btn"
        style={bg}
        onClick={(e) => setIsActive(!isActive)}
      >
        <p>{selected.label}</p>
        <img src={arrowDown} alt="icon" />
      </div>
      {isActive && (
        <div style={bg} className="dropdown-content">
          {options.map((option) => (
            <p
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
