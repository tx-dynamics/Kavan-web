import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/navbarLogo.png";
import close from "../../assets/close.png";
import menu from "../../assets/menu.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const Menu = () => (
    <>
      <Link to={"/"}>
        <p>
          <a
            className="kavan__navbar-links_text"
            href="#home"
            style={{
              borderBottomStyle:
                window.location.href === "http://localhost:3000/" ||
                window.location.href === "https://kavan-web-ten.vercel.app/"
                  ? "solid"
                  : "none",
            }}
          >
            Home
          </a>
        </p>
      </Link>
      {/* <Link>
                <p><a className='kavan__navbar-links_text' href='#psychologists' >Psychologists</a></p>
            </Link> */}
      <Link to={"/about"}>
        <p>
          <a
            className="kavan__navbar-links_text"
            href="#about"
            style={{
              borderBottomStyle: window.location.href.includes("/about")
                ? "solid"
                : "none",
            }}
          >
            About us
          </a>
        </p>
      </Link>
      <Link to={"/contactUs"}>
        <p>
          <a
            className="kavan__navbar-links_text"
            href="#contactUs"
            style={{
              borderBottomStyle: window.location.href.includes("/contactUs")
                ? "solid"
                : "none",
            }}
          >
            Contact us
          </a>
        </p>
      </Link>
      <button
        onClick={() => navigate("/signIn")}
        className="kavan__navbar-links_button"
      >
        ¿Eres psicólogo? {"  "}
        <span style={{ color: "#006039", fontWeight: "600" }}>{"  "}Únete</span>
      </button>
    </>
  );
  return (
    <div className="kavan__navbar">
      <div className="kavan__navbar-links_logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="kavan__navbar-links">
        <div className="kavan_navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="kavan__navbar-menu">
        {toggleMenu ? (
          <img
            alt="Close"
            onClick={() => setToggleMenu(!toggleMenu)}
            src={close}
            className="kavan__navbar_closeIcon"
          />
        ) : (
          <img
            alt="Menu"
            onClick={() => setToggleMenu(!toggleMenu)}
            src={menu}
            className="kavan__navbar_menuIcon"
          />
        )}
        {toggleMenu && (
          <div className="kavan__navbar-menu_container scale-up-center">
            <div className="kavan__navbar-menu_container_links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
