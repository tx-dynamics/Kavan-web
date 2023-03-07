import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import ReactSimplyCarousel from "react-simply-carousel";
import "./aboutUs.css";
import { Navbar, Footer, Button } from "../../../components";
import {
  dummy2,
  dummy3,
  dummy,
  verified,
  check,
  rightArrow,
  aboutUsImg,
  emoji1,
  aboutEllipse,
  kawan,
  listTag,
  forArrow,
  preArrow,
  emoji2,
  emoji3,
  aboutEllipse2,
} from "../../../assets";
import AppDownload from "../../../components/appDownload/appDownload";

const listLink = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur. Eget risus vulputate in ",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur. Eget risus vulputate in ",
  },
];

const emojisArr = [
  {
    id: 1,
    title: "Who we are",
    des: "Kavan es una empresa de terapias online comprometida con democratizar el acceso a las terapias y mejorar el bienestar mental y emocional de las personas.",
    img: emoji1,
  },
  {
    id: 1,
    title: "What we do",
    des: "Ofrecemos terapias online accesibles y personalizadas mediante el uso de un chatbot para determinar las necesidades de los clientes y recomendar psicólogos específicos.",
    img: emoji2,
  },
  {
    id: 1,
    title: " Why we do it?",
    des: "Consideramos que todas las personas merecen tener acceso a terapias de calidad, independientemente de su situación. Trabajamos para crear un espacio donde las personas puedan convertirse en su mejor versión, ayudando así a mejorar su bienestar mental y emocional.",
    img: emoji3,
  },
];
export default function AboutUs() {
  const [activeSlide, setActiveSlide] = useState(0);

  const reviewData = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur. Id tincidunt est dui mauris pharetra venenatis amet aliquet in. Massa ridiculus dui faucibus ac risus rutrum donec aenean pharetra. Est metus sed facilisis pharetra egestas non ipsum. Lorem turpis tempor nulla morbi. Vitae elit amet sapien sed cursus hendrerit malesuada. Pharetra quam nulla pellentesque nunc. In in quis mauris.",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur. Id tincidunt est dui mauris pharetra venenatis amet aliquet in. Massa ridiculus dui faucibus ac risus rutrum donec aenean pharetra. Est metus sed facilisis pharetra egestas non ipsum. Lorem turpis tempor nulla morbi. Vitae elit amet sapien sed cursus hendrerit malesuada. Pharetra quam nulla pellentesque nunc. In in quis mauris.",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur. Id tincidunt est dui mauris pharetra venenatis amet aliquet in. Massa ridiculus dui faucibus ac risus rutrum donec aenean pharetra. Est metus sed facilisis pharetra egestas non ipsum. Lorem turpis tempor nulla morbi. Vitae elit amet sapien sed cursus hendrerit malesuada. Pharetra quam nulla pellentesque nunc. In in quis mauris.",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet consectetur. Id tincidunt est dui mauris pharetra venenatis amet aliquet in. Massa ridiculus dui faucibus ac risus rutrum donec aenean pharetra. Est metus sed facilisis pharetra egestas non ipsum. Lorem turpis tempor nulla morbi. Vitae elit amet sapien sed cursus hendrerit malesuada. Pharetra quam nulla pellentesque nunc. In in quis mauris.",
    },
    {
      id: 5,
      title:
        "Lorem ipsum dolor sit amet consectetur. Id tincidunt est dui mauris pharetra venenatis amet aliquet in. Massa ridiculus dui faucibus ac risus rutrum donec aenean pharetra. Est metus sed facilisis pharetra egestas non ipsum. Lorem turpis tempor nulla morbi. Vitae elit amet sapien sed cursus hendrerit malesuada. Pharetra quam nulla pellentesque nunc. In in quis mauris.",
    },
    {
      id: 5,
      title:
        "Lorem ipsum dolor sit amet consectetur. Id tincidunt est dui mauris pharetra venenatis amet aliquet in. Massa ridiculus dui faucibus ac risus rutrum donec aenean pharetra. Est metus sed facilisis pharetra egestas non ipsum. Lorem turpis tempor nulla morbi. Vitae elit amet sapien sed cursus hendrerit malesuada. Pharetra quam nulla pellentesque nunc. In in quis mauris.",
    },
  ];
  return (
  
    (
      <div>
        <Navbar />
        <div className="mianContainer">
          <div
            className="kawan-about_us-main-image-container"
            style={{
              backgroundImage: `url(${aboutUsImg})`,
              width: "100%",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1>
              About <span style={{ fontWeight: "600" }}>Kavan Health</span>
            </h1>
            <p style={{ marginTop: "6.4rem" }}>
              Kavan empezó con una misión:
              <span style={{ fontWeight: "500" }}>
                Crear un espacio donde las personas puedan convertirse en su
                mejor versión.
              </span>
            </p>
            <p style={{ marginTop: "3.4rem", marginBottom: "41rem" }}>
              Kavan empezó con una misión:
              <span style={{ fontWeight: "500" }}>
                Crear un espacio donde las personas puedan convertirse en su
                mejor versión.
              </span>
            </p>
          </div>
          <div className="kawan-about_us-emoji-main-container">
            {emojisArr.map((item) => {
              return (
                <div className="kawan-about_us-emoji-container">
                  <div className="kawan-about_us-emoji-sub-container">
                    {/* <div className="kawan-about_us-emoji-circle">
                    </div> */}
                    <img src={item.img} />
                    <h1>{item.title}</h1>
                  </div>
                  <p>{item.des}</p>
                </div>
              );
            })}
          </div>

          <div className="kawan-who_is-kawan-main-container">
            <img style={{ width: "100%" }} src={aboutEllipse2} />
          </div>

          {/* <div
            style={{
              backgroundImage: `url(${aboutEllipse})`,
              width: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="kawan-about_us-who_is-main-container">
              <div className="kawan-about_us-who_is-img">
                <img src={kawan} />
              </div>
              <div className="kawan-about_us-who_is-des-container">
                <div className="kawan-about_us-who_is-des-h1">
                  <h1>Who is Kavan</h1>
                </div>

                <p>
                  Kavan es una empresa con el objetivo de normalizar y facilitar
                  el acceso de porfessionales de la salud mental. Nuestro nombre
                  es en honor al elefante Kaavan, quien vivió encerrado en un
                  zoológico de Tailandia durante 35 años, deprimido y
                  malnutrido. Con este nombre queremos llamar la atención sobre
                  la importancia del bienestar mental y emocional.
                </p>
                <div style={{ marginTop: "3rem" }}>
                  <p>
                    democratizar el acceso a las terapias y hacerlas más
                    accesibles para todas las personas. Ofrecemos terapias
                    personalizadas para ayudar a las personas a alcanzar sus
                    metas y mejorar su bienestar mental y emocional.
                  </p>
                </div>

                <div style={{ marginTop: "3rem" }}>
                  <p>
                    No te conformes con menos, el bienestar mental y emocional
                    está al alcance de tu mano con Kavan. ¡Toma el control de tu
                    vida y agende tu primera sesión con nosotros hoy!
                  </p>
                </div>
                <div className="kawan-about_us-who_is-list-tag-container">
                  {listLink.map((item) => {
                    return (
                      <div className="kawan-about_us-list-tag-container">
                        <img src={listTag} />
                        <h1>{item.title}</h1>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div> */}

          <div className="kawan-about_us-who_is-professional-heading">
            <h3>Conoce a nuestros profesionales</h3>
          </div>

          <div>
            <Carousel
              innerProps={{
                style: {
                  maxWidth: "100%",
                  minWidth: "100%",
                  marginBottom: "12rem",
                },
              }}
              containerProps={{
                style: {
                  width: "100%",
                  justifyContent: "space-between",
                  position: "relative",
                  zIndex: 10,
                },
              }}
              activeSlideIndex={activeSlide}
              infinite={false}
              onRequestChange={setActiveSlide}
              forwardBtnProps={{
                className: "kawan-carousal-btn-for",
                disabled: activeSlide == reviewData.length - 3 ? true : false,
                children: (
                  <img
                    style={{ height: "2.3rem", width: "1.3rem" }}
                    src={forArrow}
                  />
                ),
                style: {
                  width: "4rem",
                  height: "4rem",
                  alignSelf: "center",
                  background:
                    activeSlide == reviewData.length - 3
                      ? "#3D5A80"
                      : "#275F40",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  position: "absolute",
                  right: "47%",
                  top: "90%",
                  cursor: "pointer",
                },
              }}
              backwardBtnProps={{
                className: "kawan-carousal-btn-back",
                children: (
                  <img
                    style={{ height: "2.3rem", width: "1.3rem" }}
                    src={preArrow}
                  />
                ),
                style: {
                  width: "4rem",
                  height: "4rem",
                  alignSelf: "center",
                  background: activeSlide == 0 ? "#3D5A80" : "#275F40",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "4px",
                  position: "absolute",
                  left: "47%",
                  top: "90%",
                  cursor: "pointer",
                },
              }}
              dotsNav={{
                show: false,
                itemBtnProps: {
                  style: {
                    height: 16,
                    width: 16,
                    borderRadius: "50%",
                    border: 0,
                  },
                },
                activeItemBtnProps: {
                  style: {
                    height: 16,
                    width: 16,
                    borderRadius: "50%",
                    border: 0,
                    background: "black",
                  },
                },
              }}
              itemsToShow={2}
              speed={400}
            >
              {reviewData.map(() => {
                return (
                  <div className="kawan-about_us-who_is-proffes-review-container">
                    <div className="kawan-about_us-who_is-prof-profile-container">
                      <img src={dummy2} />
                      <div className="kawan-about_us-who_is-prof-profile-name-container">
                        <h2>Ms. Barry Kilback </h2>
                        <h3>Psychologist</h3>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Id tincidunt est
                      dui mauris pharetra venenatis amet aliquet in. Massa
                      ridiculus dui faucibus ac risus rutrum donec aenean
                      pharetra. Est metus sed facilisis pharetra egestas non
                      ipsum. Lorem turpis tempor nulla morbi. Vitae elit amet
                      sapien sed cursus hendrerit malesuada. Pharetra quam nulla
                      pellentesque nunc. In in quis mauris.
                    </p>
                  </div>
                );
              })}
            </Carousel>
            <div>
              <AppDownload />
            </div>
            <div style={{ marginTop: "6rem" }}></div>
          </div>

          {/* <div className="aboutTextDiv">
          <h1>About Kavan Health</h1>
        </div>
        <div className="usersTopDiv">
          <div className="kvn-about-viewers-main_container">
            <div className="usersDiv">
              <img src={verified} alt="" className="verifiedLogo" />
              <div className="verifiedDiv">
                <h1>100+ Verified Users</h1>
                <div className="userDetailView">
                  <img src={dummy} alt='' />
                  <div>
                    <h2>Theresa Webb</h2>
                    <p>psychologist</p>
                  </div>
                </div>
                <div className="userDetailView">
                  <img src={dummy2} alt='' />
                  <div>
                    <h2>Albert Flores</h2>
                    <p>psychologist</p>
                  </div>
                </div>
                <div className="userDetailView">
                  <img src={dummy3} alt='' />
                  <div>
                    <h2>Robert Fox</h2>
                    <p>psychologist</p>
                  </div>
                </div>
                <div className="seeMoreDiv">
                  <h4>See more</h4>
                  <div className="kvn-about_us-right_arrow">
                    <img src={rightArrow} alt='' />
                  </div>
                </div>
              </div>
              <div className="contactDiv">
                <img src={dummy2} alt='' />
                <h2>Daniel Kahneman</h2>
                <p>psychologist</p>
                <Button marginTop={20}>Contact</Button>
              </div>
            </div>
          </div>
          <div className="chooseView">
            <h2>Why Choose Us</h2>
            <h1>
              Our Psychologist always available 24/7 for patient psychologist
              therapy.
            </h1>
            <p>
              The its enable direct men depend highly. Ham windows sixteen who
              inquiry fortune demands.
            </p>
            <div className="divider" />
            <div className="checkView">
              <img src={check} alt='' />
              <p>Get Overview at a glance</p>
            </div>
            <div className="checkView">
              <img src={check} alt='' />
              <p>Deoposit funds easily, securlity</p>
            </div>
            <div className="checkView">
              <img src={check} alt='' />
              <p>Get Live Support</p>
            </div>
          </div>
        </div>
        <div className="detailView">
          <h2>About Kavan Health</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
            aliquet sed in suspendisse diam. Nulla egestas elementum enim, sed
            eleifend sit sed. Pulvinar ac odio porttitor nunc faucibus massa
            vitae consectetur. Elit volutpat eu non enim tellus duis ante nisi,
            fermentum. Suspendisse commodo id lobortis est. Aliquam, odio at
            massa ut gravida facilisi non dui. Erat diam, amet nulla condimentum
            nisi et quis ut justo. Non nunc sit volutpat pretium, ut. Imperdiet
            lobortis in amet, dolor vulputate amet. Facilisis at vestibulum
            turpis platea odio consectetur et, eget. Lacus vitae varius
            suspendisse arcu, non id. Quam viverra feugiat vitae dignissim
            hendrerit fusce aliquam. Adipiscing neque vel ac odio. Dolor
            placerat tortor varius nunc, bibendum. Blandit arcu consectetur
            aliquam bibendum etiam. Facilisi dolor, non porttitor integer
            sagittis, vitae malesuada vehicula. Tortor convallis scelerisque
            fames auctor eros, sed. Quisque ullamcorper cras orci vitae. Arcu
            tellus amet, tristique fermentum vitae pellentesque. Sed odio
            tincidunt fermentum odio. Lacinia risus egestas posuere orci quisque
            felis, augue vitae ornare. Sit tempus nunc velit vel facilisi
            convallis integer lacus id. Tempus aliquam nisl dis in. Morbi quam
            massa quisque ut blandit ut ac ac feugiat. Facilisis tortor,
            elementum consectetur enim tristique. Libero aenean massa odio
            tristique ullamcorper nunc donec fusce. Dignissim in ante volutpat
            diam pharetra mauris vitae nam sem. Nisl cursus vitae platea nulla
            maecenas. Sit euismod pretium, volutpat faucibus natoque non. Lorem
            amet velit in scelerisque eget laoreet morbi. Mattis ut donec
            commodo auctor pretium risus, convallis. Neque egestas aenean nulla
            sollicitudin ac enim. Elementum pellentesque nulla pretium
            vulputate. Nisl tincidunt sit id nisl elit aliquet pellentesque. Sit
            et massa nisl dictum. Tincidunt non, pellentesque tristique diam.
            Pellentesque tellus, ipsum amet sollicitudin sit. Vivamus
            ullamcorper imperdiet integer feugiat. Nulla dapibus sit vestibulum
            sit massa augue neque. Metus, turpis odio leo auctor adipiscing
            accumsan enim semper id. Volutpat neque, non sit duis leo. Sed vitae
            augue odio varius in sollicitudin etiam. Vestibulum elit massa
            pharetra, sed aliquet sem quisque. Nulla eget diam nullam tellus
            lacus, sem lorem lectus laoreet. Nisl, turpis odio turpis tellus.
            Morbi tincidunt nullam ultrices arcu dolor viverra consectetur
            libero. Pretium urna sit tellus sed varius pharetra. Nam risus
            ultricies orci, volutpat sit adipiscing. Nec, volutpat consectetur
            enim pellentesque convallis. Quam nulla quis et in purus justo,
            feugiat in venenatis. Nisl lacus, bibendum egestas risus ut euismod
            commodo dignissim. Sagittis, vel enim, amet, facilisi phasellus.
            Aliquam non nec consectetur ullamcorper sagittis purus etiam in.
            Eleifend amet quam rhoncus, elit arcu, etiam felis ultrices.
            Hendrerit sit blandit massa rhoncus pretium a cras ultrices mauris.
            Risus, aenean nibh ac urna vulputate magna magna pretium in. Elit id
            odio urna blandit tortor, vestibulum felis vitae amet. Elementum
            morbi nunc, morbi egestas tellus amet facilisis vestibulum. Suscipit
            varius aliquam venenatis, dolor justo, semper tincidunt velit, sem.
            Enim sit vitae nulla parturient amet, risus. Lectus pellentesque
            amet, augue id volutpat, cras. Ut tempus diam ultrices feugiat. Sed
            fringilla semper commodo, sed. Quis tortor lacinia nibh ultrices
            libero elit, quis et. Cursus luctus tellus in ac dui risus sit orci.
            Sapien enim at nunc sagittis. Euismod aliquet et convallis viverra.
            Facilisis a feugiat porttitor nunc turpis nunc. Dictumst sagittis
            ornare varius viverra. Eu, ullamcorper mauris lacus morbi elit.
            Justo et tempor, pretium, eu vestibulum lacus. Feugiat et amet
            maecenas convallis molestie sed. Dolor lectus nulla consectetur
            viverra scelerisque. Tellus nulla elementum tincidunt sed nulla.
            Nisi, id fringilla ipsum velit non. Vitae a morbi nisl viverra vel
            dui. Faucibus elementum nunc vestibulum vulputate feugiat. Urna,
            leo, viverra purus mauris varius amet gravida. Integer vel eget
            semper facilisis ornare semper lacus hendrerit. Arcu, euismod sed
            tortor, sed est, imperdiet ullamcorper netus. Scelerisque elementum
            parturient malesuada faucibus diam ultricies mauris. Sem eget
            faucibus sed ut adipiscing nibh pharetra vitae. Faucibus ultrices
            eget ut mattis bibendum turpis sed amet. Imperdiet sagittis viverra
            eget pharetra, mauris pellentesque mauris mattis. Placerat lectus
            tortor eu quis cras felis eu. Nullam non elit, ullamcorper lectus
            pulvinar tortor. Congue sit nam pellentesque eget. Bibendum congue
            fringilla non pulvinar. Pellentesque magna potenti gravida consequat
            amet augue at turpis erat. Curabitur tempor sapien duis phasellus.
            Sed vitae tempor dignissim egestas fermentum pulvinar non. Faucibus
            sed orci imperdiet aenean velit. Turpis quam faucibus in sagittis
            non eu lobortis. Pellentesque molestie justo bibendum consectetur
            sem ultricies mattis etiam mi. Elementum velit posuere tincidunt et
            lorem feugiat. Vestibulum id odio neque placerat ornare massa congue
            varius. Sagittis adipiscing integer diam commodo. Feugiat quisque
            convallis massa nunc, eu adipiscing. Nisi quisque sollicitudin morbi
            a magna cras bibendum dictumst fringilla. Pharetra, nibh pharetra
            placerat mus enim scelerisque facilisi. Tempus in ridiculus lacus
            augue id. Condimentum auctor nunc tincidunt venenatis fermentum sem.
            Massa duis sit dolor vulputate. Sollicitudin sit pellentesque enim
            lorem porttitor. Ipsum pretium, nulla ipsum varius faucibus nunc.
            Molestie venenatis pharetra enim varius quis nisl. Suspendisse porta
            sodales tellus neque ac id quis tincidunt. Porttitor feugiat libero
            amet arcu, sed vitae lectus. Sit dictum tellus eget ac amet, massa
            purus, dolor platea. Posuere convallis venenatis, diam turpis ut nam
            sed eu. Ac in pellentesque aliquam sed. Id nec est posuere morbi.
            Scelerisque nulla mattis eget in pellentesque ornare a. Bibendum
            congue fringilla non pulvinar. Pellentesque magna potenti gravida
            consequat amet augue at turpis erat. Curabitur tempor sapien duis
            phasellus. Sed vitae tempor dignissim egestas fermentum pulvinar
            non. Faucibus sed orci imperdiet aenean velit. Turpis quam faucibus
            in sagittis non eu lobortis. Pellentesque molestie justo bibendum
            consectetur sem ultricies mattis etiam mi. Elementum velit posuere
            tincidunt et lorem feugiat. Vestibulum id odio neque placerat ornare
            massa congue varius.{" "}
          </p>
        </div> */}
        </div>
        <Footer />
      </div>
    )
  );
}
