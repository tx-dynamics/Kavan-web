import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./psychologist.css";
import { Button, Footer, Navbar, TextInput } from "../../../components";
import DropDown from "../../../components/DropDown/DropDown";
import { CleaningServices } from "@mui/icons-material";

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

const Psychologist = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);
  const [skill, setSkill] = useState([
    {
      id: 1,
      title: "Ansiedad",
      value: false,
    },
    {
      id: 2,
      title: "Depresión",
      value: false,
    },
    {
      id: 3,
      title: "Trastorno Obsesivo Compulsivo",
      value: false,
    },
    {
      id: 4,
      title: "Autoestima",
      value: false,
    },
    {
      id: 5,
      title: "Duelo",
      value: false,
    },
    {
      id: 6,
      title: "Conducta: familia, amigos, pareja",
      value: false,
    },
    {
      id: 7,
      title: "Terapia Sexual",
      value: false,
    },
    {
      id: 8,
      title: "Terapia de pareja",
      value: false,
    },
    {
      id: 9,
      title: "Transtorno de la Conducta Alimenticia",
      value: false,
    },
    {
      id: 10,
      title: "Dependencia Emocional",
      value: false,
    },
    {
      id: 11,
      title: "Dependencia de Sustancias",
      value: false,
    },
    {
      id: 12,
      title: "Dependencia a las tecnologias",
      value: false,
    },

    {
      id: 13,
      title: "Orientación laboral",
      value: false,
    },
    {
      id: 14,
      title: "Otros: “ “",
      value: false,
    },
  ]);

  const [emoSkill, setEmoSkill] = useState([
    {
      id: 1,
      title: "Gestión de las emociones",
      value: false,
    },
    {
      id: 2,
      title: "Gestión del estrés",
      value: false,
    },
    {
      id: 3,
      title: "Comunicación",
      value: false,
    },
    {
      id: 4,
      title: "Resolución de conflictos",
      value: false,
    },
    {
      id: 5,
      title: "Control de impulsos",
      value: false,
    },
    {
      id: 6,
      title: "Identificación de necesidades",
      value: false,
    },
    {
      id: 7,
      title: "Sanación de un trauma",
      value: false,
    },
    {
      id: 8,
      title: "Reducir el desgaste o agotamiento mental",
      value: false,
    },
    {
      id: 9,
      title: "Aumentar la autoestima",
      value: false,
    },
    {
      id: 10,
      title: "Identificación de necesidades",
      value: false,
    },
    {
      id: 11,
      title: "Otros: “ ”",
      value: false,
    },
  ]);

  const [selectSkill, setSelectSkill] = useState([]);
  const [selectEmoSkill, setSelectEmoSkill] = useState([]);

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

  const skillhandleChange = (index) => {
    const arr = [...skill];
    arr[index]["value"] = !arr[index]["value"];
    setSkill(arr);
    const selectArr = arr.filter((val) => val["value"] == true);
    setSelectSkill(selectArr);
  };

  const emohandleChange = (index) => {
    const arr = [...emoSkill];
    arr[index]["value"] = !arr[index]["value"];
    setEmoSkill(arr);
    const selectArr = arr.filter((val) => val["value"] == true);
    setSelectEmoSkill(selectArr);
  };
  return (
    <div>
      <Navbar />

      <div className="kwn-fill_out_form-main_container">
        <div className="kawan-pychologist-title-container">
          <h1>Verificación del perfil del Profesional </h1>
          <h2>
            Para completar la verificación de su perfil responda a las
            siguientes preguntas:{" "}
          </h2>
        </div>
        <div style={{ marginTop: "5.6rem" }}></div>
        <div className="kwn-choose-profile-drop-down-container">
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
          <TextInput
            textStyle={{ color: "#000", fontWeight: "600" }}
            type={"text"}
            placeholder={"749839"}
            inputStyle={{ fontSize: 20 }}
            style={{ width: "44rem" }}
            title={"Numero de Colegiado"}
          />

          <DropDown
            textStyle={{ color: "#000", fontWeight: "600" }}
            options={genderArr}
            selected={gender}
            setSelected={setGender}
            text={"¿Cuál es su sexo?"}
          />
        </div>
        <div className="kwn-choose-profile-drop-down-container">
          <TextInput
            textStyle={{ color: "#000", fontWeight: "600" }}
            type={"date"}
            placeholder={"749839"}
            inputStyle={{ fontSize: 20 }}
            style={{ width: "44rem" }}
            title={"Select Duration"}
          />
        </div>
        <div className="kawan-pycholo-skill-select-container">
          <h1>¿En que estas especializado? Elige top 5 trastornos</h1>

          <div className="kawan-pyscholo-skill-select-sub-container">
            {skill.map((item, index) => {
              return (
                <CheckBox
                  item={item}
                  checked={item.value}
                  handleChange={skillhandleChange}
                  index={index}
                />
              );
            })}
          </div>
        </div>
        <div
          style={{ marginTop: "3rem" }}
          className="kawan-pycholo-skill-select-container"
        >
          <h1>
            Un gran número de pacientes están interesados en aprender o mejorar
            alguna de las siguientes habilidades emocionales. ¿En qué
            habilidades te sientes más cómodo trabajando?
          </h1>

          <div className="kawan-pyscholo-skill-select-sub-container">
            {emoSkill.map((item, index) => {
              return (
                <CheckBox
                  item={item}
                  checked={item.value}
                  handleChange={emohandleChange}
                  index={index}
                />
              );
            })}
          </div>
        </div>
        <div
          style={{ marginTop: "3.6rem" }}
          className="kwn-choose-profile-drop-down-container"
        >
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
    </div>
  );
};

const CheckBox = ({ checked, handleChange, item, index }) => {
  return (
    <div className="kawan-checkbox-container">
      <input
        className="kawa-checkbox"
        type="checkbox"
        checked={checked}
        onChange={() => handleChange(index)}
        style={{
          background: checked ? "#3098f2" : "none",
        }}
      />
      <p>{item.title}</p>
    </div>
  );
};

export default Psychologist;
