import "./projects.css";
import { BiDownload } from 'react-icons/bi'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import NSshow from "./NSshow.png"
function Projects() {

  const [loaded, setLoaded] = useState(false)
    if (!loaded){
        setTimeout(()=>{
            setLoaded(true);
        }, 1
        );
    }

  return(
    <div id="page-outer-div" className={loaded ? "active" : ""}>
      <div id="projects">
        {/* NS MEETUP */}
          <div className="project">
            <div className="project-titles">
              <h3>NS Meetup</h3>
              <h4>Public transit meetup app</h4>
            </div>
            <div>∙ Uses third party API's to find trips and their related locations</div>
            <div>∙ Developed using React, Axios, (Less) CSS, & other libraries</div>
            <div>
            <a href="https://nsmeetup.netlify.app/">App (mobile)</a>
            <a href="https://github.com/primolg/NS-meetup">Github</a>
            </div>
            <img src={NSshow} alt="NS-Meetup app display" />
          </div>
        {/* BOOK BEASTS */}
          <div className="project">
            <div className="project-titles">
              <h3>Book Beasts</h3>
              <h4>Content management/writing tool</h4>
            </div>
            <div>∙ An application for students (aged 5-12) to write books, and instructors to manage and review their students' work</div>
            <div>∙ Developed using React, Redux, PSQL, Axios, (Less) CSS, & other libraries</div>
            <div>∙ My responsibilities included developing the student portal & writing tool</div>
            <div>
            <a href="https://github.com/primolg/Book-Beasts">Github</a>
            </div>
          </div>
        {/* LoL Cards */}
        <div className="project">
            <div className="project-titles">
              <h3>LoL Cards</h3>
              <h4>E-commerce store</h4>
            </div>
            <div>∙ An E-commerce store to buy league of legend cards (not a real product)</div>
            <div>∙ Developed using React, Redux, PSQL, Axios, (Less) CSS, & other libraries</div>
            <div>∙ My responsibilities included developing cart/guest cart feature, styling, and project planning</div>
            <div>
              <a href="https://github.com/primolg/League-of-Legends-Cards">Github</a>
            </div>
          </div>
        {/* PORTFOLIO SITE */}
        <div className="project">
            <div className="project-titles">
              <h3>Portfolio site</h3>
            </div>
            <div>∙ developed using React, (Less) CSS, & other libraries</div>
            <div>
              <a href="https://github.com/primolg/portfolio-site">Github</a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Projects;
