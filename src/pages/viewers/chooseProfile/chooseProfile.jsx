import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Footer, Navbar } from "../../../components";

const category = [
  {
    text: "Psicólogo",
    id: 1,
  },
  {
    text: "Coach",
    id: 2,
  },
];

const ChooseProfile = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState({
    text: "Psicólogo",
  });

  const toNavigate = () => {
    if (select.text == "Psicólogo") {
      navigate("/psychologist");
    } else {
      navigate("/coach");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="kwn-fill_out_form-main_container">
        <div className="kwn-fill_out_form-title_container">
          <h1>Verificación del perfil del Profesional</h1>
          <h2>¿Cuál es su profesión?</h2>
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
              style={{
                color: select.text === item.text ? "#fff" : "#2D292A",
                paddingTop: 0,
              }}
            >
              {item.text}
            </h3>
          </div>
        ))}
        <div style={{ marginTop: "25rem" }}>
          <Button onClick={toNavigate}>Siguiente</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChooseProfile;
