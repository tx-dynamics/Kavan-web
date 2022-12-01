import React from "react";
import { dummy, tick } from "../../../assets";
import { SearchBar } from "../../../components";

import "./sessionEnded.css";
const SessionEnded = () => {
    return (
        <div className="kavan_admin_main_container">
            <div className="kwn-search" style={{ paddingBottom: 0 }}>
                <SearchBar />
            </div>

            <div className="kwn-session_ended-main_view">
                <div className="kwn-session_ended-tick_view">
                    <img src={tick} />
                </div>
                <h2>The Consultation session has been ended</h2>
                <h3>The consultation session has been completed</h3>
                <div className="kwn-session_ended-user_detail">
                    <img src={dummy} />
                    <div>
                        <h3>vandarani aduhai</h3>
                        <h4>Depression</h4>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SessionEnded;
