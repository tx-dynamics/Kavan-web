import React from "react";

import "./whiteButton.css";

const WhiteButton = ({ text, onClick }) => {
  return (
    <div className="white-button-container" onClick={onClick}>
      <p>{text}</p>
    </div>
  );
};

export default WhiteButton;
