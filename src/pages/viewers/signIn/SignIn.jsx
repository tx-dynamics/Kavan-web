import React from "react";
import { apple, facebookBlue, google } from "../../../assets";
import { Navbar, Footer, TextInput, Button } from "../../../components";
import { useNavigate } from "react-router-dom";
import "./signIn.css";

export default function SignIn() {
  const navigate = useNavigate();
  const socialArray = [
    {
      id: 1,
      title: "Continue with Google",
      icon: google,
    },
    {
      id: 1,
      title: "Continue with Facebook",
      icon: facebookBlue,
    },
    {
      id: 1,
      title: "Continue with Apple",
      icon: apple,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="kwn-fill_out_form-main_container">
        <div className="kwn-fill_out_form-title_container">
          <h1>Welcome Back</h1>
          <h2>Register yourself to start with KAVAN HEALTH</h2>
        </div>
        <div className="kwn-sign_in-form_container">
          <TextInput
            type={"text"}
            title={"Email"}
            placeholder={"EX:Lonnie@gmail.com"}
          />
          <TextInput
            type={"password"}
            title={"Password"}
            placeholder={"************"}
          />
        </div>
        <div className="kwn-sign_in-forgot_container">
          <p className="kwn-sign_in-new_to_kavan">
            New to Kavan Health?
            <span onClick={() => navigate("/signUp")}> Signup</span>
          </p>
          <p
            onClick={() => navigate("/forgotpassword")}
            className="kwn-sign_in-forgot_password"
          >
            Forget password?
          </p>
        </div>
        <div className="kwn-sign_in-Button_container">
          <Button onClick={() => navigate("/dashboard/AdminHome")}>
            Sign In
          </Button>
        </div>
        <h3>OR</h3>
        <div className="kwn-sign_in-social_container">
          {socialArray.map((item) => {
            return (
              <div>
                <img alt="" src={item.icon} />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
