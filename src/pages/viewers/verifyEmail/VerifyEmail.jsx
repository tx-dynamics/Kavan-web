import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Footer, Navbar } from "../../../components";
import OtpInput from "react18-otp-input";
import "./verifyEmail.css";
import { req } from "../../../requests";
const VerifyEmail = () => {
  const [otp, setOtp] = useState("");
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
          <div style={{ marginTop: "3rem", marginRight: "0" }}>
            <Button onClick={async () => {
              const { token, refreshToken } = await req('POST', '/user/verify', { email, otp, device: { id: 'web', deviceToken: "MockToken" } })
              localStorage.setItem('kawan_accessToken', token)
              localStorage.setItem('kawan_refreshToken', refreshToken)
              navigate("/createProfile")
            }}>Verify</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VerifyEmail;
