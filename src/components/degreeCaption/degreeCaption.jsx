import React from "react";
import { editGreen, education } from "../../assets";
import "./degreeCaption.css";

const DegreeCaption = () => {
  return (
    <div className="kawan-degree-caption-container">
      <div className="kavan-degree-caption-sub-container">
        <div className="kavan-degree-caption-cap-container">
          <img src={education} />
        </div>
        <div className="kavan-degree-caption-content-container">
          <h1>2022 -Phd Psychology</h1>
          <p>University of oxford,England</p>
        </div>
      </div>
      <div className="kavan-degree-caption-edit-icon">
        <img src={editGreen} />
      </div>
    </div>
  );
};

export default DegreeCaption;
