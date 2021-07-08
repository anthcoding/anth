import React from "react";
//STYLES
import "./home.styles.scss";
//COMPONENTS
import Header from "../../components/header/header.component";

//IMAGES
import ManAndLap from "../../assets/images/manPhoto6.png";

const HomePage = () => {
  return (
    <div className="home">
      <Header />
      <div className="presentation-container">
        <div className="title-container">
          <div className="title">
            Hey there!
            <br />
            I’m Anth.
          </div>
          <div className="title2">
            I’m a front-end web developer based in Cuba who really loves
            tailoring and designing the state of the art UI experience.
          </div>
        </div>
        <div className="image-container">
          <img className="image" src={ManAndLap} alt="Developer Image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
