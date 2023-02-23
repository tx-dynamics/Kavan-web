import React from "react";
import { dummy2 } from "../../../../assets";
import "./testimonial.css";
import Rating from "@mui/material/Rating";

const Testimonial = ({ item, props }) => {
  return (
    <div className="kwn-home-testi-comp-main_container" style={{ ...props }}>
      <div className="kwn-home-testi-comp-text-container">
        <p>{item.text}</p>
      </div>
      <div className="kvn-home-testi-com-review-main_container">
        <div className="kvn-home-testi-con-review-pro-pic-container">
          <img alt="" src={item.image} />
        </div>
        <div className="kvn-home-testi-com-review-name-container">
          <h2>{item.name}</h2>
          {console.log("Rating =>", item, item.rating)}
          <Rating name="read-only" value={item.rating ?? 0} readOnly />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
