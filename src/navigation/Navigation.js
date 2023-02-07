import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Viewers from "../pages/viewers";
import * as Admin from "../pages/admin";
import PrivateRoute from "./privateRoute/PrivateRoute";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Viewers.HomePage />} />
      <Route path="/about" element={<Viewers.AboutUs />} />
      <Route path="/contactUs" element={<Viewers.ContactUs />} />
      <Route path="/signUp" element={<Viewers.SignUp />} />
      <Route path="/signIn" element={<Viewers.SignIn />} />
      <Route path="/fillOutForm" element={<Viewers.FillOutForm />} />
      <Route path="/createProfile" element={<Viewers.CreateProfile />} />
      <Route
        path="/registrationPending"
        element={<Viewers.RegistrationPending />}
      />
      <Route
        path="/registrationSuccessfull"
        element={<Viewers.RegistrationSuccessfull />}
      />
      <Route path="/forgotPassword" element={<Viewers.ForgotPassword />} />
      <Route path="/confirmPassword" element={<Viewers.ConfirmPassword />} />
      <Route path="/verifyEmail" element={<Viewers.VerifyEmail />} />
      <Route path="/choosePofile" element={<Viewers.ChooseProfile />} />
      <Route
        path="/verifyPhoneNumber"
        element={<Viewers.VerifyPhoneNumber />}
      />
      <Route path="/phoneNumber" element={<Viewers.PhoneNumber />} />
      <Route path="/addExperience" element={<Viewers.AddExperience />} />
      <Route path="/specialist" element={<Viewers.Specialist />} />
      <Route path="/aboutYourself" element={<Viewers.AboutYourself />} />
      <Route path="/addQualification" element={<Viewers.AddQualification />} />
      <Route path="/addDegree" element={<Viewers.AddDegree />} />
      <Route path="/addSpecialist" element={<Viewers.AddSpecialist />} />
      <Route path="/addLanguage" element={<Viewers.AddLanguage />} />
      <Route path="/availability" element={<Viewers.Availability />} />
      <Route path="/psychologist" element={<Viewers.Psychologist />} />
      <Route path="/coach" element={<Viewers.Coach />} />
      <Route
        path="/addExperienceDegree"
        element={<Viewers.AddExperienceDegree />}
      />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="dashboard/*" element={<Admin.Layout />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
