import React, { useState } from "react";
import { LeftSideBar, RightSideBar } from "../../../components";
import * as Admin from "../";

import "./layout.css";
import { Route, Routes } from "react-router-dom";
import AppointmentStack from "../../../navigation/appointmentStack/AppointmentStack";
import ChatStack from "../../../navigation/chatStack/ChatStack";
import SettingStack from "../../../navigation/settngStack/SettingStack";
import TopMenu from "../../../components/topMenu/TopMenu";

const Layout = () => {
  const [toggle, setToggle] = useState(false);
  const togglefun = () => {
    setToggle(!toggle);
  };
  let flag = true;
  return (
    <div className="kwn-admin-layout">
      <LeftSideBar />
      <div className="kwn-admin-overflow">
        <div
          className={
            toggle ? "kwn-left-sidebar-active" : "kwn-left-sidebar-non-active"
          }
        >
          <LeftSideBar flag={flag} togglefun={togglefun} />
        </div>
        <div>
          <TopMenu togglefun={togglefun} />
        </div>

        <Routes>
          <Route path="AdminHome" element={<Admin.Dashboard />} />
          <Route
            exact
            path="AppointmentStack/*"
            element={<AppointmentStack />}
          />
          <Route exact path="ChatStack/*" element={<ChatStack />} />
          <Route exact path="SettingStack/*" element={<SettingStack />} />
        </Routes>
      </div>

      <RightSideBar />
    </div>
  );
};

export default Layout;
