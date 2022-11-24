import React, { useState } from "react";
import { dummy2, edit, filled } from "../../../assets";
import { useNavigate } from "react-router-dom";
import { Button, Footer, Navbar } from "../../../components";
import "./createProfile.css";

const CreateProfile = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const imgOptionsArray = [
    {
      id: 1,
      title: "Be a close up your face",
    },
    {
      id: 2,
      title: "Show your face clearly-No sunglassws!",
    },
    {
      id: 3,
      title: "Be clear and crisp",
    },
    {
      id: 4,
      title: "Have a nuetral background",
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

  return (
    <div>
      <Navbar />
      <div className="kwn-fill_out_form-main_container">
        <div className="kwn-fill_out_form-title_container">
          <h1>Create Profile</h1>
          <h2>Add a professional photo and submit profile</h2>
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
          <h2>Your photo should:</h2>
          {imgOptionsArray.map((item, index) => {
            return (
              <div className="kwn-create_profile-img_options">
                <img alt="" src={filled} />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
        <Button onClick={() => navigate("/registrationPending")}>Submit</Button>
        <div className="kwn-create_profile-add_later">
          <p>Add Later</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateProfile;
