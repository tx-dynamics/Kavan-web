import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "react18-otp-input";

import { Button, Footer, Navbar } from "../../../components";
import "./verifyPhoneNumber.css";
const VerifyPhoneNumber = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="kwn-fill_out_form-main_container">
        <div className="kwn-fill_out_form-title_container">
          <h1>Verify Phone Number</h1>
          <h2>Add your verification code</h2>
        </div>
        <div className="kwn-verify_email-otp_container">
          <OtpInput
            inputStyle="kwn-verify_email-otp_style"
            numInputs={4}
            onChange={(value) => setOtp(value)}
            separator={<span> </span>}
            isInputNum={true}
            shouldAutoFocus
            value={otp}
            containerStyle="kwn-verify_email-otp_container_style"
          />
        </div>
        <div className="kwn-verify_phone_number-Button_container">
          <p>
            Didn’t recieve code,<span>Resend</span>
          </p>
        </div>

        <div style={{ marginTop: "2rem" }}>
          {/* <Button onClick={() => navigate("/specialist")}>Verify</Button> */}
          <Button onClick={() => navigate("/choosePofile")}>Verify</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VerifyPhoneNumber;
