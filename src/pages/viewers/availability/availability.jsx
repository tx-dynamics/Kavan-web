import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { calenderIcon, greenIcon } from "../../../assets";

import { Button, Footer, Navbar, TextInput } from "../../../components";
import { WithAuth } from "../../../components/auth/auth";
import { getAllParams, setParam } from "../../../urlParams";
import DropDown from "../../../components/DropDown/DropDown";

const Availability = () => {
  const params = getAllParams()
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date().toISOString());
  const [endDate, setEndDate] = useState(new Date().toISOString());
  const [weekSelect, setWeekSelected] = useState({
    label: "Monday",
    value: "monday",
  });

  const [weekSelect2, setWeekSelected2] = useState({
    label: "Monday",
    value: "monday",
  });

  const WeekArr = [
    { label: "Monday", value: "monday" },
    { label: "Tuesday", value: "tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "thursday" },
    { label: "Friday", value: "friday" },
    { label: "Saturday", value: "saturday" },
    { label: "Sunday", value: "sunday" },
  ];

  const SelectDate2 = forwardRef(({ value, onClick, text }, ref) => (
    <div className="kavan-select-date-container">
      {/* <button className="example-custom-input" onClick={onClick} ref={ref}>
        {value}
      </button> */}
      <p>{text}</p>
      <div className="kavan-select-date-sub_container">
        <p>{value}</p>
        <img onClick={onClick} ref={ref} src={greenIcon} />
      </div>
    </div>
  ));
  return (
    <WithAuth component={
      <>
      <Navbar />
      <div className="kawn-add-phone_number">
        <div className="kwn-fill_out_form-title_container">
          <h1>Availability</h1>
          <h2>Choose your days and hours for work</h2>
        </div>
        <DropDown
          options={WeekArr}
          selected={weekSelect}
          setSelected={setWeekSelected}
          text={"Day start"}
        />
        <DropDown
          options={WeekArr}
          selected={weekSelect2}
          setSelected={setWeekSelected2}
          text={"Day end"}
        />
        <DropDown
          options={new Array(24).fill(0).map((i, _) => i+1).map(h => `${new Date().toISOString().split("T")[0]}T${h < 9 ? `0${h}` : h}:00:00Z`)}
          selected={startDate}
          setSelected={setStartDate}
          text={"Start time"}
        />

        <DropDown
          options={new Array(24).fill(0).map((i, _) => i+1).map(h => `${new Date().toISOString().split("T")[0]}T${h < 9 ? `0${h}` : h}:00:00Z`).filter(x => x < startDate)}
          selected={endDate}
          setSelected={setEndDate}
          text={"End time"}
        />
        <div style={{ marginTop: "3.7rem" }}>
          <Button onClick={() => {
            const search = setParam(params, {
              startDate,
              endDate,
              dayStart: weekSelect?.value,
              dayEnd: weekSelect2?.value,
            })
            navigate(`/addQualification?${search}`)
          }}>Next</Button>
        </div>
        <div className="kawan-add_later-container">
          <p>Add Later</p>
        </div>
      </div>
      <Footer />
    </>
    }/>
  );
};

export default Availability;
