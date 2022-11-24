import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clockWithDots } from "../../../assets";
import { Button, Footer, Navbar } from "../../../components";
import "./registrationPending.css";
const RegistrationPending = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="kwn-fill_out_form-main_container">
        <div className="kwn-fill_out_form-title_container">
          <div className="kwn-reg_pending-title_container">
            <img alt="" src={clockWithDots} />
          </div>
          <h1>Your Registration Process is Pending!</h1>
          <h2>
            After reviewing your profile by admin your profile is live then you
            can treat the patients
          </h2>
        </div>
        <Button onClick={() => navigate("/registrationSuccessfull")}>
          Next
        </Button>
        <div
          onClick={() => navigate("/signIn")}
          className="kwn-create_profile-add_later"
        >
          <Link to={"/signIn"}>
            <p>Back to login</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationPending;
