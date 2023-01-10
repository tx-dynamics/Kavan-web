import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

import { calenderIcon } from "../../../assets";

import { Button, Footer, Navbar, TextInput } from "../../../components";
import DropDown from "../../../components/DropDown/DropDown";
import SelectDate from "../../../components/selectDate/selectDate";

const countryArr = [
  { label: "England", value: "england" },
  { label: "Denmarkt", value: "denmark" },
  { label: "Estonia", value: "estonia" },
  { label: "Finland", value: "finland" },
  { label: "Iceland", value: "iceland" },
  { label: "France", value: "france" },
];
const AddExperience = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();
  const positionArr = [
    { label: "Psychologist", value: "Psychologist" },
    { label: "Psychiatrists", value: "psychiatrists" },
  ];
  const hospitalArr = [
    { label: "The mayo clinic", value: "the mayo clinic" },
    { label: "Alpha clinic", value: "alpha clinic" },
    { label: "Rising sun clinic", value: "rising sun clinic" },
  ];
  const [selected, setSelected] = useState({
    label: "Psychologist",
    value: "Psychologist",
  });
  const [selectHospital, setSelectHospital] = useState({
    label: "Rising sun clinic",
    value: "rising sun clinic",
  });

  const [selectCountry, setSelectCountry] = useState({
    label: "USA",
    value: "usa",
  });

  const SelectDate2 = forwardRef(({ value, onClick, text }, ref) => (
    <div className="kavan-select-date-container">
      {/* <button className="example-custom-input" onClick={onClick} ref={ref}>
        {value}
      </button> */}
      <p>{text}</p>
      <div className="kavan-select-date-sub_container">
        <p>{value}</p>
        <img onClick={onClick} ref={ref} src={calenderIcon} />
      </div>
    </div>
  ));

  return (
    <>
      <Navbar />
      <div className="kawn-add-phone_number">
        <div className="kwn-fill_out_form-title_container">
          <h1>Add Qualification</h1>
          <h2>Add your highest qualifictaion detail here</h2>
        </div>
        <DropDown
          options={positionArr}
          selected={selected}
          setSelected={setSelected}
          text={"Position"}
        />

        <DropDown
          options={hospitalArr}
          selected={selectHospital}
          setSelected={setSelectHospital}
          text={"hospital Name"}
        />

        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          withPortal
          portalId="root-portal"
          customInput={<SelectDate2 text={"Start Date"} />}
          dateFormat="d MMMM yyyy"
          maxDate={new Date()}
        />

        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          withPortal
          portalId="root-portal"
          customInput={<SelectDate2 text={"End Date"} />}
          dateFormat="d MMMM yyyy"
          maxDate={new Date()}
        />
        <DropDown
          text={"Country"}
          options={countryArr}
          selected={selectCountry}
          setSelected={setSelectCountry}
        />
        <div style={{ marginTop: "3.7rem" }}>
          <Button onClick={() => navigate("/addExperienceDegree")}>Save</Button>
        </div>
        <div className="kawan-add_later-container">
          <p>Add Later</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddExperience;
