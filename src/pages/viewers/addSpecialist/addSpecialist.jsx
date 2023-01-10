import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cross } from "../../../assets";

import { Button, Footer, Navbar, TextInput } from "../../../components";

const AddSpecialist = () => {
  const navigate = useNavigate();
  const [specialiezedText, setSpecialiezedText] = useState("");
  const [specialiezedArray, setSpecialiezedArray] = useState([]);

  const addSpecialiezed = () => {
    var data = [...specialiezedArray];
    data.push({ id: data.length + 1, title: specialiezedText });
    setSpecialiezedArray(data);
    setSpecialiezedText("");
  };

  const subtractSpecialiezed = (value) => {
    var data = [...specialiezedArray];
    var final = data.filter((element) => element.id !== value);
    setSpecialiezedArray(final);
  };
  return (
    <>
      <Navbar />
      <div className="kawn-add-phone_number">
        <div className="kwn-fill_out_form-title_container">
          <h1>Specialist</h1>
          <h2>Add your field in which you are specialist</h2>
        </div>
        <TextInput
          value={specialiezedText}
          onKeyPress={(e) => e.key === "Enter" && addSpecialiezed()}
          onChange={(text) => setSpecialiezedText(text.target.value)}
          type={"text"}
          title={"Specialist"}
          placeholder={"Most specialist disease treated"}
        />
        <div className="kwn-fill_out_form-specialiezed_View">
          {specialiezedArray
            .map((item) => {
              return (
                <div>
                  <p>{item.title}</p>
                  <img
                    alt=""
                    onClick={() => subtractSpecialiezed(item.id)}
                    src={cross}
                  />
                </div>
              );
            })
            .slice(0, 5)}
        </div>
        <div style={{ marginTop: "8.7rem" }}>
          <Button onClick={() => navigate("/addLanguage")}>Next</Button>
        </div>
        <div className="kawan-add_later-container">
          <p>Add Later</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddSpecialist;
