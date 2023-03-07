import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Footer, Navbar } from "../../../components";
import OtpInput from "react18-otp-input";
import "./verifyEmail.css";
import { req } from "../../../requests";
const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get('email');
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="kwn-fill_out_form-main_container">
        <div className="kwn-fill_out_form-title_container">
          <h1>Verify Email</h1>
          <h2>Enter the code was sent to your given email</h2>
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
        <div className="kwn-verify_email-Button_container">
          <p>Change Email address</p>
          <small style={{ color: 'red' }}>{errorMessage}</small>
          <div style={{ marginTop: "3rem", marginRight: "0" }}>
            <Button onClick={async () => {
              const data = await req('POST', '/user/verifyOTPResetPassword', { email, otp, device: { id: 'web', deviceToken: "MockToken" } })
              if(data?.correct) {
                navigate(`/confirmPassword?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`)
              }
              else setErrorMessage("Incorrect OTP")
            }}>Verify</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VerifyEmail;
