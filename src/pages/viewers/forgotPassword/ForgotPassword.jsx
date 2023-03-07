import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer, TextInput, Button } from "../../../components";
import { authReq } from "../../../requests";
import "./forgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  return (
    <div>
      <Navbar />
      <div className="kwn-fill_out_form-main_container">
        <div className="kwn-fill_out_form-title_container">
          <h1>Email Address</h1>
          <h2>Enter Email Associated with your account</h2>
        </div>
        <div className="kwn-forgot_password-form_container">
          <TextInput
            type={"text"}
            title={"Email"}
            value={email}
            onChange={ev => setEmail(ev.target.value)}
            placeholder={"Johndoe@mail.com"}
          />
        </div>

        <div className="kwn-forgot_password-Button_container">
          <Button onClick={async () => {
            await authReq('POST', '/user/forgotPassword', {email})
            navigate(`/verifyEmailForgetPassword?email=${encodeURIComponent(email)}`)
          }}>Verify</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
