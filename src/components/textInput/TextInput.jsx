import React, { useState } from "react";
import { arrowDown, hide, show } from "../../assets";
import "./textInput.css";

const TextInput = (props) => {
  const [isFoucs, setisFocus] = useState(false);

  return (
    <div className="kwn-input_container" style={props.style}>
      <p style={props.textStyle}>{props.title}</p>
      {props.textarea ? (
        <textarea
          style={{ borderColor: isFoucs && "#006039", ...props.style }}
          onFocus={() => setisFocus(true)}
          onBlur={() => setisFocus(false)}
          placeholder={props.placeholder}
        />
      ) : (
        <div
          className="kwn-input_container_input"
          style={{ borderColor: isFoucs && "#006039", ...props.style }}
        >
          {props.type === "dropdown" ? (
            <p>
              {" "}
              {props.item.length == 0
                ? props.placeholder
                : props.item?.text}{" "}
            </p>
          ) : (
            <input
              // disabled={props.disabled}
              style={props.inputStyle}
              onFocus={() => setisFocus(true)}
              onBlur={() => setisFocus(false)}
              onKeyPress={props.onKeyPress}
              onChange={props.onChange}
              value={props.value}
              type={
                props.type === "password"
                  ? props.eyeValue
                    ? "password"
                    : "text"
                  : props.type
              }
              placeholder={props.placeholder}
            />
          )}

          {props.type === "password" && (
            <img
              alt=""
              onClick={props.onClickEye}
              src={props.eyeValue ? show : hide}
            />
          )}
          {props.type === "dropdown" && (
            <img alt="" onClick={props.onClickDropDown} src={arrowDown} />
          )}
          {props.dropDownValue && (
            <div
              onClick={props.onClickDropDown}
              className="kwn-dropdown_container"
              style={props.style}
            >
              {props.arry.map((item) => (
                <p
                  onClick={() => {
                    props.setItem(item);
                  }}
                >
                  {item.text}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TextInput;
