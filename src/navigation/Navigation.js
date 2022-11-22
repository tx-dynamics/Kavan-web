import React from "react";
import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from '../pages/viewers/homePage/HomePage';
import AboutUs from '../pages/viewers/aboutUs/AboutUs';

const Navigation = () => {
    const Navigate = useNavigate();
    useEffect(() => {
        Navigate("/");
    }, [])
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
        </Routes>
    );
};

export default Navigation;
