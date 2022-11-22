import React from "react";
import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HomePage, ContactUs, AboutUs } from '../pages/viewers/index'

const Navigation = () => {
    const Navigate = useNavigate();
    useEffect(() => {
        Navigate("/");
    }, [])
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />

        </Routes>
    );
};

export default Navigation;
