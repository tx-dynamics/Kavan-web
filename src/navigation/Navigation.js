import React from "react";
import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Home from '../pages/homePage/HomePage';
import AboutUs from '../pages/aboutUs/AboutUs';

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
