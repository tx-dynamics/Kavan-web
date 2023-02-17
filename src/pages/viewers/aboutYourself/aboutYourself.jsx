import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./aboutYourself.css";
import { Button, Footer, Navbar, TextInput } from "../../../components";
import { WithAuth } from "../../../components/auth/auth";
import { getAllParams, setParam } from "../../../urlParams";

const AboutYourself = () => {
  const navigate = useNavigate();
  const [bio, setBio] = useState('')
  const params = getAllParams();

  useEffect(() => {
    console.log(bio)
  }, [bio])

  return (
    <WithAuth component={
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
            value={bio}
            onChange={ev => setBio(ev.target.value)}
            placeholder={"Write Here"}
          />
          <div style={{ marginTop: "3rem" }}>
            <Button onClick={() => navigate(`/availability?${setParam(params, 'bio', bio)}`)}>Next</Button>
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

export default AboutYourself;
