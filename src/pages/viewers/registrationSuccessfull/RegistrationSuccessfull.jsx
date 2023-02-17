import React from "react";
import { useNavigate } from "react-router-dom";
import { checkWithDots } from "../../../assets";
import { WithAuth } from "../../../components/auth/auth";
import {Button, Footer, Navbar} from "../../../components";
import "./registrationSuccessfull.css";
const RegistrationSuccessfull = () => {
  const navigate = useNavigate();

  return (
      <div>
        <Navbar />
        <div className="kwn-fill_out_form-main_container">
          <div className="kwn-fill_out_form-title_container">
            <div className="kwn-reg_pending-title_container">
              <img alt="" src={checkWithDots} />
            </div>
            <h1>You are Registered Successfully</h1>
            <h2>
              Your profile has been approved by admin. Now can start start
              treating patients
            </h2>
          </div>
          <Button onClick={() => navigate("/specialist")}>
            Start Questions
          </Button>
          <div className="kwn-create_profile-add_later">
            <p>Get Started</p>
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default RegistrationSuccessfull;
