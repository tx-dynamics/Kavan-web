import React from "react";
import "./homePage.css";
import { Navbar, Button, Footer } from "../../../components";
import {
  home_headerImg,
  dummy2,
  dummy3,
  dummy1,
  therapyIcon,
  star,
  appleStore,
  googleStore,
  climb,
  dots,
  direction,
  option,
  home,
  homeImage1,
  playStore,
  appleStore2,
  comparison,
  wave,
  mobileSS,
  homeIcon1,
  homeIcon2,
  homeIcon3,
  homeIcon4,
  homeIcon5,
  homeEllipse,
} from "../../../assets";
import Testimonial from "./comp/Testimonial";
import { red } from "@mui/material/colors";
import AppDownload from "../../../components/appDownload/appDownload";
import ReactButton from "../../../components/rectButton/reactButton";

export default function HomePage() {
  const testimonialArray = [
    {
      id: 1,
      text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 2,
      text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 3,
      text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 4,
      text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 5,
      text: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];
  const psychologistArray = [
    {
      id: 1,
      title:
        "Kavan Helps the psychologist coordinate easily with thier patients.",
    },
    {
      id: 2,
      title: "Easy Time Managment with the Online sessions.",
    },
    {
      id: 3,
      title: "Effectively streamline communication with patients.",
    },
  ];

  const availablePatientsArray = [
    {
      id: 1,
      name: "Dr. Atiana",
      img: dummy3,
      profession: "General Psychologist specialist",
      reviews: "540 Reviews (4.5 +)",
    },
    {
      id: 2,
      name: "Dr. Atiana",
      img: dummy2,
      profession: "General Psychologist specialist",
      reviews: "540 Reviews (4.5 +)",
    },
    {
      id: 3,
      name: "Dr. Atiana",
      img: dummy3,
      profession: "General Psychologist specialist",
      reviews: "540 Reviews (4.5 +)",
    },
  ];

  const iconArray = [
    {
      id: 1,
      title: "Agobiado? Empieza una sesión en menos de  25 minutos",
      icon: homeIcon1,
    },
    {
      id: 2,
      title: "Sesiones desde 25 EUR",
      icon: homeIcon2,
    },
    {
      id: 3,
      title: "Matcheo con el profesional que mejor cubra tus necesidades",
      icon: homeIcon3,
    },
    {
      id: 4,
      title: "Mas de 100 profesionales disponibles",
      icon: homeIcon4,
    },
    {
      id: 5,
      title: "Desde la comodidad de tu casa",
      icon: homeIcon5,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="home-view">
        {/* <div className="kawan-therapy_all-container">
          <h1>Therapy for all </h1>
          <div className="download-app-container">
            <p>Descarga la App para hacer el match</p>
          </div>
          <img src={direction} />
        </div>
        <img src={home} /> */}
      </div>
      <div
        className="kawan-home-main-image"
        style={{
          backgroundImage: `url(${homeImage1})`,
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1>Therapy for all</h1>
        <p>El futuro es emocional, invierte en ti</p>
        <div className="kawan-home-app-download-image-container">
          <img src={playStore} />
          <img src={appleStore2} />
        </div>
      </div>
      <div className="kawan-home-app-comparison-container">
        <img src={comparison} />
      </div>
      <div className="kawan-home-app-source-container">
        <p>
          source: <span> Journal of Telemedicine e-health</span>
        </p>
      </div>
      <div className="kawan-home-wave">
        <img src={wave} />
      </div>
      <div className="kawan-home-session-online">
        <p>
          Soluciones para tus <span>sesiones online</span>
        </p>
      </div>
      <div className="kawan-home-session-main-container">
        <div className="kawan-home-session-mobile-ss">
          <img src={mobileSS} />
        </div>
        <div className="kawan-home-session-vertical-line"></div>
        <div className="kawan-home-session-info-container">
          {iconArray.map((item) => {
            return (
              <div className="kawan-home-session-item">
                <img src={item.icon} />
                <h2>{item.title}</h2>
              </div>
            );
          })}
        </div>
      </div>

      <div className="kawan-home-ellipse">
        <img src={homeEllipse} />
        <div className="kawan-home-ellipse-btn-main-container">
          <ReactButton />
          <div className="kawan-join-btn-main-container">
            <p>
              ¿Eres psicólogo?{" "}
              <span style={{ color: "#006039", fontWeight: "600" }}>Únete</span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div>
        <AppDownload />
      </div>

      {/* <div className="header_main_view section__padding">
        <div className="header_content">
          <h1>
            Find Mental health in your life with the help of{" "}
            <span style={{ color: "#006039" }}>Kavan Health.</span>
          </h1>
          <p>
            The hospital is an integral part of a social and health organization
            with the function of providing services.
          </p>
          <div className="button_view">
            <Button border>Psychologist</Button>
            <Button>About us</Button>
          </div>
        </div>
        <div className="header_image">
          <img src={home_headerImg} alt={"Illustration"} />
        </div>
      </div>

      <div className="body_view">
        <div className="body_image">
          <img src={dummy1} alt={""} />
        </div>
        <div className="body_content">
          <h1 className="body_text_one">What we do</h1>
          <h1 className="body_text_two">
            The best therapy for your mental satisfactions
          </h1>
          <p className="body_text_three">
            The hospital is an integral part of a social and health organization
            with the function of providing services.
          </p>
          <div className="body_therapy_icon_view">
            <img src={therapyIcon} alt={""} />
            <p>Therapy Session</p>
          </div>
        </div>
      </div>

      <div className="body_view" style={{ paddingTop: 0 }}>
        <div className="body_content2">
          <h1 className="body_text_one">Benefits of Online</h1>
          <h1 className="body_text_two" style={{ paddingTop: 15 }}>
            You Can Do Online Therapy On Your Terms.
          </h1>
          <p className="body_text_three" style={{ paddingTop: 15 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
            lobortis porttitor commodo mi in dolor facilisis amet, sed. Massa et
            id augue nisl nisi egestas. Diam diam tellus rutrum enim. Semper
            nisi pellentesque morbi eget aliquet sem eu. Neque amet neque enim
            Lorem ipsum dolor sit amet.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Button>Read more</Button>
          </div>
        </div>
        <div className="body_image2">
          <div className="body_image2_1_view">
            <img className="body_image2_1" alt={""} src={dummy3} />
          </div>
          <div className="body_image2_2_view">
            <img className="body_image2_1" alt={""} src={dummy2} />
          </div>
        </div>
      </div>

      <div className="helpView">
        <h1 className="body_text_one">How can we Help</h1>
        <h1 className="body_text_two" style={{ paddingTop: 10 }}>
          Psychologist & Patients
        </h1>
      </div> */}

      {/* <div className="optionsView">
        <div>
          <h1
            className="body_text_two"
            style={{ paddingTop: 15, paddingBottom: 15 }}
          >
            Psychologist
          </h1>
          {psychologistArray.map((item) => {
            return (
              <div className="dotTopView">
                <div className="dotStyle" />
                <p className="body_text_three" style={{ paddingTop: 0 }}>
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className="verticalDivider" />
        <div className="optionsContent">
          <h1
            className="body_text_two"
            style={{ paddingTop: 15, paddingBottom: 15 }}
          >
            Patients
          </h1>
          {psychologistArray.map((item) => {
            return (
              <div className="dotTopView">
                <div className="dotStyle" />
                <p className="body_text_three" style={{ paddingTop: 0 }}>
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div> */}

      <div className="availalbeTopView">
        {/* <h1 className="body_text_one">Psychologists</h1>
        <h1 className="body_text_two" style={{ paddingTop: 10 }}>
          Psychologist available 27/7 for patients
        </h1>
        <div className="patientsTopView">
          {availablePatientsArray.map((item) => {
            return (
              <div className="patientView">
                <img src={item.img} alt="" />
                <p className="patientView_title">{item.name}</p>
                <p className="patientView_profession">{item.profession}</p>
                <div className="patientView_star">
                  <img src={star} alt="" />
                  <p className="patientView_reviews">{item.reviews}</p>
                </div>
                <div style={{ marginTop: "2rem" }}>
                  <Button>Contact</Button>
                </div>
              </div>
            );
          })}
        </div> */}
        {/* <h1 className="body_text_one" style={{ paddingTop: 0 }}>
          Users Testimonials
        </h1>
        <div className="kwn-home-testimonial-heading-main_container">
          <h1>
            The hospital is an integral part of a social and health organization
            providing services.
          </h1>
        </div> */}
      </div>

      {/* <div className="kwn-home-testimonial-card-main_container">
        {testimonialArray.map((item) => {
          return <Testimonial item={item} />;
        })}
      </div>
      <div className="kvn-home-app-download_text-container">
        <h1 className="body_text_one" style={{ paddingTop: 0 }}>
          Download Now
        </h1>
      </div>
      <div className="kvn-home-app-download_by-click-container">
        <div className="kvn-home-app-download_by-click-photo-container">
          <img src={appleStore} alt="" />
          <img src={googleStore} alt="" />
        </div>
      </div> */}

      <Footer />
    </div>
  );
}
