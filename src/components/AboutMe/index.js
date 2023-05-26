import "./about-me.css";
import { useState } from "react";
import primoPhone from "./about-me-img.jpg";

function AboutMe() {

  const [loaded, setLoaded] = useState(false)
    if (!loaded){
        setTimeout(()=>{
            setLoaded(true);
        }, 1
        );
    }

  return(
    <div id="page-outer-div" className={loaded ? "active" : ""}>
      <div id="about-me">
        <div id="img-holder">
          <img src={primoPhone} alt="primo gill portrait" />
        </div>
          <p id="about-me-text">
            <div>
              I am a recent graduate from both Fullstack Academy’s web development program, and the City College of New York, where I completed a bachelor's degree in Religious Studies and graphic design. I am a dual citizen who’s moved back and fourth between the Netherlands and the United States throughout my life, and am currently residing in New York City.
            </div>
            <div>
              Alongside web development and design I have a passion for music production and public transit.
            </div>
          </p>
      </div>
    </div>
  );
}

export default AboutMe;
