import React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Footer, Navbar, TextInput } from "../../../components";
import DegreeCaption from "../../../components/degreeCaption/degreeCaption";
import WhiteButton from "../../../components/whiteButton/whiteButton";

function AddDegree() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="kawn-add-phone_number">
        <div className="kwn-fill_out_form-title_container">
          <h1>Add Qualification</h1>
          <h2>Add your highest qualifictaion detail here</h2>
        </div>
        <DegreeCaption />
        <div style={{ marginTop: "4.4rem" }}>
          <WhiteButton text={"ADD EDUCATION"} />
        </div>
        <div style={{ marginTop: "33.7rem" }}>
          <Button onClick={() => navigate("/addExperience")}>Next</Button>
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
