import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Footer, Navbar, TextInput } from "../../../components";
import DropDown from "../../../components/DropDown/DropDown";

const countryArray = [
  { label: "Austria", value: "austria" },
  { label: "Sweden", value: "sweden" },
  { label: "USA", value: "usa" },
  { label: "U.K", value: "uk" },
  { label: "Germany", value: "germany" },
  { label: "Europe", value: "europe" },
  { label: "France", value: "france" },
];

const ageArray = [
  { label: "20-25", value: "20-25" },
  { label: "25-30", value: "25-30" },
  { label: "30-35", value: "30-35" },
  { label: "35-40", value: "35-40" },
  { label: "40-45", value: "45-50" },
  { label: "50-55", value: "50-55" },
  { label: "55-60", value: "55-60" },
];

const genderArr = [
  {
    label: "Hombre",
    value: "hombre",
  },
  {
    label: "Mujer",
    value: "Mujer",
  },
];

const availableArr = [
  {
    label: "Mañana",
    value: "mañana",
  },
  {
    label: "Esta noche",
    value: "esta noche",
  },
];

const Coach = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);
  const [countrySelect, setCountrySelected] = useState({
    label: "Spain",
    value: "spain",
  });
  const [ageSelect, setAgeSelect] = useState({
    label: "20-25",
    value: "20-25",
  });
  const [availableSelect, setAvailableSelect] = useState({
    label: "Mañana",
    value: "manana",
  });
  const [gender, setGender] = useState({ label: "Hombre", value: "hombre" });

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <>
      <Navbar />
      <div className="kwn-fill_out_form-main_container">
        <div className="kawan-pychologist-title-container">
          <h1>Verificación del perfil del Profesional </h1>
          <h2>
            Para completar la verificación de su perfil responda a las
            siguientes preguntas:
          </h2>
        </div>
        <div
          style={{ marginTop: "5.6rem" }}
          className="kwn-choose-profile-drop-down-container"
        >
          <DropDown
            textStyle={{ color: "#000", fontWeight: "600" }}
            options={countryArray}
            selected={countrySelect}
            setSelected={setCountrySelected}
            text={"Pais de Residencia"}
          />

          <DropDown
            textStyle={{ color: "#000", fontWeight: "600" }}
            options={ageArray}
            selected={ageSelect}
            setSelected={setAgeSelect}
            text={"¿Cuál es su edad?"}
          />
        </div>
        <div className="kwn-choose-profile-drop-down-container">
          <DropDown
            textStyle={{ color: "#000", fontWeight: "600" }}
            options={genderArr}
            selected={gender}
            setSelected={setGender}
            text={"¿Cuál es su sexo?"}
          />

          <TextInput
            textStyle={{ color: "#000", fontWeight: "600" }}
            type={"date"}
            placeholder={"749839"}
            inputStyle={{ fontSize: 20 }}
            style={{ width: "44rem" }}
            title={"Select Duration"}
          />
        </div>
        <div className="kwn-choose-profile-drop-down-container">
          <DropDown
            textStyle={{ color: "#000", fontWeight: "600" }}
            options={availableArr}
            selected={availableSelect}
            setSelected={setAvailableSelect}
            text={"¿Cuándo podrías atender a pacientes?"}
          />

          <TextInput
            textStyle={{ color: "#000", fontWeight: "600" }}
            type={"text"}
            placeholder={"30 EUR"}
            inputStyle={{ fontSize: 20 }}
            style={{ width: "52rem" }}
            title={"Aproximadamente ¿Cuál es el precio medio de cada sesión?"}
          />
        </div>

        <div className="kawan-psycholo-term-condition-container">
          <div className="kawan-checkbox-container">
            <input
              className="kawa-checkbox"
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              style={{
                background: checked ? "#3098f2" : "none",
              }}
            />
            <h4>
              Acepto las{" "}
              <span style={{ color: "#006039" }}>
                Condiciones del servicio y
              </span>{" "}
              la Política{" "}
              <span style={{ color: "#006039" }}>de privacidad</span> .
            </h4>
          </div>
        </div>
        <div style={{ marginTop: "4.8rem" }}>
          <Button onClick={() => navigate("/specialist")}>Verificar</Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Coach;
