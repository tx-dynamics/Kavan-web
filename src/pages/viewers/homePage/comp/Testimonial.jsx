import React from "react";
import { dummy2 } from "../../../../assets";
import "./testimonial.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const Testimonial = ({ item }) => {
  const [value, setValue] = React.useState(2);
  return (
    <div className="kwn-home-testi-comp-main_container">
      <div className="kwn-home-testi-comp-text-container">
        <p>{item.text}</p>
      </div>
      <div className="kvn-home-testi-com-review-main_container">
        <div className="kvn-home-testi-con-review-pro-pic-container">
          <img alt="" src={dummy2} />
        </div>
        <div className="kvn-home-testi-com-review-name-container">
          <h2>Rifki Abdurachman</h2>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            readOnly={true}
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
