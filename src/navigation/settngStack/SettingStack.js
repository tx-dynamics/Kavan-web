import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Admin from '../../pages/admin';

const SettingStack = () => {
    return (
        <Routes>
            <Route path="/" element={<Admin.Settings />} />
        </Routes>
    );
};

export default SettingStack;
