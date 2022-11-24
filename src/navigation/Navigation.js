import React from "react";
import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Viewers from '../pages/viewers';
import * as Admin from '../pages/admin';
import PrivateRoute from "./privateRoute/PrivateRoute";

const Navigation = () => {
    const Navigate = useNavigate();
    const data = false
    useEffect(() => {
        if (data) {
            Navigate("/");
        } else {
            Navigate("/dashboard/AdminHome");
        }
    }, [data]);
    return (
        <Routes>
            <Route path="/" element={<Viewers.HomePage />} />
            <Route path="/about" element={<Viewers.AboutUs />} />
            <Route path="/contactUs" element={<Viewers.ContactUs />} />
            <Route path="/signUp" element={<Viewers.SignUp />} />
            <Route path="/signIn" element={<Viewers.SignIn />} />
            <Route path="/fillOutForm" element={<Viewers.FillOutForm />} />
            <Route path="/createProfile" element={<Viewers.CreateProfile />} />
            <Route path="/registrationPending" element={<Viewers.RegistrationPending />} />
            <Route path="/registrationSuccessfull" element={<Viewers.RegistrationSuccessfull />} />
            <Route path="/forgotPassword" element={<Viewers.ForgotPassword />} />
            <Route path="/confirmPassword" element={<Viewers.ConfirmPassword />} />
            <Route path="/verifyEmail" element={<Viewers.VerifyEmail />} />
            <Route path="/" element={<PrivateRoute />}>
                <Route path="dashboard/*" element={<Admin.Layout />} />
            </Route>
        </Routes>
    );
};

export default Navigation;
