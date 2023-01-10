import React from "react";
import { calenderIcon } from "../../assets";
import "./selectDate.css";

const SelectDate = () => {
  return (
    <div className="kavan-select-date-container">
      <p>Start Date</p>
      <div className="kavan-select-date-sub_container">
        <p>01/22 july/2021</p>
        <img src={calenderIcon} />
      </div>
    </div>
  );
};

export default SelectDate;
