import React from "react";
import { Navbar, Footer, TextInput, Button } from "../../../components";
import AppDownload from "../../../components/appDownload/appDownload";
import "./contactUs.css";

export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="kwn-contact_us-main_container">
        <h1>Contact Us</h1>
        <div className="kwn-contact_us-form_container">
          <div className="kwn-contact_us-form_sub-container1">
            <TextInput
              type={"text"}
              title={"Name"}
              placeholder={"EX:Lonnie Murphy"}
            />
            <TextInput
              type={"text"}
              title={"Email"}
              placeholder={"EX:Lonnie@gmail.com"}
            />
          </div>

          <TextInput
            type={"text"}
            title={"Subject"}
            placeholder={"EX:Project complaint"}
          />
          <div
            className="kawan-contact-us-message-container"
            style={{ width: "100%" }}
          >
            <TextInput
              type={"text"}
              textarea
              title={"Message"}
              placeholder={"Write Here"}
              style={{ width: "100%" }}
            />
          </div>

          <div className="kwn-contact_us-Button_container">
            <Button>Submit</Button>
          </div>
        </div>
      </div>
      <div>
        <AppDownload />
      </div>
      <div style={{ marginTop: "7rem" }}></div>
      <Footer />
    </div>
  );
}
