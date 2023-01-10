import React, { useState } from "react";
import "./phoneNumber.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import { Button, Footer, Navbar } from "../../../components";

const PhoneNumber = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="kawn-add-phone_number">
        <div className="kwn-fill_out_form-title_container">
          <h1>Phone Number</h1>
          <h2>Add your phone number</h2>
        </div>

        <PhoneInput
          className="phone-input"
          placeholder="Enter phone number"
          international
          defaultCountry="RU"
          value={value}
          onChange={setValue}
        />

        <div className="kawan-phn-nmbr-btn-container">
          <Button onClick={() => navigate("/verifyPhoneNumber")}>Verify</Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PhoneNumber;
