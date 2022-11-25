import React, { useState } from "react";
import { bell, dummy, dummy1, dummy2, dummy3, menuBurger } from "../../assets";
import "./topMenu.css";

const TopMenu = ({ togglefun }) => {
  const [toggle, setToggle] = useState(false);
  const toggleFun = () => {
    setToggle(!toggle);
  };
  return (
    <div className="kwn-layout-top_menu-main_container">
      <div className="kwn-layout-menu-burger-container" onClick={togglefun}>
        <img src={menuBurger} />
      </div>
      <div className="kwn-layout-profile-image-container">
        <img src={dummy2} />
      </div>

      <div className="kwn-layout-today-appointment-container">
        <h2>Today Appointment</h2>
        <p> See all</p>
      </div>
      <div className="kwn-layout-today-recent_chat-container">
        <h2>Recent Chat</h2>
        <div className="kwn-layout-recent_chat-profile-container">
          <img src={dummy2} />
          <img src={dummy} />
          <img src={dummy3} />
        </div>
      </div>
      <div className="kwn-layout-notification-bell-container">
        <img onClick={toggleFun} src={bell} />
        {toggle ? (
          <div className={"kwn-layout-notification-tooltip-container"}>
            <div className="kwn-layout-notification-tooltip-text-container">
              <p>You were found for appointment.</p>
              <p>You were found for appointment.</p>
              <p>You were found for appointment.</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TopMenu;
