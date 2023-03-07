import React, { useState } from "react";
import "./specialList.css";
import { useNavigate } from "react-router-dom";

import { Button, Footer, Navbar } from "../../../components";
import { WithAuth } from "../../../components/auth/auth";
import { getAllParams, setParam } from "../../../urlParams";

const category = [
  {
    text: "CLINICAL",
    id: 1,
  },
  {
    text: "ABNORMAL",
    id: 2,
  },
  {
    text: "GENERAL",
    id: 3,
  },
  {
    text: "SOCIAL",
    id: 4,
  },
  {
    text: "DEVELOPMENT",
    id: 5,
  },
  {
    text: "COGNITIVE",
    id: 6,
  },
];

const SpecialList = () => {
  const navigate = useNavigate();
  const params = getAllParams()
  const [select, setSelect] = useState({
    text: "Clinical",
  });
  return (
    <WithAuth component={
      <div>
        <Navbar />
        <div className="kawn-add-phone_number">
          <div className="kwn-fill_out_form-title_container">
            <h1>Select Category</h1>
            <h2>Please select category in which your specialist</h2>
          </div>

          {category.map((item) => (
            <div
              style={{
                background: select.text === item.text ? "#006039" : "#fff",
                border: select.text == item.text ? "none" : "1px solid #006039",
              }}
              className="kavan-select-specialty-container"
              onClick={() => {
                setSelect(item);
              }}
            >
              <h3
                style={{ color: select.text === item.text ? "#fff" : "#2D292A" }}
              >
                {item.text}
              </h3>
              <p
                style={{ color: select.text === item.text ? "#fff" : "#2D292A" }}
              >
                Psychologist
              </p>
            </div>
          ))}
          <div style={{ marginTop: "5rem", marginBottom: "4rem" }}>
            <Button onClick={() => navigate(`/aboutYourself?${setParam(params, 'speciality', select.text)}`)}>Next</Button>
          </div>
        </div>
        <Footer />
      </div>
    }/>
  );
};

export default SpecialList;
