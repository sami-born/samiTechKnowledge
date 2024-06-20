import React from "react";
import '../homepage.css';
import '../fonts/Barlow-Light.ttf';
import Inhalt from './Inhalt';

function Homepage() {
  return (
    
    <>
    <div className="mainpage">
      

      <li className="dropdown">
        <li>Sprache</li>
          <div className="dropdownContent">
            <a href>English</a>
            <a href>Deutsch</a>
            <a href>Español</a>
            <a href>Dansk</a>
          </div>
        
      </li>



      <div>
        <h1 className="title">TechKnowledgeBase</h1>
      </div>



      <div className="dropdown">
        <li>Meine Seite</li>
        <div className="dropdownContent">
          <a href>Startseite</a>
          <a href>Meine Noten</a>
          <a href>Letzter Eintrag</a>
          <a href>Suche</a>
        </div>
      </div>

      </div>


      <>
      <Inhalt/>
      </>
    
    </>
  );
}

export default Homepage;