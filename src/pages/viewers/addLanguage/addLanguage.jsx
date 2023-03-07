import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cross } from "../../../assets";

import { Button, Footer, Navbar, TextInput } from "../../../components";
import { getAllParams, setParam } from "../../../urlParams";

const AddLanguage = () => {
  const navigate = useNavigate();
  const params = getAllParams()
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
          <h1>Languages</h1>
          <h2>
            Select the languages that you can give consultancy to patients
          </h2>
        </div>
        <TextInput
          value={specialiezedText}
          onKeyPress={(e) => e.key === "Enter" && addSpecialiezed()}
          onChange={(text) => setSpecialiezedText(text.target.value)}
          type={"text"}
          title={"Languages"}
          placeholder={"Select languages"}
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
          <Button onClick={() => {
            const search = setParam(params, "languages", JSON.stringify({ languages: specialiezedArray.map(x => x?.title).filter(x => !!x) }))
            navigate(`/createProfile?${search}`)
          }}>Next</Button>
        </div>
        <div className="kawan-add_later-container">
          <p>Add Later</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddLanguage;
