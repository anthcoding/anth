import React from "react";
//STYLES
import "./work.styles.scss";
//IMAGES
import BlueBg from "../../assets/images/Imagen2.png";
//COMPONENTS
import Footer from "../footer/footer.compnent";
//ANIMATIONS-ON-SCROLL
import Fade from "react-reveal/Fade"; // Importing Zoom effect

const Work = () => {
  return (
    <div className="work">
      <img className="about-image2" src={BlueBg} alt="" />
      <div className="work-title">Work....</div>
      <div className="work-proyects-container">
        <Fade left cascade>
          <div className="work-proyect">
            <div className="work-proyect-info info-1">
              <p>
                This is a search app where I use the
                <a
                  className="info-link"
                  target="_blank"
                  href="https://rickandmortyapi.com/"
                  rel="noreferrer"
                >
                  Rick and Morty API
                </a>
                ( an American adult animated science fiction sitcom) and feched
                the characters’s data.
              </p>
            </div>
            <a
              href="http://rmanthlorenzo.netlify.com"
              target="_blank"
              rel="noreferrer"
              className="work-proyect-image1"
            >
              <div className="work-image-gradient"></div>
            </a>
          </div>
        </Fade>
        <Fade right cascade>
          <div className="work-proyect">
            <a
              className="work-proyect-image2"
              href="https://github.com/anthcoding/a-shoes"
              target="_blank"
              rel="noreferrer"
            >
              <div className="work-image-gradient"></div>
            </a>
            <div className="work-proyect-info info-2">
              <p>
                This one is an E-commerce personal proyect where I used
                technologies like Redux for the state management. I also made an
                authentication with
                <a
                  className="info-link"
                  target="_blank"
                  href="https://firebase.google.com/?hl=es"
                  rel="noreferrer"
                >
                  Firebase
                </a>
                .
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
};

export default Work;

//
