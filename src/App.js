import styles from "./styles.css";
import { ProjectsAPI } from "./Projects";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { createContext, useContext, useState, useEffect } from 'react';
const headerNames = {
  aboutMe: "About Me",
  Skills: "Skills",
  Projects: "Projects"
};
const aboutMeInformation = {
  name: "Seamus Doherty",
  DOB : "March 31st, 2006",
  University: "Pace University",
  Photo : "../Rathalos_flying.png"
};
const contactDetails = {
  email: "sd30149p@pace.edu",
  linkedIn: "www.linkedin.com/in/seamus-doherty-1a84173b0",
  gitHub: "https://github.com/SeamusDoherty1"
};
function AboutMeFunc(){
  const [isShown, setIsShown] = useState(false);
  return(
    <>
      <h1>{headerNames.aboutMe}</h1>
      <div 
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        style={{ border: '1px solid black', padding: '10px', width: '200px' }}
      >
      <p>{aboutMeInformation.name},<br></br>{aboutMeInformation.DOB}, <br></br>{aboutMeInformation.University}</p>
      {isShown && (
        <img src= "../SoBotzApplication.png" width = '500' height = '200' align = 'center'/>
      )}
      </div>
    </>
  );
}
function SkillsFunc(){
  return(
    <>
      <h1>{headerNames.Skills}</h1>
      <ul>
        <li>Javascript</li>
        <li>HTML</li>
        <li>Java</li>
        <li>Python</li>
        <li>Experience with Data Prediction software</li>
        <li>Experience with API Navigation and Application</li>
      </ul>
    </>
  )
}
function ProjectsFunc(){
  return(
    <>
      <h1>{headerNames.Projects}</h1>
      <ul>
        {projects.map(project => 
          <li>
            <p>
              <b>{project.name}:</b>
              {' ' + project.description + ' '}
            </p>
              <img
              src= {project.img}
              alt = {project.name}
              width = '500'
              height = '200'
              />
          </li>
        )}
      </ul>
    </>
  )
}
function Contact(){
  return(
    <>
    <div id="contacts">
      <h2>Contact Details</h2>
      <p2><a href={contactDetails.linkedIn}>LinkedIn</a> | <a href={contactDetails.gitHub}>Github</a> | {contactDetails.email} </p2>
    </div>
    </>
  )
}
function darkMode(){
    var element = document.body;
    element.classList.toggle(".dark-mode");
}
function EasterEgg(){
  return(
    <>

    </>
  )
}
export default function Headers() {
   return (
    <>
    <body>
    <button onclick="darkMode()">Toggle Dark and Light mode</button>
    <BrowserRouter>
      {/* Navigation */}
      <div id="Nav-Header">
      <nav>
        <Link to="/aboutme">About Me</Link> |{" "}
        <Link to="/contact">Contact</Link> | {" "}
        <Link to="/skills">Skills</Link> | {" "}
        <Link to="/projects">Projects</Link>
      </nav>
      </div>

      {/* Routes */}
      <Routes>
        <Route path="/aboutme" element={<AboutMeFunc />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<SkillsFunc />} />
        <Route path="/projects" element={<ProjectsAPI />} />
      </Routes>
    </BrowserRouter>
    </body>
     </>
   );


}

