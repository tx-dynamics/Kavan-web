import React from "react";
import { Routes, Route } from "react-router-dom";
import * as Admin from "../../pages/admin";

const PacientsStack = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin.Pacients />} />
    </Routes>
  );
};

export default PacientsStack;
