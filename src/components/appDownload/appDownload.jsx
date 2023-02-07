import React from "react";
import { androidQR, appleQR } from "../../assets";
import "./appDownload.css";

const AppDownload = () => {
  return (
    <div className="kawan-home-app-download">
      <h1>Download Now</h1>
      <div className="kawan-ap-download-qr">
        <img src={appleQR} />
        <img src={androidQR} />
      </div>
    </div>
  );
};

export default AppDownload;
