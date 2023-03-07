import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Footer, Navbar, TextInput } from "../../../components";
import { getAllParams } from "../../../urlParams";
import DegreeCaption from "../../../components/degreeCaption/degreeCaption";
import WhiteButton from "../../../components/whiteButton/whiteButton";

function AddExperienceDegree() {
  const navigate = useNavigate();
  const exp = JSON.parse(getAllParams()?.exp ?? '{"exp": []}')?.exp;
  return (
    <>
      <Navbar />
      <div className="kawn-add-phone_number">
        <div className="kwn-fill_out_form-title_container">
          <h1>Add Experience</h1>
          <h2>Add your highest Experience detail here</h2>
        </div>
        {exp.map(el => <DegreeCaption year={`${el.endDate}`.split('-')[0]} university={el.hospital} degree={el.position} country={el.country}/>)}
        <div style={{ marginTop: "4.4rem" }}>
          <WhiteButton text={"ADD EXPERIENCE"} onClick={() => navigate(`/addExperience?${window.location.href.split('?')[1]}`)}/>
        </div>
        <div style={{ marginTop: "33.7rem" }}>
          <Button onClick={() => navigate(`/addSpecialist?${window.location.href.split('?')[1]}`)}>Next</Button>
        </div>
        <div className="kawan-add_later-container">
          <p>Add Later</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddExperienceDegree;
