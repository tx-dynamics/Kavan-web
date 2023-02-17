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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
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
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          withPortal
          portalId="root-portal"
          customInput={<SelectDate2 text={"Start Date"} />}
          maxDate={new Date()}
          // fixedHeight
          timeCaption="Time"
          dateFormat="h:mm aa"
          showTimeSelect
          showTimeSelectOnly
        />

        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          withPortal
          portalId="root-portal"
          customInput={<SelectDate2 text={"End Date"} />}
          maxDate={new Date()}
          showTimeSelect
          showTimeSelectOnly
          timeCaption="Time"
          dateFormat="h:mm aa"
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
