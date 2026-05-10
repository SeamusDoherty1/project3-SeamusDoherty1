import styles from "./styles.css";
import { ProjectsAPI } from "./Projects";
import { AboutMeFunc, headerNames, contactDetails } from "./AboutMe";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { createContext, useContext, useState, useEffect } from 'react';
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
    <div className="app-container"> {/* Use a div instead of body[cite: 5] */}
      <BrowserRouter>
        <div id="Nav-Header">
          <nav>
            <Link to="/aboutme">About Me</Link> |{" "}
            <Link to="/contact">Contact</Link> | {" "}
            <Link to="/skills">Skills</Link> | {" "}
            <Link to="/projects">Projects</Link>
          </nav>
        </div>
        <Routes>
          <Route path="/aboutme" element={<AboutMeFunc />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<SkillsFunc />} />
          <Route path="/projects" element={<ProjectsAPI />} />
        </Routes>
      </BrowserRouter>
    </div>
   );
}

