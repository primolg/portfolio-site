import "./design.css";
import { useState } from "react";
import ecomPage from './assets/ecomPage.jpg'
import nfPage from './assets/nfPage.jpg'
import nsPage from './assets/nsPage.jpg'

function Design() {

  const [loaded, setLoaded] = useState(false)
    if (!loaded){
        setTimeout(()=>{
            setLoaded(true);
        }, 1
        );
    }

  return(
    <div id="page-outer-div" className={loaded ? "active" : ""}>
      <div id="design">
        <>
          <h2>NS Meetup <a href={nsPage} target="_blank">view</a></h2>  
          <h4>NS Meetup is a web application used to find trips and recommended meeting points for the given trip, to make it easy for people to find each other in/around train stations. I designed and developed the application while I was living in the Netherlands, so it’s made exclusively for Dutch rail transit.
          </h4>
          <h4 style={{textIndent:"2em"}}>The goal was to create a clean, and reliable design for the interface, so I decided to use a traditional Dutch colour palette of “Delfts Blauw”, sure to be recognised by locals or even tourists with a  sharp eye. 
          <br></br><br></br>
          All design work was done with Figma and Adobe Illustrator.
          </h4>
        </>
        <>
          <h2>New Faces <a href={nfPage} target="_blank">view</a></h2>
          <h4>New Faces is a Miami based marketing consulting agency that specialises in brand development. They wanted a logo to use in their branding such as thumbnails, social media accounts, etc.
              <br></br>
              <br></br>All design work was done in Adobe Illustrator
          </h4>
        </>
        <>
          <h2>E-commerce Template <a href={ecomPage} target="_blank">view</a></h2>
          <h4>Template/structure design for an easy to navigate e-commerce store, demonstration visible here. 
          </h4>
          <h4>I used IKEA as placeholder branding since they have strong universal branding, but I felt that IKEA’s web-store was difficult to navigate, and wanted to challenge myself to make a more intuitive, direct design, that I see suiting a wide range of products.  
              <br></br>
              <br></br>All design work was done in Adobe Illustrator
          </h4>
        </>
        <br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    </div>
  );
}

export default Design;
