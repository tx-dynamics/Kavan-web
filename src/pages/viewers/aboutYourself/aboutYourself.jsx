import React from "react";
import { useNavigate } from "react-router-dom";

import "./aboutYourself.css";

import { Button, Footer, Navbar, TextInput } from "../../../components";
const AboutYourself = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="kawn-add-phone_number">
        <div className="kwn-fill_out_form-title_container">
          <h1>About Yourself</h1>
          <h2>Write about yorself that kavan can know you better</h2>
        </div>
        <TextInput
          type={"text"}
          textarea
          title={"Message"}
          placeholder={"Write Here"}
        />
        <div style={{ marginTop: "3rem" }}>
          <Button onClick={() => navigate("/addQualification")}>Next</Button>
        </div>
        <div className="kawan-add_later-container">
          <p>Add Later</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutYourself;
