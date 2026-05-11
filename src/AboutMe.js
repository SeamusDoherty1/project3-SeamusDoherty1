import React, { createContext, useContext, useState, useEffect } from 'react';
export const headerNames = {
  aboutMe: "About Me",
  Skills: "Skills",
  Projects: "Projects",
  Photo : "../Rathalos_flying.png",
  gitHub: "SeamusDoherty1"
};
const aboutMeInformation = {
  name: "Seamus Doherty",
  DOB : "March 31st, 2006",
  University: "Pace University",
  Photo : "../Rathalos_flying.png"
};
export const contactDetails = {
  email: "sd30149p@pace.edu",
  linkedIn: "www.linkedin.com/in/seamus-doherty-1a84173b0",
  gitHub: "https://github.com/SeamusDoherty1"
};
export function AboutMeFunc() {
  const [isShown, setIsShown] = useState(false);
  const [githubData, setGithubData] = useState(null); // State to store GitHub profile info

  useEffect(() => {
    fetch("https://api.github.com/users/SeamusDoherty1")
      .then(response => response.json())
      .then(data => setGithubData(data))
      .catch(err => console.error("Error fetching GitHub profile:", err));
  }, []); // Only runs once

  return (
    <>
    <div id = "centered">
        <h1>{headerNames.aboutMe}</h1>
        <div class="container">
                {/* User Info from aboutMeInformation[cite: 5] */}
                <img src="../portriat.jpg" id="portriat" className="image" />
                <div class="overlay">
                <p class="text">{aboutMeInformation.name},<br />{aboutMeInformation.DOB}, <br />{aboutMeInformation.University}</p>
                      {githubData && (
                <div style={{ marginTop: '10px', fontSize: '0.9em', display: 'block'}}>
                  <img 
                    src={githubData.avatar_url} 
                    alt="GitHub Avatar"
                    style={{ width: '50px', borderRadius: '50%', alignItems: 'center'}} 
                  />
                  <p>
                    <b>Followers:</b> {githubData.followers}<br />
                    <b>Public Gists:</b> {githubData.public_gists}<br />
                    {/* Note: Organizations and Stars require separate API calls or specialized fields */}
                    <b>GitHub Profile:</b> <a href={githubData.html_url} target="_blank" rel="noreferrer">View</a>
                  </p>
                </div>
                      )}
                </div>
      {/* Display GitHub API Data */}
      </div>
      </div>
    </>
  );
}