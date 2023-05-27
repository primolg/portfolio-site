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
          <h4>NS Meetup is a web application built to find trips and corresponding meeting point to make it easy for travelers to find each other in or around train stations. I designed and developed the application while I was living in the Netherlands, so it is made exclusively for Dutch rail transit.</h4>
          <h4 style={{textIndent:"2em"}}>Since it is a public transit application, I wanted the interface to feel reliable, and calming, and therefor decided to use the traditional Dutch colour palette of “Delfts Blauw”, sure to be recognised by locals or even tourists with a sharp eye.<br></br><br></br>
          All design work was done with Figma and Adobe Illustrator. 1/23
          </h4>
        </>
        <>
          <h2>New Faces Logo<a href={nfPage} target="_blank">view</a></h2>
          <h4>New Faces is a Miami based marketing consulting agency that specialises in brand development. They wanted a logo to use in their branding such as thumbnails, social media accounts, etc.
              <br></br>
              <br></br>All design work was done in Adobe Illustrator
          </h4>
        </>
        <>
          <h2>E-commerce Template <a href={ecomPage} target="_blank">view</a></h2>
          <h4>Design for an e-commerce store, demonstration visible <a href="https://youtu.be/b3bE3aE_fnk" target="_blank">here</a></h4>
          <h4>I used IKEA as placeholder branding since they have a strong universal identity, and wanted to challenge myself to make a version of their web store that has a more intuitive and direct design, that can suit a wide range of products. 
              <br></br>
              <br></br>All design work was done in Adobe Illustrator 5/23
          </h4>
        </>
        <br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    </div>
  );
}

export default Design;
