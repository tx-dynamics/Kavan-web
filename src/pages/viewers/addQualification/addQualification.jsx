import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Footer, Navbar, TextInput } from "../../../components";
import DropDown from "../../../components/DropDown/DropDown";

const qualificationArr = [
  { label: "Phd Psychology", value: "phd psychology" },
  { label: "MS Psychology", value: "ms psychology" },
];

const universityArr = [
  { label: "University of Gujrat", value: "university of gujrat" },
  { label: "University of Punjab", value: "university of punjab" },
];

const countryArr = [
  { label: "England", value: "england" },
  { label: "Denmarkt", value: "denmark" },
  { label: "Estonia", value: "estonia" },
  { label: "Finland", value: "finland" },
  { label: "Iceland", value: "iceland" },
  { label: "France", value: "france" },
];

function AddQualification() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState({
    label: "Phd Psychology",
    value: "phd psychology",
  });
  const [selectUniversity, setSelectUniversity] = useState({
    label: "University of Gujrat",
    value: "university of gujrat",
  });
  const [year, setYear] = useState([
    {
      label: 2023,
      value: 2023,
    },
  ]);

  const [selectCountry, setSelectCountry] = useState({
    label: "England",
    value: "england",
  });

  const [selectYear, setSelectYear] = useState({ label: 2023, value: 2023 });

  useEffect(() => {
    let yr = [];
    for (var y = 2022; y > 1940; y--) {
      yr.push({ label: y, value: y });

      setYear(yr);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="kawn-add-phone_number">
        <div className="kwn-fill_out_form-title_container">
          <h1>Add Qualification</h1>
          <h2>Add your highest qualifictaion detail here</h2>
        </div>
        <div>
          <DropDown
            text={"Qualification"}
            options={qualificationArr}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

        <DropDown
          text={"University"}
          options={universityArr}
          selected={selectUniversity}
          setSelected={setSelectUniversity}
        />
        <DropDown
          text={"Year"}
          options={year}
          selected={selectYear}
          setSelected={setSelectYear}
        />

        <DropDown
          text={"Country"}
          options={countryArr}
          selected={selectCountry}
          setSelected={setSelectCountry}
        />

        <div style={{ marginTop: "2rem" }}>
          <Button onClick={() => navigate("/addDegree")}>Next</Button>
        </div>
        <div className="kawan-add_later-container">
          <p>Add Later</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddQualification;
