import React, { useState } from "react";
import { dummy2 } from "../../../../assets";
import "./testimonial.css";
import { Rate } from "antd";

const Testimonial = ({ item }) => {
  const [value, setValue] = useState("");
  return (
    <div className="kwn-home-testi-comp-main_container">
      <div className="kwn-home-testi-comp-text-container">
        <p>{item.text}</p>
      </div>
      <div className="kvn-home-testi-com-review-main_container">
        <div className="kvn-home-testi-con-review-pro-pic-container">
          <img src={dummy2} />
        </div>
        <div className="kvn-home-testi-com-review-name-container">
          <h2>Rifki Abdurachman</h2>
          <Rate
            style={{ color: "#F8B84E" }}
            allowHalf
            defaultValue={2.5}
            // onChange={setValue}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
