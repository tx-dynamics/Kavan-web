import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Footer, Navbar, TextInput } from "../../../components";
import { getAllParams } from "../../../urlParams";
import DegreeCaption from "../../../components/degreeCaption/degreeCaption";
import WhiteButton from "../../../components/whiteButton/whiteButton";

function AddDegree() {
  const navigate = useNavigate();
  const degrees = JSON.parse(getAllParams()?.degrees ?? '{"degrees": []}')?.degrees
  return (
    <>
      <Navbar />
      <div className="kawn-add-phone_number">
        <div className="kwn-fill_out_form-title_container">
          <h1>Add Qualification</h1>
          <h2>Add your highest qualifictaion detail here</h2>
        </div>
        {degrees.map(props => {
          console.log(props)
          return <DegreeCaption year={props.year} country={props.country} degree={props.qualification} university={props.university}/>
        })}
        <div style={{ marginTop: "4.4rem" }}>
          <WhiteButton text={"ADD EDUCATION"} onClick={() => navigate(`/addQualification?${window.location.href.split('?')[1]}`)}/>
        </div>
        <div style={{ marginTop: "33.7rem" }}>
          <Button onClick={() => navigate(`/addExperience?${window.location.href.split('?')[1]}`)}>Next</Button>
        </div>
        <div className="kawan-add_later-container">
          <p>Add Later</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddDegree;
