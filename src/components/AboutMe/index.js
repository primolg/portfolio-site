import "./about-me.css";
import { useState } from "react";
import primoPhone from "./about-me-img.jpg";
import pdf from './primo-gill-resume.pdf'

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
              I am a recent graduate from both Fullstack Academy’s Web Development program, and the City College of New York, where I completed a bachelor's degree in Religious Studies and Graphic Design. I've moved back and fourth between the Netherlands and the United States throughout my life, and am currently residing and looking for work in New York City.
            </div>
            <br></br>
            <div>
              Alongside Web Development and Design I have a passion for music production and public transit.
            </div>
            <a id="download-resume" href={pdf} target="_blank">
              <h4>Download Resume</h4>
            </a>
          </p>
      </div>
    </div>
  );
}

export default AboutMe;
