import React from "react";
import "./smallBtn.css";

const SmallBtn = ({ containerStyle, fontStyle, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={containerStyle}
      className="kwn-comp-small-btn"
    >
      <p style={fontStyle}>{text}</p>
    </div>
  );
};

export default SmallBtn;
