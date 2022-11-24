import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Admin from '../../pages/admin';

const ChatStack = () => {
    return (
        <Routes>
            <Route path="/" element={<Admin.Chat />} />
        </Routes>
    );
};

export default ChatStack;
