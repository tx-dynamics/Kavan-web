import React, { useState, useEffect } from "react";
import { dummy2, edit, filled } from "../../../assets";
import { useNavigate } from "react-router-dom";
import { Button, Footer, Navbar } from "../../../components";
import "./createProfile.css";
import { WithAuth } from "../../../components/auth/auth";
import { getAllParams, setParam } from "../../../urlParams";
import { authReq } from "../../../requests";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const params = getAllParams()
  const imgOptionsArray = [
    {
      id: 1,
      title: "Un primer plano de su cara",
    },
    {
      id: 2,
      title: "Muestre claramente su rostro",
    },
    {
      id: 3,
      title: "Ser claro y nítido",
    },
    {
      id: 4,
      title: "Tener un fondo neutro",
    },
  ];

  const uploadImage = () => {
    document.getElementById("selectFile").click();
  };

  const onChange = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  useEffect(() => {
    const obj = getAllParams()
    const keys = Object.keys(obj)
    if(keys.length > 0) authReq('PATCH', '/user/updateProfile', obj).then(_ => console.log(_))
  }, [])

  return (
    <WithAuth component={
      <div>
        <Navbar />
        <div className="kwn-fill_out_form-main_container">
          <div className="kwn-fill_out_form-title_container">
            <h1>Creación de Perfil</h1>
            <h2>Añadir una foto profesional</h2>
          </div>
          <div className="kwn-create_profile-img_container">
            <img src={image === "" ? dummy2 : image} alt="" />
            <div
              onClick={() => uploadImage()}
              className="kwn-create_profile-edit_img_view"
            >
              <img src={edit} alt="" />
              <input
                onChange={(e) => onChange(e.target.files[0])}
                id="selectFile"
                type={"file"}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="kwn-create_profile-img_options-container">
            <h2>Su foto debe incluir:</h2>
            {imgOptionsArray.map((item, index) => {
              return (
                <div key={index} className="kwn-create_profile-img_options">
                  <img alt="" src={filled} />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
          <Button onClick={() => navigate(`/specialist`)}>Enviar</Button>
          <div className="kwn-create_profile-add_later">
            <p>Add Later</p>
          </div>
        </div>
        <Footer />
      </div>
    }/>
  );
};

export default CreateProfile;
