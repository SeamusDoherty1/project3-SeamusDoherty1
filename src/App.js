import styles from "./styles.css";
import { projects } from "./Projects";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const headerNames = {
  aboutMe: "About Me",
  Skills: "Skills",
  Projects: "Projects"
};
const aboutMeInformation = {
  name: "Seamus Doherty",
  DOB : "March 31st, 2006",
  University: "Pace University"
};
const contactDetails = {
  email: "sd30149p@pace.edu",
  linkedIn: "www.linkedin.com/in/seamus-doherty-1a84173b0",
  gitHub: "https://github.com/SeamusDoherty1"
};
function AboutMeFunc(){
  return(
    <>
      <h1>{headerNames.aboutMe}</h1>
      <p>{aboutMeInformation.name},<br></br>{aboutMeInformation.DOB}, <br></br>{aboutMeInformation.University}</p>
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
            <InteractiveCard>Click ME!</InteractiveCard>
            <img
              src= {project.img}
              alt = {project.name}
              width = "500"
              height = "200"
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
export default function Headers() {
   return (
    <>
    <div>
    <input type="checkbox" id="themeSwitch" name="theme-switch" class="theme-switch__input" />
	    <label for="themeSwitch" class="theme-switch__label">
		    <span>Switch theme</span>
	    </label>
    </div>
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/aboutme">About Me</Link> |{" "}
        <Link to="/contact">Contact</Link> | {" "}
        <Link to="/skills">Skills</Link> | {" "}
        <Link to="/projects">Projects</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/aboutme" element={<AboutMeFunc />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<SkillsFunc />} />
        <Route path="/projects" element={<ProjectsFunc />} />
      </Routes>
    </BrowserRouter>
     </>
   );

}

